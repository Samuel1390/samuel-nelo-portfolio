import "../globals.css";
import "./ProfilePicture.css";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

export function ProfilePicture() {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const closeKey = ">";
  const openKey = "<";
  return (
    <>
      <div className="container profile-picture animate-fade-in-up">
        <div className="code code-1 font-geist-mono">
          <div>
            <span style={{ color: "var(--andromeda-purple)" }}>
              export function
            </span>
            <span style={{ color: "var(--andromeda-yellow)" }}>Sections</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
            <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>sectionList</span>
            <span style={{ color: "var(--andromeda-purple)" }}>{closeKey}</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
            <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
          </div>

          <div style={{ paddingLeft: "80px" }}>
            <span style={{ color: "var(--andromeda-purple)" }}>const</span>
            <span style={{ color: "var(--andromeda-purple)" }}>[</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>active</span>
            <span style={{ color: "var(--andromeda-foreground)" }}>,</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>setActive</span>
            <span style={{ color: "var(--andromeda-purple)" }}>]</span>
            <span style={{ color: "var(--andromeda-red)" }}>=</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>useState</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
            <span style={{ color: "var(--andromeda-orange)" }}>0</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
            <span style={{ color: "var(--andromeda-foreground)" }}>;</span>
          </div>

          <div style={{ paddingLeft: "80px" }}>
            <span style={{ color: "var(--andromeda-purple)" }}>function</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>
              handleClick
            </span>
            <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>index</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
            <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
          </div>

          <div style={{ paddingLeft: "80px" }}>
            <span style={{ color: "var(--andromeda-yellow)" }}>setActive</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>index</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
            <span style={{ color: "var(--andromeda-foreground)" }}>;</span>
          </div>

          <div style={{ paddingLeft: "80px" }}>
            <span style={{ color: "var(--andromeda-purple)" }}>{closeKey}</span>
          </div>
          <div>
            <span style={{ color: "var(--andromeda-purple)" }}>{closeKey}</span>
          </div>
          <div>
            <span style={{ color: "var(--andromeda-purple)" }}>
              export function
            </span>
            <span style={{ color: "var(--andromeda-yellow)" }}>
              OptionSections
            </span>
            <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
            <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>optionList</span>
            <span style={{ color: "var(--andromeda-purple)" }}>{closeKey}</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
            <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
          </div>

          <div style={{ paddingLeft: "80px" }}>
            <span style={{ color: "var(--andromeda-purple)" }}>const</span>
            <span style={{ color: "var(--andromeda-purple)" }}>[</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>active</span>
            <span style={{ color: "var(--andromeda-foreground)" }}>,</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>setActive</span>
            <span style={{ color: "var(--andromeda-purple)" }}>]</span>
            <span style={{ color: "var(--andromeda-red)" }}>=</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>useState</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
            <span style={{ color: "var(--andromeda-orange)" }}>0</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
            <span style={{ color: "var(--andromeda-foreground)" }}>;</span>
          </div>

          <div style={{ paddingLeft: "80px" }}>
            <span style={{ color: "var(--andromeda-purple)" }}>function</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>
              handleClick
            </span>
            <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>index</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
            <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
          </div>

          <div style={{ paddingLeft: "80px" }}>
            <span style={{ color: "var(--andromeda-yellow)" }}>setActive</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>index</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
            <span style={{ color: "var(--andromeda-foreground)" }}>;</span>
          </div>

          <div style={{ paddingLeft: "80px" }}>
            <span style={{ color: "var(--andromeda-purple)" }}>{closeKey}</span>
          </div>
          <div>
            <span style={{ color: "var(--andromeda-purple)" }}>{closeKey}</span>
          </div>
        </div>
        <div className="code code-2 font-geist-mono">
          <div>
            <span style={{ color: "var(--andromeda-purple)" }}>
              export const
            </span>
            <span style={{ color: "var(--andromeda-yellow)" }}> Logo</span>
            <span style={{ color: "var(--andromeda-red)" }}>=</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
            <span style={{ color: "var(--andromeda-purple)" }}>{"{"}</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>imgSrc</span>
            <span style={{ color: "var(--andromeda-purple)" }}>{"}"}</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
            <span style={{ color: "var(--andromeda-red)" }}>{"=>"}</span>
            <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
          </div>
          <div>
            &nbsp;&nbsp;
            <span style={{ color: "var(--andromeda-purple)" }}>return</span>
            <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "var(--andromeda-blue)" }}>&lt;div</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>className</span>
            <span style={{ color: "var(--andromeda-red)" }}>=</span>
            <span style={{ color: "var(--andromeda-green)" }}>{`"flex"`}</span>
            <span style={{ color: "var(--andromeda-blue)" }}>&gt;</span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "var(--andromeda-blue)" }}>
              &lt;picture&gt;
            </span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "var(--andromeda-blue)" }}>&lt;img </span>
            <span style={{ color: "var(--andromeda-cyan)" }}>width</span>
            <span style={{ color: "var(--andromeda-red)" }}>=</span>
            <span style={{ color: "var(--andromeda-green)" }}>{`"50px"`} </span>
            <span
              style={{ color: "var(--andromeda-cyan)", marginLeft: "80px" }}
            >
              height
            </span>
            <span style={{ color: "var(--andromeda-red)" }}>=</span>
            <span style={{ color: "var(--andromeda-green)" }}>{`"40px"`}</span>
            <span
              style={{ color: "var(--andromeda-cyan)", marginLeft: "120px" }}
            >
              {" "}
              src
            </span>
            <span style={{ color: "var(--andromeda-red)" }}>=</span>
            <span
              style={{ color: "var(--andromeda-green)" }}
            >{`"https/"`}</span>
            <span style={{ color: "var(--andromeda-blue)" }}>{"{"}</span>
            <span style={{ color: "var(--andromeda-cyan)" }}>imgSrc</span>
            <span style={{ color: "var(--andromeda-blue)" }}>{"}"} </span>
            <span
              style={{ color: "var(--andromeda-cyan)", marginLeft: "80px" }}
            >
              alt
            </span>
            <span style={{ color: "var(--andromeda-red)" }}>=</span>
            <span style={{ color: "var(--andromeda-green)" }}>{""}</span>
            <span style={{ color: "var(--andromeda-blue)" }}>/&gt;</span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "var(--andromeda-blue)" }}>
              &lt;/picture&gt;
            </span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "var(--andromeda-foreground)" }}>
              code is life
            </span>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "var(--andromeda-blue)" }}>&lt;/div&gt;</span>
          </div>
          <div>
            &nbsp;&nbsp;
            <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
            <span style={{ color: "var(--andromeda-foreground)" }}>;</span>
          </div>
          <div>
            <span style={{ color: "var(--andromeda-purple)" }}>{closeKey}</span>
            <span style={{ color: "var(--andromeda-foreground)" }}>;</span>
          </div>
        </div>

        <div className="layer">
          <svg
            width="180px"
            height="180px"
            viewBox="-10.5 -9.45 21 18.9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="react-logo"
          >
            <circle
              srtroke="#61DBFB"
              cx="0"
              cy="0"
              r="2"
              fill="#61DBFB"
            ></circle>
            <g stroke="#61DBFB" strokeWidth="1" fill="none">
              <ellipse rx="10" ry="4.5"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
          </svg>
          <h2 className="title font-geist-mono">
            {language === "spanish"
              ? "<Desarrollador front-end/>"
              : "<Front-end developer/>"}
          </h2>
        </div>
      </div>
    </>
  );
}
