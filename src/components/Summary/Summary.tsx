import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const Summary: React.FC = () => {
  return (
    <section>
      <a
        id={HashUrl.summary}
        href={`#${HashUrl.summary}`}
        className="textDecorationNone"
      >
        <span role="img" aria-label="Summary" className="title fw500">
          📃 Summary
        </span>
      </a>
      <Spacer height={12} />
      <div>
        <p className="body">
          A front end developer based in Vietnam, with  8+ years of working in developing websites, mobiles, and games.
        </p>

        <p className="body">
          Looking for Senior React and React Native (on-site only).
        </p>
      </div>
    </section>
  );
};

export { Summary };
