import { FC } from "react";
import LogoIcon from "./logo.icon";
import PersonIcon from "./person.icon";
import IconProps from "./type";

const Icon: FC<IconProps> = ({ type, width, color }) => {
  return (
    <>
      {
        {
          logo: <LogoIcon width={width} color={color} />,
          default: <LogoIcon width={width} color={color} />,
          person: <PersonIcon width={width} color={color} />,
        }[type || "default"]
      }
    </>
  );
};

export default Icon;
