import React from "react";
import { HashUrl } from "../../utils/constants";

const Summary: React.FC = () => {
  return (
    <a
      id={HashUrl.summary}
      href={`#${HashUrl.summary}`}
      className="textDecorationNone"
    >
      <h1>
        <span role="img" aria-label="Summary">
          📃 Summary
        </span>
      </h1>
      <div>
        <p className="body">
          I'm a software engineer based in Vietnam with eight years of
          experience in the software industry.
        </p>

        <p className="body">
          I have worked as a Flash Game Developer for three years and Unity 3D
          for one year. Then I changed to become a mobile developer, where I
          used Swift to build an iOS app for one year, then use React Native for
          three years. I also use React to build websites for one year. I have
          been using Flutter for nearly one year to build two side projects.
        </p>

        <p className="body">
          I am a product person because I prefer focusing on building the user
          interface, user experience, an eye on detail, and features than
          spending time on doing on tech debts. I mostly follow my tech lead's
          guide.
        </p>

        <p className="body">
          I have always considered that I am hardworking and patient, interested
          in learning new technologies and try to do things in more efficient
          ways.
        </p>

        <p className="body">
          I am looking to work for a front-end job that will use React / React
          Native / Flutter or SwiftUI.
        </p>
      </div>
    </a>
  );
};

export { Summary };
