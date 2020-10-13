import React from "react";
import { Videos } from "../../../assets/videos";
import { isSmallScreen, useWindowSize } from "../../../utils/window";
import { Spacer } from "../../Spacer/Spacer";
import {
  WaltersCCContact,
  WaltersCCDownload,
  WaltersCCIntro,
} from "../WaltersCurrencyConverter/WaltersCurrencyConverter";
import "./WaltersCurrencyConverterForMac.css";

type Props = {
  verticalLayout: boolean;
};

const Features: React.FC<Props> = ({ verticalLayout }) => {
  return (
    <div className="waltersccForMacGrid">
      <figure className="waltersccForMacGridItem">
        <video
          poster={Videos.walterscc.mac.changeCurrency.poster}
          className="waltersccGridMedia"
          controls={false}
          loop
          autoPlay
          muted
          playsInline
        >
          <source
            src={Videos.walterscc.mac.changeCurrency.video}
            type="video/mp4"
          />
        </video>

        <Spacer height={12} />

        <figcaption>
          <div className="title fw500 red">Change currency</div>
          <Spacer height={12} />
          <div className="body fw500 phoneDescription">
            Click on the flag icon, it will show the list of supported
            currencies. Search and select a currency to change.
          </div>
        </figcaption>
      </figure>

      <figure>
        <video
          poster={Videos.walterscc.mac.dragAndDropToChangeTheOrder.poster}
          className="waltersccGridMedia"
          controls={false}
          loop
          autoPlay
          muted
          playsInline
        >
          <source
            src={Videos.walterscc.mac.dragAndDropToChangeTheOrder.video}
            type="video/mp4"
          />
        </video>

        <Spacer height={12} />

        <figcaption>
          <div className="title fw500 red">Change the currency order</div>
          <Spacer height={12} />
          <div className="body fw500 phoneDescription">
            Drag and drop on the currency row you want to change the order.
          </div>
        </figcaption>
      </figure>

      <figure>
        <video
          poster={Videos.walterscc.mac.addOrRemoveCurrency.poster}
          className="waltersccGridMedia"
          controls={false}
          loop
          autoPlay
          muted
          playsInline
        >
          <source
            src={Videos.walterscc.mac.addOrRemoveCurrency.video}
            type="video/mp4"
          />
        </video>

        <Spacer height={12} />

        <figcaption>
          <div className="title fw500 red">Add or remove a currency</div>
          <Spacer height={12} />
          <div className="body fw500 phoneDescription">
            <b>Add</b>: Click the <b>+ add currency</b> button and select a
            currency.
          </div>
          <div className="body fw500 phoneDescription">
            <b>Remove</b>: Hover the cursor to the flag icon, the <b>remove</b>{" "}
            icon will appear.
          </div>
        </figcaption>
      </figure>

      <figure>
        <video
          poster={
            Videos.walterscc.mac.switchSelectedRowByArrowUpOrArrowDownKey.poster
          }
          className="waltersccGridMedia"
          controls={false}
          loop
          autoPlay
          muted
          playsInline
        >
          <source
            src={
              Videos.walterscc.mac.switchSelectedRowByArrowUpOrArrowDownKey
                .video
            }
            type="video/mp4"
          />
        </video>

        <Spacer height={12} />

        <figcaption>
          <div className="title fw500 red">Select currency row</div>
          <Spacer height={12} />
          <div className="body fw500 phoneDescription">
            Using keyboard <b>arrow up</b> and <b>arrow down</b> key to select
            currency row.
          </div>
        </figcaption>
      </figure>

      <figure>
        <video
          poster={Videos.walterscc.mac.setupKeyboardShortcutToOpenTheApp.poster}
          className="waltersccGridMedia"
          controls={false}
          loop
          autoPlay
          muted
          playsInline
        >
          <source
            src={Videos.walterscc.mac.setupKeyboardShortcutToOpenTheApp.video}
            type="video/mp4"
          />
        </video>

        <Spacer height={12} />

        <figcaption>
          <div className="title fw500 red">Keyboard shortcut to open</div>
          <Spacer height={12} />
          <div className="body fw500 phoneDescription">
            Quickly open the app window by using a keyboard shortcut.
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

const WaltersCurrencyConverterForMac: React.FC = () => {
  const [width] = useWindowSize();
  const verticalLayout = isSmallScreen(width);

  return (
    <div className="flex flexColumn flex1">
      <WaltersCCIntro />

      <Spacer height={24} />

      <Features verticalLayout={verticalLayout} />

      <Spacer height={24} />

      <WaltersCCDownload verticalLayout={verticalLayout} />

      <Spacer height={24} />

      <WaltersCCContact />
    </div>
  );
};

export { WaltersCurrencyConverterForMac };
