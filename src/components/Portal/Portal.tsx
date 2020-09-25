import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal: React.FC = ({ children }) => {
  const mount = document.getElementById("portal-root");
  const elm = document.createElement("div");

  useEffect(() => {
    mount?.appendChild(elm);

    return () => {
      mount?.removeChild(elm);
    };
  }, [mount, elm]);

  return createPortal(children, elm);
};

export { Portal };
