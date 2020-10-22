import classNames from "classnames";
import React from "react";
import { Videos } from "../../../assets/videos";
import { isSmallScreen, useWindowSize } from "../../../utils/window";
import { Phone } from "../../Phone/Phone";
import { Spacer } from "../../Spacer/Spacer";
import { WaltersCurrencyConverterContact } from "./WaltersCurrencyConverterContact";
import { WaltersCurrencyConverterDownload } from "./WaltersCurrencyConverterDownload";
import { WaltersCurrencyConverterFAQ } from "./WaltersCurrencyConverterFAQ";
import { WaltersCurrencyConverterIntro } from "./WaltersCurrencyConverterIntro";
const phoneScale = 0.7;

type Props = {
  verticalLayout: boolean;
};

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
            poster={Videos.walterscc.mobile.changeCurrency.poster}
            video={Videos.walterscc.mobile.changeCurrency.video}
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
            video={Videos.walterscc.mobile.dragAndDropToChangeTheOrder.video}
            poster={Videos.walterscc.mobile.dragAndDropToChangeTheOrder.poster}
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

          <Phone
            video={Videos.walterscc.mobile.changeTheme.video}
            poster={Videos.walterscc.mobile.changeTheme.poster}
            loop
            scale={phoneScale}
          />
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
              video={Videos.walterscc.mobile.pressAndHoldToCopy.video}
              poster={Videos.walterscc.mobile.pressAndHoldToCopy.poster}
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
              video={Videos.walterscc.mobile.pressAndHoldToKeepDeleting.video}
              poster={Videos.walterscc.mobile.pressAndHoldToKeepDeleting.poster}
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
      <WaltersCurrencyConverterIntro />

      <Spacer height={24} />

      <Features verticalLayout={verticalLayout} />

      <Spacer height={24} />

      <WaltersCurrencyConverterFAQ />

      <Spacer height={24} />

      <WaltersCurrencyConverterDownload verticalLayout={verticalLayout} />

      <Spacer height={24} />

      <WaltersCurrencyConverterContact />
    </div>
  );
};

export { WaltersCurrencyConverter };
