import classNames from "classnames";
import React from "react";
import { Images } from "../../../assets/images";
import { Videos } from "../../../assets/videos";
import { isSmallScreen, useWindowSize } from "../../../utils/window";
import { Phone } from "../../Phone/Phone";
import { Press } from "../../Press/Press";
import { Spacer } from "../../Spacer/Spacer";
const phoneScale = 0.7;

type Props = {
  verticalLayout: boolean;
};

const Intro: React.FC = () => (
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

const Download: React.FC<Props> = ({ verticalLayout }) => {
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

const Contact: React.FC = () => (
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

const Features: React.FC<Props> = ({ verticalLayout }) => {
  return (
    <>
      <div className="title fw500 red">Features</div>

      <Spacer height={verticalLayout ? 40 : 100} />

      <div className="flex flexColumn jcCenter">
        <figure className="flex flexRowResponsive aiCenter jcCenter phoneOffset">
          <Spacer width={80} />
          <figcaption>
            <div className="title fw500 red">Change currency</div>
            <Spacer height={12} />
            <div className="body fw500 phoneDescription">
              Click on the flag icon, it will show the list of supported
              currencies. Search and select a currency to change.
            </div>
            <Spacer height={verticalLayout ? 24 : 300} />
          </figcaption>

          <Spacer width={80} />

          <Phone
            poster={Videos.changeCurrency.poster}
            video={Videos.changeCurrency.video}
            scale={phoneScale}
          />
        </figure>

        {verticalLayout && <Spacer height={60} />}

        <figure
          className={classNames("flex aiCenter jcCenter phoneOffset", {
            flexRow: !verticalLayout,
            flexColumn: verticalLayout,
            flexColumnReverse: verticalLayout,
          })}
        >
          <Phone
            video={Videos.dragAndDropToChangeTheOrder.video}
            poster={Videos.dragAndDropToChangeTheOrder.poster}
            scale={phoneScale}
          />

          <Spacer width={80} />

          <figcaption>
            <div className="title fw500 red">Change the currency order</div>
            <Spacer height={12} />
            <div className="body fw500 phoneDescription">
              Drag and drop on the currency row you want to change the order.
            </div>
            <Spacer height={verticalLayout ? 24 : 300} />
          </figcaption>
        </figure>

        {verticalLayout && <Spacer height={60} />}

        <figure className="flex flexRowResponsive aiCenter jcCenter">
          <Spacer width={80} />

          <figcaption>
            <div className="title fw500 red">Dark mode</div>
            <Spacer height={6} />
            <div className="body fw500 phoneDescription">
              Easily switch between light and dark mode or follow system
              preferences in Settings.
            </div>
            <Spacer height={verticalLayout ? 24 : 300} />
          </figcaption>

          <Spacer width={80} />

          <Phone video={Videos.changeTheme} loop scale={phoneScale} />
        </figure>
        <Spacer height={100} />

        <div className="flex flexRowResponsive aiCenter jcCenter">
          <figure className="flex flexColumn aiCenter">
            <figcaption>
              <div className="title fw500 red phoneDescription">
                Copy converted value
              </div>
              <Spacer height={12} />
              <div className="body fw500 phoneDescription">
                Press and hold to copy the converted value.
              </div>
            </figcaption>
            <Spacer height={12} />
            <Phone
              video={Videos.pressAndHoldToCopy.video}
              poster={Videos.pressAndHoldToCopy.poster}
              scale={phoneScale}
            />
          </figure>

          <Spacer
            width={verticalLayout ? 0 : 100}
            height={verticalLayout ? 60 : 0}
          />

          <figure className="flex flexColumn aiCenter">
            <figcaption>
              <div className="title fw500 red phoneDescription">
                Delete value continuously
              </div>
              <Spacer height={12} />
              <div className="body fw500 phoneDescription">
                Press and hold the Backspace button to keep deleting
                continuously.
              </div>
            </figcaption>
            <Spacer height={12} />
            <Phone
              video={Videos.pressAndHoldToKeepDeleting.video}
              poster={Videos.pressAndHoldToKeepDeleting.poster}
              scale={phoneScale}
            />
          </figure>
        </div>
      </div>
    </>
  );
};

const WaltersCurrencyConverter: React.FC = () => {
  const [width] = useWindowSize();
  const verticalLayout = isSmallScreen(width);

  return (
    <div className="flex flexColumn flex1">
      <Intro />

      <Spacer height={24} />

      <Features verticalLayout={verticalLayout} />

      <Spacer height={24} />

      <Download verticalLayout={verticalLayout} />

      <Spacer height={24} />

      <Contact />
    </div>
  );
};

export { WaltersCurrencyConverter };
