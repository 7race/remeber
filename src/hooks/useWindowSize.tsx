import { useState, useEffect } from 'react';

type TSize = {
  width: number | undefined;
  height: number | undefined;
};

export const useWindowSize = (): TSize => {
  const [windowSize, setWindowSize] = useState<TSize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};
