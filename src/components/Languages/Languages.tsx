import React from "react";
import { HashUrl } from "../../utils/constants";

const Languages: React.FC = () => {
  return (
    <>
      <a
        id={HashUrl.languages}
        href={`#${HashUrl.languages}`}
        className="textDecorationNone"
      >
        <h1>
          <span role="img" aria-label="Languages">
            🗣 Languages
          </span>
        </h1>
      </a>
      <h4>
        <span role="img" aria-label="English">
          🇬🇧 English: Intermediate
        </span>
      </h4>
      <p>
        - IELTS Certificate with band score: <b>5.5</b>
      </p>

      <p>(Listening: 6.5, Reading: 5, Writing: 6, Speaking: 5)</p>

      <h4>
        <span role="img" aria-label="Vietnamese">
          🇻🇳 Vietnamese: Native language
        </span>
      </h4>
    </>
  );
};

export { Languages };
