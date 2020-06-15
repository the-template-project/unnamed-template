import React, { useEffect } from 'react';


const useDimensions = <T extends HTMLElement>(
  el: React.RefObject<T>,
  callBack: (rect: DOMRectReadOnly) => void,
): void => {
  useEffect(() => {
    const observer: ResizeObserver = new ResizeObserver(([element]) => {
      callBack(element.contentRect);
    });
    observer.observe(el.current!);
    return () => {
      observer.unobserve(el.current!);
    };
  }, [el, callBack]);
};

export default useDimensions;
