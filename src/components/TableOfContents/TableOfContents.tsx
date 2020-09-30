import React from "react";
import { HashUrl } from "../../utils/constants";

const TableOfContents: React.FC = () => {
  return (
    <ul>
      <li>
        <a
          href={`#${HashUrl.summary}`}
          className="textDecorationNone highlightOnHover"
        >
          <span role="img" aria-label="Summary">
            📃 Summary
          </span>
        </a>
      </li>
      <li>
        <a
          href={`#${HashUrl.skills}`}
          className="textDecorationNone highlightOnHover"
        >
          <span role="img" aria-label="Skills">
            🛠 Skills
          </span>
        </a>
      </li>
      <li>
        <a
          href={`#${HashUrl.sideProjects}`}
          className="textDecorationNone highlightOnHover"
        >
          <span role="img" aria-label="Side Projects">
            🪓 Side Projects
          </span>
        </a>
      </li>
      <li>
        <a
          href={`#${HashUrl.workExperience}`}
          className="textDecorationNone highlightOnHover"
        >
          <span role="img" aria-label="Work Experience">
            💼 Work Experience
          </span>
        </a>
      </li>
      <li>
        <a
          href={`#${HashUrl.languages}`}
          className="textDecorationNone highlightOnHover"
        >
          <span role="img" aria-label="Languages">
            🗣 Languages
          </span>
        </a>
      </li>
      <li>
        <a
          href={`#${HashUrl.publication}`}
          className="textDecorationNone highlightOnHover"
        >
          <span role="img" aria-label="Publication">
            📜 Publication
          </span>
        </a>
      </li>
      <li>
        <a
          href={`#${HashUrl.awards}`}
          className="textDecorationNone highlightOnHover"
        >
          <span role="img" aria-label="Awards">
            🏆 Awards
          </span>
        </a>
      </li>
      <li>
        <a
          href={`#${HashUrl.education}`}
          className="textDecorationNone highlightOnHover"
        >
          <span role="img" aria-label="Education">
            📚 Education
          </span>
        </a>
      </li>
      <li>
        <a
          href={`#${HashUrl.volunteerExperience}`}
          className="textDecorationNone highlightOnHover"
        >
          <span role="img" aria-label="Volunteer Experience">
            ✋ Volunteer Experience
          </span>
        </a>
      </li>
    </ul>
  );
};

export { TableOfContents };
