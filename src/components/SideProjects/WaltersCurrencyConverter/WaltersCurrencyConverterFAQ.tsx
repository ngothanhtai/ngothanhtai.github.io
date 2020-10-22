import React from "react";
import { Spacer } from "../../Spacer/Spacer";

const WaltersCurrencyConverterFAQ: React.FC = () => {
  return (
    <>
      <div className="title fw500 red">FAQ</div>

      <div className="body fw600">
        How accurate is the data, and where does it come from?
      </div>
      <div className="description italic fw500">
        {">"} "Our spot exchange rates are sourced from a very broad base of
        commercial sources and banks around the world, each of varying types and
        frequencies. The larger weighting particularly for major currencies is
        towards commercial sources as they more accurately reflect the trading
        occurring in the markets. In order to ensure the highest possible level
        of data coverage and accuracy, the currencylayer system relies on a very
        distinct “validation and fallback” algorithm, assigning different
        priorities to each data source and validating each forex rate as it
        enters our databases. If a source fails to deliver an accurate quote,
        the next highest provider is queried for this particular currency pair.
        This enables us to sort out possible inaccuracies and provide the vast
        majority of all spot exchange rates with a precision of six decimal
        places."
      </div>
      <Spacer height={12} />
      <div className="description">
        Source:{" "}
        <a href="https://currencylayer.com/faq">
          https://currencylayer.com/faq
        </a>
      </div>

      <Spacer height={36} />

      <div className="body fw600">How often are exchange rates refreshed?</div>

      <div className="description">
        {">"} The app will refresh the currency rate <b>every 12 hours</b>.
      </div>
    </>
  );
};

export { WaltersCurrencyConverterFAQ };
