import { FC } from "react";
import IconProps from "./type";

const LogoIcon: FC<IconProps> = ({ width, color, strokeWidth }) => {
  return (
    <svg
      width={width || "33"}
      height={width || "33"}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth || "1"}
    >
      <path
        d="M14.5621 1.16397L0.664611 15.05C-0.0825397 15.7965 -0.0825397 17.0023 0.664611 17.7489L14.5621 31.6349C15.3092 32.3814 16.516 32.3814 17.2632 31.6349L23.0902 25.8127C23.7593 25.1441 23.7593 24.0601 23.0902 23.3916C22.421 22.723 21.3362 22.723 20.667 23.3916L16.2496 27.8053C16.0637 27.9911 15.7814 27.9911 15.5955 27.8053L4.49734 16.7163C4.31137 16.5305 4.31137 16.2485 4.49734 16.0627L15.5955 4.97371C15.7814 4.7879 16.0637 4.7879 16.2496 4.97371L20.667 9.38749C21.3362 10.0561 22.421 10.0561 23.0902 9.38749C23.7593 8.71891 23.7593 7.63493 23.0902 6.96635L17.2638 1.14477C16.5136 0.41439 15.3064 0.420302 14.5621 1.16397Z"
        fill="url(#paint0_linear_0_19750)"
      />
      <path
        d="M14.5621 1.16397L0.664611 15.05C-0.0825397 15.7965 -0.0825397 17.0023 0.664611 17.7489L14.5621 31.6349C15.3092 32.3814 16.516 32.3814 17.2632 31.6349L23.0902 25.8127C23.7593 25.1441 23.7593 24.0601 23.0902 23.3916C22.421 22.723 21.3362 22.723 20.667 23.3916L16.2496 27.8053C16.0637 27.9911 15.7814 27.9911 15.5955 27.8053L4.49734 16.7163C4.31137 16.5305 4.31137 16.2485 4.49734 16.0627L15.5955 4.97371C16.0585 4.57452 16.814 3.76598 17.9235 3.57687C18.748 3.43633 19.6495 3.74566 20.6278 4.50485C19.9737 3.85129 18.8524 2.73127 17.2638 1.14477C16.5136 0.41439 15.3064 0.420302 14.5621 1.16397Z"
        fill="url(#paint1_linear_0_19750)"
      />
      <path
        d="M24.4353 22.1001C25.1044 22.7687 26.1893 22.7687 26.8584 22.1001L31.1567 17.8054C31.9039 17.0588 31.9039 15.853 31.1568 15.1066L26.821 10.7898C26.1503 10.122 25.0651 10.1229 24.3956 10.7919C23.7265 11.4605 23.7265 12.5445 24.3956 13.213L27.324 16.139C27.5099 16.3248 27.5099 16.6069 27.324 16.7927L24.4353 19.679C23.7662 20.3476 23.7662 21.4315 24.4353 22.1001Z"
        fill="url(#paint2_linear_0_19750)"
      />
      <ellipse
        cx="15.982"
        cy="16.469"
        rx="3.75229"
        ry="3.74926"
        fill="url(#paint3_linear_0_19750)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_19750"
          x1="12.5443"
          y1="13.7757"
          x2="33.7541"
          y2="20.9347"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4285EB" />
          <stop offset="1" stopColor="#2EC7FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_19750"
          x1="7.45896"
          y1="-3.85728"
          x2="-3.95043"
          y2="28.7346"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29CDFF" />
          <stop offset="0.3786" stopColor="#148EFF" />
          <stop offset="1" stopColor="#0A60FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_19750"
          x1="26.5213"
          y1="0.61642"
          x2="11.9379"
          y2="9.8251"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA816E" />
          <stop offset="0.41473" stopColor="#F74A5C" />
          <stop offset="1" stopColor="#F51D2C" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_0_19750"
          x1="11.6811"
          y1="8.62004"
          x2="8.85708"
          y2="19.9347"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA8E7D" />
          <stop offset="0.51264" stopColor="#F74A5C" />
          <stop offset="1" stopColor="#F51D2C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoIcon;
