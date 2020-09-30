import React from "react";
import { HashUrl } from "../../utils/constants";

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
      <h2>{title}</h2>
      <div>
        <p>
          <b>Time:</b>&nbsp;
          <span>{time}</span>
        </p>
        {location && (
          <p>
            <b>Location:</b>&nbsp;
            <span>{location}</span>
          </p>
        )}

        {techStack && (
          <p>
            <b>Tech:</b>&nbsp;
            <span>{techStack}</span>
          </p>
        )}

        {description && (
          <div>
            <b>What did I do</b>:&nbsp;
            {description}
          </div>
        )}
      </div>
    </>
  );
};

const WorkExperience: React.FC = () => {
  return (
    <a
      id={HashUrl.workExperience}
      href={`#${HashUrl.workExperience}`}
      className="textDecorationNone"
    >
      <h1>
        <span role="img" aria-label="Work Experience">
          💼 Work Experience
        </span>
      </h1>
      {renderWorkExperience({
        title: "Flash Game Developer at KingCorp",
        time: "March 2011 to March 2012",
        location: "Ho Chi Minh City, Vietnam",
        description: (
          <ul>
            <li>
              create a new game: Đánh Chắn - bug fixes and improvements for
              existing realtime gambling Flash games
            </li>
          </ul>
        ),
        techStack: "Flash Actionscript 3, C# and MSSQL",
      })}

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
        techStack: "Flash Actionscript 3, C# and MSSQL",
      })}

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
        techStack: "Flash ActionScript 3, HTML 5, Unity 3D C#",
      })}

      {renderWorkExperience({
        title: "Change career path from Game developer to Mobile developer",
        time: "September 2015",
        location: "",
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
        techStack: "Flash ActionScript 3, HTML 5, Unity 3D C#",
      })}

      {renderWorkExperience({
        title: "Contract React Native at PYCOGroup",
        time: "May 2017 to March 2018",
        location: "Jakarta, Indonesia",
        description: (
          <>
            <b>Non-disclose Agreement project</b>
            <p>
              A digital banking project where the client wants to upgrade their
              application (the website and mobile apps) from version 1 to
              version 2. They chose React Native to build apps for iOS, Android,
              and Web with a single code base.
            </p>
            <ul>
              <li>
                Term deposit: A term deposit that can be created, managed and
                withdrawn right from your smart-phone
              </li>
              <li>
                Goal Saver: An automatic savings with high-interest rates. You
                decide on the deposit and the period yourself.
              </li>
              <li>Chat feature for Customer support</li>
              <li>Support other teams to do the bug fixes and improvement</li>
            </ul>
          </>
        ),
        techStack: "Flash ActionScript 3, HTML 5, Unity 3D C#",
      })}

      {renderWorkExperience({
        title: "Contract React Native at PYCOGroup",
        time: "March 2018 to April 2018",
        location: "Jakarta, Indonesia",
        description: (
          <>
            <b>Non-disclose Agreement project</b>
            <p>
              An MVP mobile application about Agriculture where users submit
              applications to lend the money to grow rice
            </p>
          </>
        ),
        techStack: "React Native (Android only), Restful API",
      })}

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
          "React Native, Restful API, Google Maps (Maps, Directions and Geocoding API), Background tracking GPS location, Stripe (payment with a credit card), Firebase Cloud Messaging",
      })}

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
          "React Native, Expo, GraphQL, Google Geocoding API, Google Place Autocomplete API, Google Place Detail API",
      })}

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
          "Typescript, React, Responsive UI, React Apollo with Restful API",
      })}

      {renderWorkExperience({
        title:
          "Contract React Native + ReactJS at ORKESTRO (https://orkestro.com)",
        time: "March 2019 to October 2019",
        location: "Da lat city, Vietnam",
      })}
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
    </a>
  );
};

export { WorkExperience };
