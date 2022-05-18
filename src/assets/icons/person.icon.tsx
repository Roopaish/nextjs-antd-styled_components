import { FC } from "react";
import IconProps from "./type";

const PersonIcon: FC<IconProps> = ({ width, color }) => {
  return (
    <svg
      width={width || "14"}
      height={width || "14"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.65">
        <circle cx="6.88342" cy="4.2998" r="3.5" stroke={color || "white"} />
        <path
          d="M12.5687 13.1529C12.1356 10.4029 9.75512 8.2998 6.8834 8.2998C4.01599 8.2998 1.63832 10.3966 1.20001 13.1405"
          stroke={color || "white"}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default PersonIcon;
