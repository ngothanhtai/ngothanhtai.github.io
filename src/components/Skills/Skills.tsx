import React from "react";
import { Images } from "../../assets/images";
import { HashUrl } from "../../utils/constants";
import { ImageWithTooltip } from "../ImageWithTooltip/ImageWithTooltip";
import { Spacer } from "../Spacer/Spacer";

const beforeTechStack = [
  {
    imageSource: Images.techStackBefore.games.flash,
    imageAlt: "Flash",
    website: "https://www.adobe.com/products/flashplayer.html",
  },
  {
    imageSource: Images.techStackBefore.games.actionscript3,
    imageAlt: "ActionScript 3",
    website:
      "https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/",
  },
  {
    imageSource: Images.techStackBefore.games.html5Canvas,
    imageAlt: "HTML5 Canvas",
    website: "https://www.w3schools.com/html/html5_canvas.asp",
  },
  {
    imageSource: Images.techStackBefore.games.unity3d,
    imageAlt: "Unity3D",
    website: "https://unity.com",
  },
  {
    imageSource: Images.techStackBefore.games.msdotnet,
    imageAlt: "Microsoft .NET",
    website: "https://unity.com",
  },
  {
    imageSource: Images.techStackBefore.games.csharp,
    imageAlt: "C#",
    website: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    imageSource: Images.techStackBefore.games.java,
    imageAlt: "Java",
    website:
      "https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html",
  },
  {
    imageSource: Images.techStackBefore.games.mssql,
    imageAlt: "Microsoft SQL Server",
    website: "https://www.microsoft.com/en-us/sql-server",
  },
];

const usingTechStack = [
  {
    imageSource: Images.techStackBefore.applications.flutter,
    imageAlt: "Flutter",
    website: "https://flutter.dev",
  },
  {
    imageSource: Images.techStackBefore.applications.swiftui,
    imageAlt: "SwiftUI",
    website: "https://developer.apple.com/xcode/swiftui/",
  },
  {
    imageSource: Images.techStackBefore.applications.electron,
    imageAlt: "ElectronJS",
    website: "https://www.electronjs.org",
  },
  {
    imageSource: Images.techStackBefore.applications.react,
    imageAlt: "ReactJS and React Native",
    website: "https://reactjs.org",
  },

  {
    imageSource: Images.techStackBefore.applications.redux,
    imageAlt: "Redux",
    website: "https://redux.js.org",
  },
  {
    imageSource: Images.techStackBefore.applications.graphql,
    imageAlt: "React Apollo GraphQL",
    website: "https://www.apollographql.com/docs/react/",
  },
  {
    imageSource: Images.techStackBefore.applications.javascript,
    imageAlt: "Javascript",
    website:
      "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
  },
  {
    imageSource: Images.techStackBefore.applications.typescript,
    imageAlt: "Typescript",
    website: "https://www.typescriptlang.org",
  },
  {
    imageSource: Images.techStackBefore.applications.node,
    imageAlt: "NodeJS",
    website: "https://nodejs.org/en/",
  },
  {
    imageSource: Images.techStackBefore.applications.html,
    imageAlt: "HTML",
    website: "https://developer.mozilla.org/vi/docs/Web/HTML",
  },
  {
    imageSource: Images.techStackBefore.applications.css,
    imageAlt: "CSS",
    website: "https://developer.mozilla.org/vi/docs/Web/CSS",
  },
  {
    imageSource: Images.techStackBefore.applications.jest,
    imageAlt: "Jest",
    website: "https://jestjs.io",
  },
  {
    imageSource: Images.techStackBefore.applications.cypress,
    imageAlt: "Cypress",
    website: "https://www.cypress.io",
  },
  {
    imageSource: Images.techStackBefore.applications.firebase,
    imageAlt: "Firebase",
    website: "https://firebase.google.com",
  },
  {
    imageSource: Images.techStackBefore.applications.photoshop,
    imageAlt: "Photoshop",
    website: "https://www.photoshop.com",
  },
  {
    imageSource: Images.techStackBefore.applications.sketch,
    imageAlt: "Sketch",
    website: "https://www.sketch.com",
  },
  {
    imageSource: Images.techStackBefore.applications.adobexd,
    imageAlt: "Adobe XD",
    website: "https://www.adobe.com/products/xd.html",
  },

  {
    imageSource: Images.techStackBefore.applications.zeplin,
    imageAlt: "Zeplin",
    website: "https://zeplin.io",
  },
  {
    imageSource: Images.techStackBefore.applications.webstorm,
    imageAlt: "Jetbrains Webstorm",
    website: "https://www.jetbrains.com/webstorm/",
  },
  {
    imageSource: Images.techStackBefore.applications.vscode,
    imageAlt: "Visual Studio Code",
    website: "https://code.visualstudio.com",
  },
  {
    imageSource: Images.techStackBefore.applications.xcode,
    imageAlt: "Xcode",
    website: "https://developer.apple.com/xcode/",
  },
  {
    imageSource: Images.techStackBefore.applications.androidStudio,
    imageAlt: "Android Studio",
    website: "https://developer.android.com/studio",
  },
  {
    imageSource: Images.techStackBefore.applications.mongodb,
    imageAlt: "MongoDB",
    website: "https://www.mongodb.com",
  },
];

