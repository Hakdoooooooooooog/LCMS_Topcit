import { useCallback, useLayoutEffect, useState } from "react";
export const useLoadingState = (customLoadingLogic?: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [previousPath, setPreviousPath] = useState(location.pathname);

  const handleLoading = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // customLoadingLogic();
  }, [customLoadingLogic]);

  useLayoutEffect(() => {
    if (previousPath !== location.pathname) {
      handleLoading();
    }
    setPreviousPath(location.pathname);
  }, [location.pathname, previousPath]);

  return { isLoading };
};
