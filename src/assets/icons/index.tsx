import { FC } from "react";
import LogoIcon from "./logo.icon";
import PersonIcon from "./person.icon";
import ReviewIcon from "./review.icon";
import IconProps from "./type";

// use this component to render all the icons
const Icon: FC<IconProps> = ({ type, width, color, strokeWidth }) => {
  return (
    <>
      {
        {
          logo: (
            <LogoIcon width={width} color={color} strokeWidth={strokeWidth} />
          ),
          default: (
            <LogoIcon width={width} color={color} strokeWidth={strokeWidth} />
          ),
          person: (
            <PersonIcon width={width} color={color} strokeWidth={strokeWidth} />
          ),
          review: (
            <ReviewIcon width={width} color={color} strokeWidth={strokeWidth} />
          ),
        }[type || "default"]
      }
    </>
  );
};

export default Icon;
