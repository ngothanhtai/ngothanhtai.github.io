import React from "react";
import "./App.css";
import { Awards } from "./components/Awards/Awards";
import { Education } from "./components/Education/Education";
import { Languages } from "./components/Languages/Languages";
import { Profile } from "./components/Profile/Profile";
import { Publication } from "./components/Publication/Publication";
import { SideProjects } from "./components/SideProjects/SideProjects";
import { Skills } from "./components/Skills/Skills";
import { Spacer } from "./components/Spacer/Spacer";
import { Summary } from "./components/Summary/Summary";
import { TableOfContents } from "./components/TableOfContents/TableOfContents";
import { VolunteerExperience } from "./components/VolunteerExperience/VolunteerExperience";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";

const App: React.FC = () => {
  return (
    <div className="app">
      <Profile />

      <Spacer height={24} />

      <TableOfContents />

      <Spacer height={24} />

      <Summary />

      <Spacer height={24} />

      <Skills />

      <Spacer height={24} />

      <SideProjects />

      <Spacer height={24} />

      <WorkExperience />

      <Spacer height={24} />

      <Education />

      <Spacer height={24} />

      <Languages />

      <Spacer height={24} />

      <Awards />

      <Spacer height={24} />

      <Publication />

      <Spacer height={24} />

      <VolunteerExperience />
    </div>
  );
};

export default App;
