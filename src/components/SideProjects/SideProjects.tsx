import React from "react";
import { Images } from "../../assets/images";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";
import { DisplayConnectedWifiName } from "./DisplayConnectedWifiName/DisplayConnectedWifiName";
import { MGL } from "./MGL/MGL";
import { ScrollToTop } from "./ScrollToTop/ScrollToTop";
import { SideProjectItem } from "./SideProjectItem/SideProjectItem";
import { WaltersCurrencyConverter } from "./WaltersCurrencyConverter/WaltersCurrencyConverter";
import { WaltersCurrencyConverterForMac } from "./WaltersCurrencyConverterForMac/WaltersCurrencyConverterForMac";
import { WhatTheFOOD } from "./WhatTheFOOD/WhatTheFOOD";

const sideProjectsMobileApps = [
  {
    publishDate: "12 October 2018",
    name: "Walter's Currency Converter",
    url: "https://walterscc.web.app",
    content: <WaltersCurrencyConverter />,
    anchorHash: "walters-currency-converter",
    icon: Images.sideProjects.walterscc,
  },
  {
    publishDate: "7 December 2019",
    name: "what the FOOD",
    url: "https://onelink.to/3gq6hx",
    content: <WhatTheFOOD />,
    anchorHash: "what-the-FOOD",
    icon: Images.sideProjects.whatTheFOOD,
  },
  {
    publishDate: "13 June 2020",
    name: "My Gay Life (MGL) - Gay chat",
    url: "https://mgl419.com",
    content: <MGL />,
    anchorHash: "mgl",
    icon: Images.sideProjects.mgl,
  },
];

const sideProjectsMacApps = [
  {
    publishDate: "12 October 2018",
    name: "Walter's Currency Converter for Mac",
    url: "https://walterscc.web.app",
    content: <WaltersCurrencyConverterForMac />,
    anchorHash: "walters-currency-converter-for-mac",
    icon: Images.sideProjects.walterscc,
  },
  {
    publishDate: "18 August 2020",
    name: "Display connected Wifi name",
    url:
      "https://apps.apple.com/vn/app/display-connected-wifi-name/id1526918434?mt=12",
    content: <DisplayConnectedWifiName />,
    anchorHash: "display-connected-wifi-name",
    icon: Images.sideProjects.displayConnectedWifiName,
  },
  {
    publishDate: "21 September 2020",
    name: "Safari extension: Scroll to the top of the page",
    url:
      "https://apps.apple.com/vn/app/scroll-to-the-top-of-the-page/id1532648692?mt=12",
    content: <ScrollToTop />,
    anchorHash: "scroll-to-top",
    icon: Images.sideProjects.scrollToTop,
  },
];

const sideProjectsOpenSource = [
  {
    publishDate: "3 April 2017",
    name: "react-native-auto-typing-text",
    anchorHash: "react-native-auto-typing-text",
    url: "https://github.com/ngothanhtai/react-native-auto-typing-text",
    onPress: (url: string) => {
      window.open(url, "_blank");
    },
  },

  {
    publishDate: "1 March 2020",
    name: "platform_utils",
    anchorHash: "platform_utils",
    url: "https://pub.dev/packages/platform_utils",
    onPress: (url: string) => {
      window.open(url, "_blank");
    },
  },
];

const SideProjects: React.FC = () => {
  return (
    <section>
      <a
        id={HashUrl.sideProjects}
        href={`#${HashUrl.sideProjects}`}
        className="textDecorationNone"
      >
        <div className="title fw500">
          <span role="img" aria-label="Side Projects">
            🪓
          </span>{" "}
          Side Projects
        </div>
      </a>

      <Spacer height={12} />

      <div className="subtitle fw500">
        <span role="img" aria-label="Mobile apps">
          📱
        </span>{" "}
        Mobile apps
      </div>

      <Spacer height={12} />

      {sideProjectsMobileApps.map((data, index) => {
        return (
          <React.Fragment key={data.name}>
            <SideProjectItem data={data} />
            {index !== sideProjectsMobileApps.length - 1 && (
              <Spacer height={12} />
            )}
          </React.Fragment>
        );
      })}

      <Spacer height={24} />

      <div className="subtitle fw500">
        <span role="img" aria-label="macOS apps">
          🖥
        </span>{" "}
        macOS apps
      </div>

      <Spacer height={12} />

      {sideProjectsMacApps.map((data, index) => {
        return (
          <React.Fragment key={data.name}>
            <SideProjectItem data={data} />
            {index !== sideProjectsMobileApps.length - 1 && (
              <Spacer height={12} />
            )}
          </React.Fragment>
        );
      })}

      <Spacer height={24} />

      <div className="subtitle fw500">
        <span role="img" aria-label="Open source">
          🗂
        </span>{" "}
        Open source
      </div>
      <Spacer height={12} />
      {sideProjectsOpenSource.map((data, index) => {
        return (
          <React.Fragment key={data.name}>
            <SideProjectItem data={data} />
            {index !== sideProjectsOpenSource.length - 1 && (
              <Spacer height={12} />
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
};

export { SideProjects };
