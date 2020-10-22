import React from "react";
import { Press } from "../../Press/Press";

const WaltersCurrencyConverterContact: React.FC = () => {
  return (
    <div className="body textAlignCenter">
      Any ideas, improvements, or anything, you are welcome, please send it to{" "}
      <Press
        url={"mailto:codesigngo@gmail.com"}
        onPress={(url) => window.open(url)}
      >
        <span className="highlightOnHover">codesigngo@gmail.com</span>
      </Press>
    </div>
  );
};

export { WaltersCurrencyConverterContact };
