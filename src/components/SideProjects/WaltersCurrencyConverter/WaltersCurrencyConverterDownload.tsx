import React from "react";
import { Images } from "../../../assets/images";
import { Press } from "../../Press/Press";
import { Spacer } from "../../Spacer/Spacer";

type Props = {
  verticalLayout: boolean;
};

const WaltersCurrencyConverterDownload: React.FC<Props> = ({
  verticalLayout,
}) => {
  const storeImageSize = {
    width: verticalLayout ? 150 : undefined,
    height: !verticalLayout ? 60 : undefined,
  };
  return (
    <div className="flex flexColumn aiCenter">
      <div className="title fw500 red">
        Avaiable on <b>App Store</b>, <b>Mac App Store</b> and{" "}
        <b>Google Play</b>
      </div>

      <Spacer height={12} />

      <div className="flex flexRowResponsive">
        <Press
          url="https://apps.apple.com/us/app/id1438605135"
          onPress={(url) => window.open(url, "_blank")}
        >
          <img
            {...storeImageSize}
            alt="Appstore"
            src={Images.sideProjects.storeDownloadBadges.appstore}
          />
        </Press>

        <Spacer height={12} width={24} />

        <Press
          url="https://apps.apple.com/us/app/walters-currency-converter/id1456511514"
          onPress={(url) => window.open(url, "_blank")}
        >
          <img
            {...storeImageSize}
            alt="Mac App Store"
            src={Images.sideProjects.storeDownloadBadges.macAppStore}
          />
        </Press>

        <Spacer height={12} width={24} />

        <Press
          url="https://play.google.com/store/apps/details?id=com.walter.currencyconverter&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          onPress={(url) => window.open(url, "_blank")}
        >
          <img
            {...storeImageSize}
            alt="Playstore"
            src={Images.sideProjects.storeDownloadBadges.playstore}
          />
        </Press>
      </div>
    </div>
  );
};

export { WaltersCurrencyConverterDownload };
