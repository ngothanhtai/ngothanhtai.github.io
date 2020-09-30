import React from "react";
import { Images } from "../../assets/images";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";
import { DisplayConnectedWifiName } from "./DisplayConnectedWifiName/DisplayConnectedWifiName";
import { MGL } from "./MGL/MGL";
import { ScrollToTop } from "./ScrollToTop/ScrollToTop";
import { SideProjectItem } from "./SideProjectItem/SideProjectItem";
import { WaltersCurrencyConverter } from "./WaltersCurrencyConverter/WaltersCurrencyConverter";
import { WhatTheFOOD } from "./WhatTheFOOD/WhatTheFOOD";

const sideProjectsMobileApps = [
  {
    publishDate: "12 October 2018",
    name: "Walter's Currency Converter",
    content: <WaltersCurrencyConverter />,
    anchorHash: "walters-currency-converter",
    icon: Images.sideProjects.walterscc,
  },
  {
    publishDate: "7 December 2019",
    name: "what the FOOD",
    content: <WhatTheFOOD />,
    anchorHash: "what-the-FOOD",
    icon: Images.sideProjects.whatTheFOOD,
  },
  {
    publishDate: "13 June 2020",
    name: "My Gay Life (MGL) - Gay chat",
    content: <MGL />,
    anchorHash: "mgl",
    icon: Images.sideProjects.mgl,
  },
];

const sideProjectsMacApps = [
  {
    publishDate: "12 October 2018",
    name: "Walter's Currency Converter",
    content: <WaltersCurrencyConverter />,
    anchorHash: "walters-currency-converter-for-mac",
    icon: Images.sideProjects.walterscc,
  },
  {
    publishDate: "18 August 2020",
    name: "Display connected Wifi name",
    content: <DisplayConnectedWifiName />,
    anchorHash: "display-connected-wifi-name",
    icon: Images.sideProjects.displayConnectedWifiName,
  },
  {
    publishDate: "21 September 2020",
    name: "Safari extension: Scroll to the top of the page",
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
    onPress: () => {
      window.open(
        "https://github.com/ngothanhtai/react-native-auto-typing-text",
        "_blank"
      );
    },
  },

  {
    publishDate: "1 March 2020",
    name: "platform_utils",
    anchorHash: "platform_utils",
    onPress: () => {
      window.open("https://pub.dev/packages/platform_utils", "_blank");
    },
  },
];

const SideProjects: React.FC = () => {
  return (
    <a
      id={HashUrl.sideProjects}
      href={`#${HashUrl.sideProjects}`}
      className="textDecorationNone"
    >
      <h1>
        <span role="img" aria-label="Side Projects">
          🪓 Side Projects
        </span>
      </h1>

      <h3>
        <span role="img" aria-label="Mobile apps">
          📱
        </span>{" "}
        Mobile apps
      </h3>
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

      <h3>
        <span role="img" aria-label="macOS apps">
          🖥
        </span>{" "}
        macOS apps
      </h3>
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

      <h3>🗂 Open source</h3>
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
    </a>
  );
};

export { SideProjects };
