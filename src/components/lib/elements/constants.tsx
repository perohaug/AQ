import React, { SVGProps } from 'react';
import { particleInfo } from '~/components/screens/TextContent/particleInfo';

interface Props extends SVGProps<SVGCircleElement> {
  lane: string;
  dur: number;
  comp?: number;
}

const generateRandomDuration = () => {
  const randomValue = Math.random() * 20 + 15;
  const roundedValue = Math.round(randomValue * 10) / 10; // Round to one decimal place
  return roundedValue; // Random number between 5 and 20
};

const getRandomLane = (lane: string) => {
  if (lane === 'pm10') {
    const lanesPM10 = ['#right-lane-pm10', '#left-lane-pm10'];
    const randomIndex = Math.floor(Math.random() * lanesPM10.length);
    return lanesPM10[randomIndex];
  } else if (lane === 'pm25') {
    const lanesPM25 = ['#right-lane-pm25', '#left-lane-pm25'];
    const randomIndex = Math.floor(Math.random() * lanesPM25.length);
    return lanesPM25[randomIndex];
  } else if (lane === 'gas') {
    const lanesGas = ['#right-lane-gas', '#left-lane-gas'];
    const randomIndex = Math.floor(Math.random() * lanesGas.length);
    return lanesGas[randomIndex];
  } else {
    return lane;
  }
};

export const PM25: React.FC<Props> = ({ lane, dur }) => (
  <circle cx="0" cy="0" r="3" fill={particleInfo.liten.color} stroke={particleInfo.liten.color} strokeWidth={5}>
    <animateMotion
      // dur={`${15}s`}
      // begin={`${dur}s`}
      dur={`${generateRandomDuration() * 2}s`}
      begin={`${generateRandomDuration() % 2}s`}
      repeatCount="indefinite"
      fill="freeze" // "freeze" or "remove"
    >
      <mpath href={getRandomLane(lane)} />
    </animateMotion>
  </circle>
);

export const PM10: React.FC<Props> = ({ lane, dur }) => (
  <circle cx="0" cy="0" r="8" fill={particleInfo.stor.color} stroke={particleInfo.stor.color} strokeWidth={3}>
    <animateMotion
      dur={`${generateRandomDuration() * 1.3}s`}
      begin={`${generateRandomDuration() % 1}s`}
      // dur={`${15}s`}
      // begin={`${dur}s`}
      repeatCount="indefinite"
      fill="freeze" // "freeze" or "remove"
    >
      <mpath href={getRandomLane(lane)} />
    </animateMotion>
  </circle>
);

export const GasParticle: React.FC<Props> = ({ lane, dur, comp }) => (
  <circle cx="0" cy="0" r="7" fill={particleInfo.gass1.color} id="gas">
    <animateMotion
      // dur={`${15}s`}
      // begin={`${dur}s`}
      dur={`${(generateRandomDuration() / (comp || 1)) * 1.3}s`}
      begin={`${generateRandomDuration() % 1}s`}
      repeatCount="indefinite"
      fill="freeze" // "freeze" or "remove"
    >
      <mpath href={lane} />
    </animateMotion>
  </circle>
);

export const NoGasParticle: React.FC<Props> = ({ lane, dur }) => (
  <circle cx="0" cy="0" r="4" fill={particleInfo.gass2.color} id="nogas">
    <animateMotion
      // dur={`${15}s`}
      // begin={`${dur}s`}
      dur={`${generateRandomDuration() * 2}s`}
      begin={`${generateRandomDuration() % 2}s`}
      repeatCount="indefinite"
      fill="freeze" // "freeze" or "remove"
    >
      <mpath href={getRandomLane(lane)} />
    </animateMotion>
  </circle>
);
