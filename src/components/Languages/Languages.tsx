import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const Languages: React.FC = () => {
  return (
    <section>
      <a
        id={HashUrl.languages}
        href={`#${HashUrl.languages}`}
        className="textDecorationNone"
      >
        <div className="title fw500">
          <span role="img" aria-label="Languages">
            🗣
          </span>{" "}
          Languages
        </div>
      </a>
      <ul>
        <li>
          <div className="subtitle fw500">
            <span role="img" aria-label="English">
              🇬🇧
            </span>{" "}
            English: Intermediate
          </div>

          <Spacer height={6} />
          <p>
            IELTS UKVI Certificate with band score: <b>5.5</b>
          </p>
          <Spacer height={6} />

          <p className="label">
            (Listening: 6.5, Reading: 5, Writing: 6, Speaking: 5)
          </p>
        </li>

        <Spacer height={12} />

        <li>
          <div className="subtitle fw500">
            <span role="img" aria-label="Vietnamese">
              🇻🇳
            </span>{" "}
            Vietnamese: Native language
          </div>
        </li>
      </ul>
    </section>
  );
};

export { Languages };
