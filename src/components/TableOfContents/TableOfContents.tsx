import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";
import "./TableOfContents.css";

const tableOfContentItems = [
  {
    hashUrl: HashUrl.summary,
    icon: "📃",
    title: "Summary",
  },
  {
    hashUrl: HashUrl.skills,
    icon: "🛠",
    title: "Skills",
  },
  {
    hashUrl: HashUrl.sideProjects,
    icon: "🪓",
    title: "Side Projects",
  },
  {
    hashUrl: HashUrl.workExperience,
    icon: "💼",
    title: "Work Experience",
  },
  {
    hashUrl: HashUrl.languages,
    icon: "🗣",
    title: "Languages",
  },
  {
    hashUrl: HashUrl.publication,
    icon: "📜",
    title: "Publication",
  },
  {
    hashUrl: HashUrl.awards,
    icon: "🏆",
    title: "Awards",
  },
  {
    hashUrl: HashUrl.education,
    icon: "📚",
    title: "Education",
  },
  {
    hashUrl: HashUrl.volunteerExperience,
    icon: "✋",
    title: "Volunteer Experience",
  },
];
const TableOfContents: React.FC = () => {
  return (
    <div className="flex tableOfContents">
      {tableOfContentItems.map(({ hashUrl, icon, title }) => (
        <a
          key={hashUrl}
          href={`#${hashUrl}`}
          className="flex flexColumn aiCenter jcCenter textDecorationNone highlightOnHover"
        >
          <span role="img" aria-label={title}>
            {icon}
          </span>
          <Spacer height={12} />
          <div>{title}</div>
        </a>
      ))}
    </div>
  );
};

export { TableOfContents };
