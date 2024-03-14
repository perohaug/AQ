import React, { SVGProps } from 'react';

interface PMProps extends SVGProps<SVGCircleElement> {
  amount: number;
}

const generateRandomDuration = () => {
  const randomValue = Math.random() * (20 - 5) + 5;
  const roundedValue = Math.round(randomValue * 10) / 10; // Round to one decimal place
  return roundedValue; // Random number between 5 and 20
};

const getRandomLane = () => {
  const lanes = ['#right-lane', '#left-lane'];
  const randomIndex = Math.floor(Math.random() * lanes.length);
  return lanes[randomIndex];
};

export const PM25: React.FC<SVGProps<SVGCircleElement>> = () => (
  <circle cx="0" cy="0" r="3" fill="#FF155C" stroke="#FF155C" strokeWidth={5} id="pm25">
    <animateMotion
      dur={`${generateRandomDuration()}s`}
      begin={`${generateRandomDuration() % 1}s`}
      repeatCount="indefinite"
      fill="freeze" // "freeze" or "remove"
    >
      <mpath href={getRandomLane()} />
    </animateMotion>
  </circle>
);

export const PM10: React.FC<SVGProps<SVGCircleElement>> = () => (
  <circle cx="0" cy="0" r="12" fill="#FF6C6C" stroke="#FF6C6C" strokeWidth={3} id="pm10">
    <animateMotion
      dur={`${generateRandomDuration()}s`}
      begin={`${generateRandomDuration() % 1}s`}
      repeatCount="indefinite"
      fill="freeze" // "freeze" or "remove"
    >
      <mpath href={getRandomLane()} />
    </animateMotion>
  </circle>
);

interface LaneProps extends SVGProps<SVGPathElement> {
  id: string;
}

const generateRandomShake = () => {
  const randomValue = Math.random() * 2 - 1; // Random number between -1 and 1
  return randomValue;
};

export const RightLane: React.FC<LaneProps> = ({ id }) => (
  <path
    d={`M41 ${24.5 + generateRandomShake()}C127.167 ${16.6667 + generateRandomShake()} 297.949 ${
      13.2242 + generateRandomShake()
    } 320.5 ${24.5 + generateRandomShake()}C342.5 ${35.5004 + generateRandomShake()} 347.5 ${
      42.9991 + generateRandomShake()
    } 350 ${75.9991 + generateRandomShake()}C352 ${102.399 + generateRandomShake()} 350.834 ${
      386.332 + generateRandomShake()
    } 350 ${524.999 + generateRandomShake()}C388.992 ${572.345 + generateRandomShake()} 490.769 ${
      669.637 + generateRandomShake()
    } 585.949 ${680.04 + generateRandomShake()}C704.922 ${693.043 + generateRandomShake()} 617.942 ${
      948.61 + generateRandomShake()
    } 608.444 ${952.611 + generateRandomShake()}C598.946 ${956.612 + generateRandomShake()} 580.95 ${
      1086.65 + generateRandomShake()
    } 522.463 ${1053.64 + generateRandomShake()}C463.975 ${1020.63 + generateRandomShake()} 445.979 ${
      971.116 + generateRandomShake()
    } 442.98 ${927.604 + generateRandomShake()}C439.981 ${884.093 + generateRandomShake()} 421.985 ${
      741.056 + generateRandomShake()
    } 442.98 ${710.548 + generateRandomShake()}C459.776 ${686.141 + generateRandomShake()} 420.652 ${
      641.03 + generateRandomShake()
    } 398.99 ${621.525 + generateRandomShake()}`}
    stroke="none"
    id={id}
  />
);

export const LeftLane: React.FC<LaneProps> = ({ id }) => (
  <path
    d={`M41 ${24.5 + generateRandomShake()}C127.167 ${16.6667 + generateRandomShake()} 297.949 ${
      13.2242 + generateRandomShake()
    } 320.5 ${24.5 + generateRandomShake()}C342.5 ${35.5004 + generateRandomShake()} 347.5 ${
      42.9991 + generateRandomShake()
    } 350 ${75.9991 + generateRandomShake()}C352 ${102.399 + generateRandomShake()} 350.834 ${
      386.332 + generateRandomShake()
    } 350 ${524.999 + generateRandomShake()}C311 ${572.332 + generateRandomShake()} 209.2 ${
      669.599 + generateRandomShake()
    } 114 ${679.999 + generateRandomShake()}C-4.99954 ${692.999 + generateRandomShake()} 82.0004 ${
      948.499 + generateRandomShake()
    } 91.5004 ${952.499 + generateRandomShake()}C101 ${956.499 + generateRandomShake()} 119 ${
      1086.5 + generateRandomShake()
    } 177.5 ${1053.5 + generateRandomShake()}C236 ${1020.5 + generateRandomShake()} 254 ${
      970.999 + generateRandomShake()
    } 257 ${927.499 + generateRandomShake()}C260 ${883.999 + generateRandomShake()} 278 ${
      740.999 + generateRandomShake()
    } 257 ${710.499 + generateRandomShake()}C240.2 ${686.099 + generateRandomShake()} 279.334 ${
      640.999 + generateRandomShake()
    } 301 ${621.499 + generateRandomShake()}`}
    stroke="none"
    id={id}
  />
);
