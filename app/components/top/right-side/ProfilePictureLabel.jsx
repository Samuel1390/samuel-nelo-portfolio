import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
const ProfilePictureLabel = () => {
  const { language } = useContext(LanguageContext);
  return (
    <h2 className="title font-geist-mono">
      {language === "spanish"
        ? "<Desarrollador front-end/>"
        : "<Front-end developer/>"}
    </h2>
  );
};

export default ProfilePictureLabel;
