import "./ProfilePicture.css";
import ProfilePictureLabel from "./ProfilePictureLabel";

export default function ProfilePicture({ className = "" }) {
  const closeKey = ">";
  const openKey = "<";

  return (
    <div
      className={`container profile-picture animate-fade-in-up ${className}`}
    >
      {/* Bloque code-1 (izquierda) */}
      <div className="code code-1 font-geist-mono">
        <div>
          <span style={{ color: "var(--andromeda-purple)" }}>
            export function{" "}
          </span>
          <span style={{ color: "var(--andromeda-yellow)" }}>Sections</span>
          <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
          <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
          <span style={{ color: "var(--andromeda-cyan)" }}> sectionList</span>
          <span style={{ color: "var(--andromeda-purple)" }}>{closeKey}</span>
          <span style={{ color: "var(--andromeda-yellow)" }}>) </span>
          <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
        </div>

        <div style={{ paddingLeft: "80px" }}>
          <span style={{ color: "var(--andromeda-purple)" }}>const </span>
          <span style={{ color: "var(--andromeda-purple)" }}>[</span>
          <span style={{ color: "var(--andromeda-cyan)" }}>active</span>
          <span style={{ color: "var(--andromeda-foreground)" }}>, </span>
          <span style={{ color: "var(--andromeda-cyan)" }}>setActive</span>
          <span style={{ color: "var(--andromeda-purple)" }}>] </span>
          <span style={{ color: "var(--andromeda-red)" }}>= </span>
          <span style={{ color: "var(--andromeda-yellow)" }}>useState</span>
          <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
          <span style={{ color: "var(--andromeda-orange)" }}>0</span>
          <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
          <span style={{ color: "var(--andromeda-foreground)" }}>;</span>
        </div>

        <div style={{ paddingLeft: "80px" }}>
          <span style={{ color: "var(--andromeda-purple)" }}>function </span>
          <span style={{ color: "var(--andromeda-yellow)" }}>handleClick</span>
          <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
          <span style={{ color: "var(--andromeda-cyan)" }}>index</span>
          <span style={{ color: "var(--andromeda-yellow)" }}>) </span>
          <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
        </div>

        <div style={{ paddingLeft: "80px" }}>
          <span style={{ color: "var(--andromeda-yellow)" }}> setActive</span>
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
            export function{" "}
          </span>
          <span style={{ color: "var(--andromeda-yellow)" }}>
            OptionSections
          </span>
          <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
          <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
          <span style={{ color: "var(--andromeda-cyan)" }}> optionList</span>
          <span style={{ color: "var(--andromeda-purple)" }}>{closeKey}</span>
          <span style={{ color: "var(--andromeda-yellow)" }}>) </span>
          <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
        </div>

        <div style={{ paddingLeft: "80px" }}>
          <span style={{ color: "var(--andromeda-purple)" }}>const </span>
          <span style={{ color: "var(--andromeda-purple)" }}>[</span>
          <span style={{ color: "var(--andromeda-cyan)" }}>active</span>
          <span style={{ color: "var(--andromeda-foreground)" }}>, </span>
          <span style={{ color: "var(--andromeda-cyan)" }}>setActive</span>
          <span style={{ color: "var(--andromeda-purple)" }}>] </span>
          <span style={{ color: "var(--andromeda-red)" }}>= </span>
          <span style={{ color: "var(--andromeda-yellow)" }}>useState</span>
          <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
          <span style={{ color: "var(--andromeda-orange)" }}>0</span>
          <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
          <span style={{ color: "var(--andromeda-foreground)" }}>;</span>
        </div>

        <div style={{ paddingLeft: "80px" }}>
          <span style={{ color: "var(--andromeda-purple)" }}>function </span>
          <span style={{ color: "var(--andromeda-yellow)" }}>handleClick</span>
          <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
          <span style={{ color: "var(--andromeda-cyan)" }}>index</span>
          <span style={{ color: "var(--andromeda-yellow)" }}>) </span>
          <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
        </div>

        <div style={{ paddingLeft: "80px" }}>
          <span style={{ color: "var(--andromeda-yellow)" }}> setActive</span>
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

      {/* Bloque code-2 (derecha) */}
      <div className="code code-2 font-geist-mono">
        <div>
          <span style={{ color: "var(--andromeda-purple)" }}>
            export const{" "}
          </span>
          <span style={{ color: "var(--andromeda-yellow)" }}>Logo</span>
          <span style={{ color: "var(--andromeda-red)" }}> = </span>
          <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
          <span style={{ color: "var(--andromeda-purple)" }}>{"{"}</span>
          <span style={{ color: "var(--andromeda-cyan)" }}>imgSrc</span>
          <span style={{ color: "var(--andromeda-purple)" }}>{"}"}</span>
          <span style={{ color: "var(--andromeda-yellow)" }}>) </span>
          <span style={{ color: "var(--andromeda-red)" }}>=&gt; </span>
          <span style={{ color: "var(--andromeda-purple)" }}>{openKey}</span>
        </div>

        <div style={{ paddingLeft: "20px" }}>
          <span style={{ color: "var(--andromeda-purple)" }}>return </span>
          <span style={{ color: "var(--andromeda-yellow)" }}>(</span>
        </div>

        <div style={{ paddingLeft: "40px" }}>
          <span style={{ color: "var(--andromeda-blue)" }}>&lt;div</span>
          <span style={{ color: "var(--andromeda-cyan)" }}> className</span>
          <span style={{ color: "var(--andromeda-red)" }}>=</span>
          <span style={{ color: "var(--andromeda-green)" }}>"flex"</span>
          <span style={{ color: "var(--andromeda-blue)" }}>&gt;</span>
        </div>

        <div style={{ paddingLeft: "60px" }}>
          <span style={{ color: "var(--andromeda-blue)" }}>
            &lt;picture&gt;
          </span>
        </div>

        <div style={{ paddingLeft: "80px" }}>
          <span style={{ color: "var(--andromeda-blue)" }}>&lt;img</span>
          <span style={{ color: "var(--andromeda-cyan)" }}> width</span>
          <span style={{ color: "var(--andromeda-red)" }}>=</span>
          <span style={{ color: "var(--andromeda-green)" }}>"50px"</span>
          <span style={{ color: "var(--andromeda-cyan)" }}> height</span>
          <span style={{ color: "var(--andromeda-red)" }}>=</span>
          <span style={{ color: "var(--andromeda-green)" }}>"40px"</span>
          <span style={{ color: "var(--andromeda-cyan)" }}> src</span>
          <span style={{ color: "var(--andromeda-red)" }}>=</span>
          <span style={{ color: "var(--andromeda-green)" }}>
            "https://example.com/avatar.png"
          </span>
          <span style={{ color: "var(--andromeda-cyan)" }}> alt</span>
          <span style={{ color: "var(--andromeda-red)" }}>=</span>
          <span style={{ color: "var(--andromeda-green)" }}>""</span>
          <span style={{ color: "var(--andromeda-blue)" }}>/&gt;</span>
        </div>

        <div style={{ paddingLeft: "60px" }}>
          <span style={{ color: "var(--andromeda-blue)" }}>
            &lt;/picture&gt;
          </span>
        </div>

        <div style={{ paddingLeft: "60px" }}>
          <span style={{ color: "var(--andromeda-foreground)" }}>
            code is life
          </span>
        </div>

        <div style={{ paddingLeft: "40px" }}>
          <span style={{ color: "var(--andromeda-blue)" }}>&lt;/div&gt;</span>
        </div>

        <div style={{ paddingLeft: "20px" }}>
          <span style={{ color: "var(--andromeda-yellow)" }}>)</span>
          <span style={{ color: "var(--andromeda-foreground)" }}>;</span>
        </div>

        <div>
          <span style={{ color: "var(--andromeda-purple)" }}>{closeKey}</span>
          <span style={{ color: "var(--andromeda-foreground)" }}>;</span>
        </div>
      </div>

      {/* Capa con imagen y logo */}
      <div className="layer">
        <svg
          width="180px"
          height="180px"
          viewBox="-10.5 -9.45 21 18.9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="react-logo"
        >
          <circle stroke="#61DBFB" cx="0" cy="0" r="2" fill="#61DBFB" />
          <g stroke="#61DBFB" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5" />
            <ellipse rx="10" ry="4.5" transform="rotate(60)" />
            <ellipse rx="10" ry="4.5" transform="rotate(120)" />
          </g>
        </svg>
        <ProfilePictureLabel />
      </div>
    </div>
  );
}
