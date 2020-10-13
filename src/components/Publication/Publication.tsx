import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const Publication: React.FC = () => {
  return (
    <section>
      <a
        id={HashUrl.publication}
        href={`#${HashUrl.publication}`}
        className="textDecorationNone"
      >
        <div className="title fw500">
          <span role="img" aria-label="Publication">
            📜
          </span>{" "}
          Publication
        </div>
      </a>
      <ul>
        <li>
          <a
            href="https://taimienphi.vn/download-walter-s-currency-converter-84774"
            className="subtitle"
          >
            Walter's Currency Converter
          </a>
        </li>

        <Spacer height={12} />

        <li>
          <p className="subtitle">
            Youtube Subtitle published on e-Chip on 1 February 2020
          </p>
          <Spacer height={6} />
          <ul className="description">
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
    </section>
  );
};

export { Publication };
