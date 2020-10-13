import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const Education: React.FC = () => {
  return (
    <section>
      <a
        id={HashUrl.education}
        href={`#${HashUrl.education}`}
        className="textDecorationNone"
      >
        <div className="title fw500">
          <span role="img" aria-label="Education">
            📚
          </span>{" "}
          Education
        </div>
      </a>

      <ul>
        <li>
          <p className="subtitle">
            2008 - 2010: APTECH High Diploma Certificated Computer Professional
          </p>
        </li>

        <Spacer height={12} />
        <li className="subtitle">
          <p className="subtitle">
            2015 - 2016: CoderSchool - iOS Swift Saigon Bootcamp
          </p>
        </li>
      </ul>
    </section>
  );
};

export { Education };
