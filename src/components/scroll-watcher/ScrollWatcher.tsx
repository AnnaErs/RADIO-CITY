import {PropsWithChildren, memo, useCallback, useEffect, useRef} from 'react';

const checkVisible = (elm: HTMLDivElement) => {
  const rect = elm.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
};

type ScrollWatcherPropsType = PropsWithChildren<{
  onScrollBottom: () => void;
}>;

const ScrollWatcher = memo<ScrollWatcherPropsType>(function ScrollWatcher({children, onScrollBottom}) {
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    if (ref.current && checkVisible(ref.current)) {
      onScrollBottom();
    }
  }, [onScrollBottom]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, {capture: true});

    return () => {
      window.removeEventListener('scroll', onScroll, {capture: true});
    };
  }, [onScroll]);

  return (
    <>
      {children}
      <div ref={ref} />
    </>
  );
});
export {ScrollWatcher};
