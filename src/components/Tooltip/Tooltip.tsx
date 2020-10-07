import classNames from "classnames";
import React from "react";
import { Portal } from "../Portal/Portal";

type Props = {
  text: string;
};

const Tooltip: React.FC<Props> = ({ text, children }) => {
  const [domRect, setDOMRect] = React.useState<DOMRect>();
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const [tooltipDOMRect, setTooltipDOMRect] = React.useState<DOMRect>();
  const onMouseOver = React.useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      const elm = e.target as HTMLElement;

      setDOMRect(elm.getBoundingClientRect());

      setTimeout(() => {
        if (tooltipRef.current) {
          setTooltipDOMRect(tooltipRef.current.getBoundingClientRect());
        }
      }, 250);
    },
    []
  );

  const onMouseOut = React.useCallback(() => {
    setDOMRect(undefined);
    setTooltipDOMRect(undefined);
  }, []);

  const visible = tooltipDOMRect != null;

  return (
    <>
      <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        {children}
      </div>
      {domRect && (
        <Portal>
          <div
            ref={tooltipRef}
            className={classNames("tooltip", { visible, hidden: !visible })}
            style={{
              left:
                domRect.x + (domRect.width - (tooltipDOMRect?.width ?? 0)) / 2,
              top: domRect.y + domRect.height + 4,
            }}
          >
            {text}
          </div>
        </Portal>
      )}
    </>
  );
};

export { Tooltip };
