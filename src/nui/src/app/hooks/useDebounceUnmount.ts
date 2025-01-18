import { useRef, useEffect } from "react";

export const useDebounceUnmount = (callback: () => void, delay: number): void => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const cleanup = () => {
      const timeout = setTimeout(() => {
        callbackRef.current();
      }, delay);

      return () => clearTimeout(timeout);
    };

    return cleanup();
  }, [delay]);
};

