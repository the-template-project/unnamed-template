import React, { useLayoutEffect } from 'react';


const useDimensions = <T extends HTMLElement>(
  el: React.RefObject<T>,
  callBack: (rect: DOMRectReadOnly) => void,
): void => {
  useLayoutEffect(() => {
    const observer: ResizeObserver = new ResizeObserver(([element]) => {
      callBack(element.contentRect);
    });
    observer.observe(el.current!);
  }, [el, callBack]);
};

export default useDimensions;
