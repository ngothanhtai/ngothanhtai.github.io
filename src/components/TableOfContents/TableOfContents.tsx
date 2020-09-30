import React from "react";
import { HashUrl } from "../../utils/constants";

const TableOfContents: React.FC = () => {
  return (
    <ul>
      <li>
        <a href={`#${HashUrl.summary}`}>Summary</a>
        <a href={`#${HashUrl.skills}`}>Skills</a>
        <a href={`#${HashUrl.sideProjects}`}>Side Projects</a>
        <a href={`#${HashUrl.workExperience}`}>Work Experience</a>
        <a href={`#${HashUrl.languages}`}>Languages</a>
        <a href={`#${HashUrl.publication}`}>Publication</a>
        <a href={`#${HashUrl.awards}`}>Awards</a>
        <a href={`#${HashUrl.education}`}>Educaton</a>
        <a href={`#${HashUrl.volunteerExperience}`}>Volunteer Experience</a>
      </li>
    </ul>
  );
};

export { TableOfContents };
