import React from "react";
import { HashUrl } from "../../utils/constants";

const Publication: React.FC = () => {
  return (
    <a
      id={HashUrl.publication}
      href={`#${HashUrl.publication}`}
      className="textDecorationNone"
    >
      <h1>
        <span role="img" aria-label="Publication">
          📜
        </span>{" "}
        Publication
      </h1>
      <ul>
        <li>
          <a href="https://taimienphi.vn/download-walter-s-currency-converter-84774">
            Walter's Currency Converter
          </a>
        </li>

        <li>
          <p>Youtube Subtitle published on e-Chip on 1 February 2020</p>
          <ul>
            <li>
              Youtube Subtitle runs on Windows. It helps to insert subtitles
              based on video time and export to a text file (.srt), then it will
              be uploaded with your video to Youtube. And done, your video on
              Youtube has subtitle now!
            </li>
            <li>
              Youtube Subtitle published on e-Chip - an information technology
              newspaper, it is popular in Vietnam before the iPhone gets
              popular!
            </li>
          </ul>
        </li>
      </ul>
    </a>
  );
};

export { Publication };
