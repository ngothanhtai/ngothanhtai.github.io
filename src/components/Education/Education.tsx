import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const Education: React.FC = () => {
  return (
    <>
      <a
        id={HashUrl.education}
        href={`#${HashUrl.education}`}
        className="textDecorationNone"
      >
        <h1>
          <span role="img" aria-label="Education">
            📚 Education
          </span>
        </h1>
      </a>
      <ul>
        <li>
          2008 - 2010: APTECH High Diploma Certificated Computer Professional
        </li>

        <Spacer height={12} />
        <li>2015 - 2016: CoderSchool - iOS Swift Saigon Bootcamp</li>
      </ul>
    </>
  );
};

export { Education };
