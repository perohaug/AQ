import React, { SVGProps } from 'react';

export const PM25: React.FC<SVGProps<SVGCircleElement>> = () => (
  <circle cx="0" cy="0" r="8" fill="blue" stroke="gray" strokeWidth={5} id="pm25"></circle>
);

export const PM10: React.FC<SVGProps<SVGCircleElement>> = () => (
  <circle cx="0" cy="0" r="12" fill="none" stroke="green" strokeWidth={3} id="pm10">
    <animateMotion
      dur="12s"
      repeatCount="indefinite"
      fill="freeze" // "freeze" or "remove"
    >
      <mpath href="#left-lane" />
    </animateMotion>
  </circle>
);

// const LeftLane: React.FC<SVGProps<SVGPathElement>> = () => (
//   <path
//     d="M41 24.5C127.167 16.6667 297.949 13.2242 320.5 24.5C342.5 35.5004 347.5 42.9991 350 75.9991C352 102.399 350.834 386.332 350 524.999C311 572.332 209.2 669.599 114 679.999C-4.99954 692.999 82.0004 948.499 91.5004 952.499C101 956.499 119 1086.5 177.5 1053.5C236 1020.5 254 970.999 257 927.499C260 883.999 278 740.999 257 710.499C240.2 686.099 279.334 640.999 301 621.499"
//     stroke="none"
//     id="left-lane"
//   />
// );
