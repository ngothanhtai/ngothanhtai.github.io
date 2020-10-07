import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const Languages: React.FC = () => {
  return (
    <>
      <a
        id={HashUrl.languages}
        href={`#${HashUrl.languages}`}
        className="textDecorationNone"
      >
        <span role="img" aria-label="Languages" className="title fw500">
          🗣 Languages
        </span>
      </a>
      <Spacer height={12} />
      <span role="img" aria-label="English" className="subtitle fw500">
        🇬🇧 English: Intermediate
      </span>
      <Spacer height={6} />
      <p>
        - IELTS Certificate with band score: <b>5.5</b>
      </p>
      <Spacer height={6} />

      <p className="label">
        (Listening: 6.5, Reading: 5, Writing: 6, Speaking: 5)
      </p>

      <Spacer height={12} />

      <span role="img" aria-label="Vietnamese" className="subtitle fw500">
        🇻🇳 Vietnamese: Native language
      </span>
    </>
  );
};

export { Languages };
