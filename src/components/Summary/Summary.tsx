import React from "react";
import { HashUrl } from "../../utils/constants";

const Summary: React.FC = () => {
  return (
    <>
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
      </a>
      <div>
        <p className="body">
          I'm a software engineer based in Vietnam with eight years of
          experience in the software industry.
        </p>

        <p className="body">
          A former game developer, I now enjoy building mobile apps. After using
          iOS Swift, React Native, and Flutter on several projects I wanted to
          grow as a mobile developer and develop skills in mobile development.
        </p>

        <p className="body">
          A kinesthetic learner and all-round technology enthusiast, I also
          worked as a teaching assistant at CoderSchool React Native Saigon
          Bootcamp, where I have got to approach React Native from a fresh
          perspective. I believe in the power of sharing and learning by doing.
          Although I can work independently. I have always considered that I am
          hardworking and patient, and try to do things in more efficient ways.
        </p>

        <p className="body">
          I am a product person because I prefer focusing on building the user
          interface, user experience, an eye on detail, and features.
        </p>

        <p className="body">
          I am looking to work for a front-end or mobile developer job that will
          use React / React Native / Flutter or SwiftUI.
        </p>
      </div>
    </>
  );
};

export { Summary };
