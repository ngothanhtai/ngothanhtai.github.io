import React from "react";
import { Images } from "../../../assets/images";
import { Press } from "../../Press/Press";
import { Spacer } from "../../Spacer/Spacer";

const WaltersCurrencyConverter: React.FC = () => {
  return (
    <div className="flex flexColumn">
      <div className="hidden description fadeIn1">Support 160+ currencies</div>
      <Spacer height={6} />
      <div className="hidden description fadeIn2">
        It's useful when you are traveling and spending money in other
        countries.
      </div>
      <Spacer height={24} />
      <div className="flex flexRow jcCenter">
        <img
          className="hidden fadeIn3"
          height={300}
          alt="Walter's Currency Converter screenshot"
          src={Images.sideProjects.waltersccScreenshot}
        />
        <Spacer width={24} />
        <div className="flex flexColumn aiCenter jcCenter">
          <Press
            url="https://apps.apple.com/us/app/id1438605135"
            onPress={(url) => window.open(url, "_blank")}
          >
            <img
              className="hidden fadeIn3"
              width={150}
              alt="Appstore"
              src={Images.sideProjects.storeDownloadBadges.appstore}
            />
          </Press>

          <Spacer height={6} />

          <Press
            url="https://play.google.com/store/apps/details?id=com.walter.currencyconverter&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            onPress={(url) => window.open(url, "_blank")}
          >
            <img
              className="hidden fadeIn3"
              width={150}
              alt="Playstore"
              src={Images.sideProjects.storeDownloadBadges.playstore}
            />
          </Press>

          <Spacer height={6} />

          <Press
            url="https://apps.apple.com/us/app/walters-currency-converter/id1456511514"
            onPress={(url) => window.open(url, "_blank")}
          >
            <img
              className="hidden fadeIn3"
              width={150}
              alt="Mac App Store"
              src={Images.sideProjects.storeDownloadBadges.macAppStore}
            />
          </Press>
        </div>
      </div>
    </div>
  );
};

export { WaltersCurrencyConverter };
