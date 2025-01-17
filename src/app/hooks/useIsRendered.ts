import { useEffect, useState } from 'react';

export const useIsRendered = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);

    return () => setIsRendered(false);
  }, []);

  return isRendered;
};