const Skills: React.FC = () => {
  return (
    <section>
      <a
        id={HashUrl.skills}
        href={`#${HashUrl.skills}`}
        className="textDecorationNone"
      >
        <div className="title fw500">
          <span role="img" aria-label="Skills">
            🛠
          </span>{" "}
          Skills
        </div>
      </a>
      <Spacer height={12} />
      <div className="subtitle">
        Programming languages, Librarires and Tools
      </div>
      <Spacer height={12} />
      <div className="body">I used before:</div>
      <div className="flex flexRow flexWrap">
        {beforeTechStack.map((item, index) => (
          <React.Fragment key={item.imageAlt}>
            <ImageWithTooltip {...item} />
            {index < beforeTechStack.length - 1 && <Spacer width={12} />}
          </React.Fragment>
        ))}
      </div>
      <Spacer height={12} />
      <div className="body">I am using:</div>
      <div className="flex flexRow flexWrap">
        {usingTechStack.map((item, index) => (
          <React.Fragment key={item.imageAlt}>
            <ImageWithTooltip {...item} />
            {index < usingTechStack.length - 1 && <Spacer width={12} />}
          </React.Fragment>
        ))}
      </div>
      <Spacer height={24} />

      <div className="subtitle fw500">Flash ActionScript 3</div>
      <Spacer height={12} />
      <p className="body">
        Moving from ActionScript 3 to Javascript, I feel that ActionScript 3 is
        like Typescript for Javascript today. Which I can use class, interface,
        inherit, typed language. I used ActionScript 3 for three years. I
        learned how to optimize UI and animation to make it fast. I also know
        how to inject the pre-loader to control the Flash view, mostly for
        hacking other Flash games{" "}
        <span role="img" aria-label="black hat">
          🎩
        </span>
        .
      </p>

      <Spacer height={24} />

      <div className="subtitle fw500">
        React, React Native, NodeJS, and Firebase with Javascript or Typescript
      </div>
      <Spacer height={12} />
      <div className="body">
        I use them along with:
        <ul>
          <li>GraphQL to handle API requests or local state</li>

          <li>
            Redux to manage state - Jest to test the component's functionality.
          </li>
          <li>Cypress for end-to-end testing</li>
          <li>Material UI for UI controls</li>
          <li>Bitrise for Continuous Integration/Continuous Delivery</li>
        </ul>
        I use React to build websites. I use React Native to build mobile apps
        for Android and iOS.
      </div>

      <Spacer height={24} />

      <div className="subtitle fw500">Flutter</div>
      <Spacer height={12} />
      <p className="body">
        Flutter is my favorite framework SDK at the moment, which helps to build
        UI consistently on Android and iOS. And with a statically typed
        language, Dart, making development for Flutter is satisfying. I have
        been using Flutter since February 2020 and have two personal apps built
        with Flutter. One of them converted from React Native. I am happy with
        the result, faster, less error-prone, and smaller file size.
      </p>

      <Spacer height={24} />

      <div className="subtitle fw500">Swift</div>
      <Spacer height={12} />
      <p className="body">
        With the syntax familiar to Javascript / Typescript, learning Swift is
        faster than I think. I can use Swift to build an iOS native app with
        listings, messaging, in-app notifications, and handle the view of
        whatever the design is. But the time you use Xcode to build the app when
        making a change is slow, compared to React Native or Flutter. Since
        2019, SwiftUI published. I see it very familiar to React and Flutter,
        which uses a single method for rendering the UI and local state to
        handle the UI logic. It even has the store concept to dispatch changes
        to listeners, like Redux in React Native and Provider in Flutter. I am
        starting using SwiftUI to build native iOS and macOS apps.
      </p>
    </section>
  );
};

export { Skills };
