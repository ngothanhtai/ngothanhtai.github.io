import React from "react";
import { HashUrl } from "../../utils/constants";

const Languages: React.FC = () => {
  return (
    <a
      id={HashUrl.languages}
      href={`#${HashUrl.languages}`}
      className="textDecorationNone"
    >
      <h1>
        <span role="img" aria-label="Languages">
          🗣
        </span>{" "}
        Languages
      </h1>
      <h2>
        <span role="img" aria-label="English">
          🇬🇧
        </span>{" "}
        English: Intermediate{" "}
      </h2>
      <p>
        - IELTS Certificate with band score: <b>5.5</b>
      </p>

      <p>(Listening: 6.5, Reading: 5, Writing: 6, Speaking: 5)</p>

      <h2>
        <span role="img" aria-label="Vietnamese">
          🇻🇳
        </span>{" "}
        Vietnamese: Native language
      </h2>
    </a>
  );
};

export { Languages };
