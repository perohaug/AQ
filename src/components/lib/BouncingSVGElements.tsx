import React, { useEffect } from 'react';
import { PM25, PM10, RightLane, LeftLane } from './elements/constants';

// Make an interface that takes in two numbers, both should represent the amount props in the PM25 and PM10 components.

interface BouncingSVGElementsProps {
  pm25: number;
  pm10: number;
}

const BouncingSVGElements: React.FC<BouncingSVGElementsProps> = ({ pm10, pm25 }) => {
  {
    const generateRandomDelay = () => {
      return Math.floor(Math.random() * (20 - 5 + 1) + 5); // Random number between 5 and 20
    };

    const generatePM25Elements = () => {
      const pm25Elements = [];
      for (let i = 0; i < pm25 * 10; i++) {
        const delay = generateRandomDelay();
        pm25Elements.push(<PM25 key={`pm25-${i}`} style={{ animationDuration: `${delay}s` }} />);
      }
      return pm25Elements;
    };

    const generatePM10Elements = () => {
      const pm10Elements = [];
      for (let i = 0; i < pm10 * 10; i++) {
        const delay = generateRandomDelay();
        pm10Elements.push(<PM10 key={`pm10-${i}`} style={{ animationDuration: `${delay}s` }} />);
      }
      return pm10Elements;
    };
    return (
      <div className="relative">
        <svg width="704" height="1131" viewBox="0 0 704 1131" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M37.1532 41.0924C78.0094 34.89 151.869 31.0206 201.887 31.0206C334.357 31.0206 334.357 31.0206 334.357 142.664C334.357 248.596 328.723 307.988 328.723 413.92C339.876 427.577 355.49 457.894 328.723 474.692C296.63 548.984 262.488 567.558 246.613 567.558C220.665 570.118 104.071 598.456 75.5626 640.621C47.0543 682.786 -19.8635 919.217 8.64482 970.088C37.1531 1020.96 126.434 1165.72 201.887 1119.97C277.34 1074.22 310.799 945.506 310.799 919.387C310.799 898.493 326.504 724.837 334.357 640.621C334.357 582.17 345.965 567.558 351.769 567.558"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M41 24.5C127.167 16.6667 297.949 13.2242 320.5 24.5C342.5 35.5004 347.5 42.9991 350 75.9991C352 102.399 350.834 386.332 350 524.999C311 572.332 209.2 669.599 114 679.999C-4.99954 692.999 82.0004 948.499 91.5004 952.499C101 956.499 119 1086.5 177.5 1053.5C236 1020.5 254 970.999 257 927.499C260 883.999 278 740.999 257 710.499C240.2 686.099 279.334 640.999 301 621.499"
            stroke="none"
            id="left-lane"
          />
          <path
            d="M351.769 567.511C357.571 567.511 369.177 582.123 369.177 640.567C377.027 724.774 392.728 898.412 392.728 919.304C392.728 945.42 426.178 1074.12 501.61 1119.87C577.043 1165.61 666.299 1020.86 694.8 969.999C723.301 919.134 656.401 682.727 627.9 640.567C599.4 598.406 482.838 570.072 456.897 567.511C441.025 567.511 407.923 548.94 375.839 474.656C349.079 457.86 364.689 427.546 375.839 413.89C375.839 307.97 369.177 248.585 369.177 142.664C369.177 2.00046 369.177 2.00037 271.365 2.00037C221.348 2.00036 78.0094 5.86972 37.1531 12.0721"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M41 24.5C127.167 16.6667 297.949 13.2242 320.5 24.5C342.5 35.5004 347.5 42.9991 350 75.9991C352 102.399 350.834 386.332 350 524.999C388.992 572.345 490.769 669.637 585.949 680.04C704.922 693.043 617.942 948.61 608.444 952.611C598.946 956.612 580.95 1086.65 522.463 1053.64C463.975 1020.63 445.979 971.116 442.98 927.604C439.981 884.093 421.985 741.056 442.98 710.548C459.776 686.141 420.652 641.03 398.99 621.525"
            stroke="none"
            id="right-lane"
          />

          {generatePM25Elements()}
          {generatePM10Elements()}
        </svg>
      </div>
    );
  }
};

export default BouncingSVGElements;
