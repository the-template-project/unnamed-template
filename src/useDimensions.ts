import React, { useEffect } from 'react';


const useDimensions = <T extends HTMLElement>(
  el: React.RefObject<T>,
  callBack: (rect: DOMRectReadOnly) => void,
): void => {
  useEffect(() => {
    const currentElement = el;
    const observer: ResizeObserver = new ResizeObserver(([element]) => {
      callBack(element.contentRect);
    });
    observer.observe(currentElement.current!);
    return () => {
      observer.unobserve(currentElement.current!);
    };
  }, [el, callBack]);
};

export default useDimensions;
