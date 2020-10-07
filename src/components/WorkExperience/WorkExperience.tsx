import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const renderWorkExperience = ({
  title,
  time,
  location,
  description,
  techStack,
}: {
  title: string;
  time: string;
  location?: string;
  description?: React.ReactNode;
  techStack?: string;
}): React.ReactNode => {
  return (
    <>
      <div className="subtitle fw500">{title}</div>
      <Spacer height={12} />
      <div>
        <p>
          <b>Time:</b>&nbsp;
          <span className="description">{time}</span>
        </p>
        {location && (
          <p>
            <b>Location:</b>&nbsp;
            <span className="description">{location}</span>
          </p>
        )}

        {techStack && (
          <p>
            <b>Tech:</b>&nbsp;
            <span className="description">{techStack}</span>
          </p>
        )}

        {description && (
          <div>
            <b>What did I do</b>:&nbsp;
            <div className="description">{description}</div>
          </div>
        )}
      </div>
    </>
  );
};

const WorkExperience: React.FC = () => {
  return (
    <>
      <a
        id={HashUrl.workExperience}
        href={`#${HashUrl.workExperience}`}
        className="textDecorationNone"
      >
        <span role="img" aria-label="Work Experience" className="title fw500">
          💼 Work Experience
        </span>
      </a>

      <Spacer height={12} />

      {renderWorkExperience({
        title: "Flash Game Developer at KingCorp",
        time: "March 2011 to March 2012",
        location: "Ho Chi Minh City, Vietnam",
        description: (
          <ul>
            <li>create a new game: Đánh Chắn</li>
            <li>
              bug fixes and improvements for existing realtime gambling Flash
              games
            </li>
          </ul>
        ),
        techStack: "Flash Actionscript 3, C# and MSSQL",
      })}

      <Spacer height={24} />

      {renderWorkExperience({
        title: "Team Leader Game Developer at Bạch Tuộc Số",
        time: "March 2012 to April 2014",
        location: "Ho Chi Minh City, Vietnam",
        description: (
          <ul>
            <li>create new games: Poker and Tài Xỉu</li>
            <li>
              join a team to create a core game that will be used for all games.
              I joined to build the core for Flash to handle socket messages
              with our defined structure
            </li>
            <li>upgrade existing games to use the latest core</li>
          </ul>
        ),
        techStack: "Flash Actionscript 3, Java and MSSQL",
      })}

      <Spacer height={24} />

      {renderWorkExperience({
        title:
          "Senior Flash Game Developer and Unity 3D Developer at Skoolbo (https://www.skoolbo.com)",
        time: "July 2014 to September 2015",
        location: "Ho Chi Minh City, Vietnam",
        description: (
          <ul>
            <li>
              Build Flash games for kids to play on the website and then
              converting them to HTML5 to support for Safari on iOS. Because at
              that time, Apple does not support Flash on Safari for iPad and
              iPhone.
            </li>
            <li>
              After done the Flash games, I was asked to do Unity games. I am
              happy to learn it. I do the bug fixes and improvements, and also
              adding new features to the existing Unity 3D games. I learned how
              to develop games with Unity which needs lots of experience, from
              modeling, handling bundle assets for offline usage, and
              mathematic.
            </li>
          </ul>
        ),
        techStack: "Flash ActionScript 3, HTML 5, Unity 3D C#, and Photoshop.",
      })}

      <Spacer height={24} />

      {renderWorkExperience({
        title: "Change career path from Game developer to Mobile developer",
        time: "September 2015",
        location: "",
        description: (
          <ul>
            <li>
              After leaving Skoolbo, mobile apps are getting popular. I joined
              an iOS Swift class at Coderschool, where I learned to build a
              complete iOS app with a 3-person team. The class took me 3 months
              to learn and do the final project. Coderschool has a demo day at
              the end of the class. We are the winner of that demo day.
            </li>
            <li>
              An audience at the demo day contacted me for his project. After
              that, I joined his project as a co-founder where I took
              responsibility to build mobile apps for iOS, find a person to
              build an Android app and a friend to handle the backend. From the
              technical side, we did finish the basic functionality, we launched
              the app and let our team, CEO, and operation team to validate the
              idea. It does not go well so we decided to stop working on this
              project. One year for my first start-up.
            </li>
            <li>
              An audience at the demo day contacted me for his project. After
              that, I joined his project as a co-founder where I took
              responsibility to build mobile apps for iOS, find a person to
              build an Android app and a friend to handle the backend. From the
              technical side, we did finish the basic functionality, we launched
              the app and let our team, CEO, and operation team to validate the
              idea. It does not go well so we decided to stop working on this
              project. One year for my first start-up.
            </li>
          </ul>
        ),
      })}

      <Spacer height={24} />

      {renderWorkExperience({
        title: "Contract React Native at PYCOGroup",
        time: "May 2017 to March 2018",
        location: "Jakarta, Indonesia",
        description: (
          <>
            <b>(Non-disclose Agreement project)</b>
            <p>
              A Financial mobile application which is for a simpler life and
              smarter finance management solution. Totally built around the user
              for personalized Life Finance management, from instantly taking
              care of bill payments, and keeping spending on track, to
              organizing the savings to achieve user’s goals. Moreover, it gives
              the user complete access to all features simply using the
              fingerprint.
            </p>
            <h4>Responsibilities</h4>
            <ul>
              <li>
                15 months as Senior Front-end Developer working onsite with big
                team 100+ members in Jakarta indonesia for Financial mobile
                application development base on ReactJS, React Native.
              </li>
              <li>Well interact with the front-end team members.</li>
              <li>Take part in continuous integration, git collaboration.</li>
              <li>
                Defined code structured, documented and maintainable code.
              </li>
            </ul>

            <h4>Challenging</h4>
            <ul>
              <li>Agile/Scrum development</li>
              <li>Requires strong at English as well as technical skills</li>
              <li>
                Requires strong independent working as well as team working
              </li>
              <li>Can join to work as an members of international team</li>
            </ul>
          </>
        ),
        techStack:
          "Javascript (ES6), ReactJs, React Native, React Native for Web, GraphQL, Redux, Router, Webpack, Git, GitLab, Webstorm, Enzyme, Code coverage, Linter, Sketch and Zeplin.",
      })}

      <Spacer height={24} />

      {renderWorkExperience({
        title: "Contract React Native at PYCOGroup",
        time: "March 2018 to April 2018",
        location: "Jakarta, Indonesia",
        description: (
          <>
            <b>(Non-disclose Agreement project)</b>
            <ul>
              <li>1.5 months working onsite in Jakarta, Indonesia.</li>
              <li>
                Working on FE with React-native to build application on Android.
              </li>
              <li>Well interact with the front-end team members.</li>
              <li>
                Responsible with front-end code reviews, writing testable code.
              </li>
              <li>Take part in continuous integration, git collaboration.</li>
              <li>
                Defined code structured, documented and maintainable code.
              </li>
              <li>Problem solving and analytical.</li>
              <li>Work with business team to get requirement</li>
            </ul>
          </>
        ),
        techStack:
          "React Native (Android only), Restful API, Sketch, and Zeplin.",
      })}

      <Spacer height={24} />

      {renderWorkExperience({
        title: "Senior React Native at Olivery",
        time: "June 2018 to September 2018",
        location: "Ho Chi Minh City, Vietnam",
        description: (
          <>
            <p>
              A mobile application about Food/Grocery delivery, we built three
              apps: for customers, for drivers, and for partners (using Sunmi
              POS Android device).
            </p>
          </>
        ),
        techStack:
          "React Native, Restful API, Google Maps (Maps, Directions and Geocoding API), Background tracking GPS location, Stripe (payment with a credit card), Firebase Cloud Messaging, and Sketch.",
      })}

      <Spacer height={24} />

      {renderWorkExperience({
        title: "Freelance React Native at LOGIVAN (https://www.logivan.com)",
        time: "August 2018 to September 2018",
        location: "Ho Chi Minh City, Vietnam",
        description: (
          <>
            <p>A mobile application to help businesses find trucks</p>
            <p>re-built the Driver app entirely to make it more stable</p>
          </>
        ),
        techStack:
          "React Native, Restful API, Facebook Account Kit, OneSignal, and Firebase",
      })}

      <Spacer height={24} />

      {renderWorkExperience({
        title: "Contract React Native at PYCOGroup",
        time: "1-month project - September 2018",
        location: "Bangkok, Thailand",
        description: (
          <>
            <b>Non-disclose Agreement project</b>
            <p>An MVP mobile application about Food delivery</p>
          </>
        ),
        techStack:
          "React Native, Expo, GraphQL, Google Geocoding API, Google Place Autocomplete API, Google Place Detail API, Sketch, and Zeplin.",
      })}

      <Spacer height={24} />

      {renderWorkExperience({
        title: "Contract ReactJS at PYCOGroup",
        time: "October 2018 - January 2019",
        location: "Hanoi, Vietnam",
        description: (
          <>
            <b>Non-disclose Agreement project</b>
            <p>
              A banking project, build a back-office dashboard to manage
              applications and a single web page for introduction and users to
              submit applications.
            </p>
          </>
        ),
        techStack:
          "Typescript, React, Responsive UI, React Apollo with Restful API, Sketch, and Zeplin.",
      })}

      <Spacer height={24} />

      {renderWorkExperience({
        title:
          "Contract React Native + ReactJS at ORKESTRO (https://orkestro.com)",
        time: "March 2019 to October 2019",
        location: "Da lat city, Vietnam",
      })}
      <Spacer height={12} />
      {renderWorkExperience({
        title: "Fulltime React Native + ReactJS at ORKESTRO",
        time: "November 2019 to February 2020",
        location: "London, United Kingdom",
        techStack:
          "React Native, ReactJS, WebSocket, Restful API, GraphQL, Elixir, MongoDB.",
        description: (
          <>
            <p>
              Orkestro gives you access to the best delivery companies in your
              city for on-demand and same day deliveries
            </p>
            <div>
              <ul>
                <li>
                  Receive and analyze requirements from the Product / Operation
                  team
                </li>
                <li>
                  Deploy the existing app to AppStore and Playstore. Refactoring
                  and adding new features for the Driver app.
                </li>
                <li>
                  Adding new features, bug fixes, and improvement for the
                  Dashboard website
                </li>
                <li>
                  Working on a greenfield project using the latest technologies
                  to improve the current system: React (React Hooks, Functional
                  components), Typescript, Elixir, GraphQL. - End to end testing
                  with Cypress - Unit testing with React testing library - Agile
                  development with two-week Sprint, demo what have done to the
                  rest of the company, and Sprint retro.
                </li>
              </ul>
            </div>
          </>
        ),
      })}
    </>
  );
};

export { WorkExperience };
