import React from "react";

const SMALL_SCREEN_WIDTH = 900;

const useWindowSize = (): [number, number] => {
  const [size, setSize] = React.useState<[number, number]>([0, 0]);

  const updateSize = React.useCallback(() => {
    setSize([document.body.clientWidth, window.innerHeight]);
  }, [setSize]);

  React.useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, [updateSize]);

  return size;
};

const isSmallScreen = (width: number): boolean => {
  return width <= SMALL_SCREEN_WIDTH;
};

const useVisibility = <T extends HTMLElement>({
  visiblePercentageByContent = 1,
}): [boolean, React.RefObject<T>] => {
  const [visible, setVisible] = React.useState(false);
  const ref = React.createRef<T>();

  const onScroll = React.useCallback(() => {
    if (!ref.current) {
      setVisible(false);

      return;
    }

    const { top, height } = ref.current.getBoundingClientRect();

    const offsetHeightBetweenWindowAndElement = window.innerHeight - top;

    const contentVisibleHeight = height * visiblePercentageByContent;

    const topEdge = (height - contentVisibleHeight) / 2;
    const bottomEdge = window.innerHeight + contentVisibleHeight;

    const visible =
      offsetHeightBetweenWindowAndElement > topEdge &&
      offsetHeightBetweenWindowAndElement < bottomEdge;

    setVisible(visible);
  }, [ref, visiblePercentageByContent]);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return [visible, ref];
};

export { useWindowSize, isSmallScreen, useVisibility };
