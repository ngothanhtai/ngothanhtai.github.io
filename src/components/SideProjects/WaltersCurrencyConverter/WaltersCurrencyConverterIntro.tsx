import React from "react";
import { Spacer } from "../../Spacer/Spacer";

const WaltersCurrencyConverterIntro: React.FC = () => {
  return (
    <>
      <div className="body">
        A currency converter utility which supports converting more than 160
        currencies for macOS, iOS and Android.
      </div>
      <Spacer height={12} />
      <div className="body">
        Useful when traveling and spending money in other countries.
      </div>
    </>
  );
};

export { WaltersCurrencyConverterIntro };
