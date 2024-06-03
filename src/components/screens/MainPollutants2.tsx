import { useState } from 'react';
import { stdconcentrations } from '~/components/lib/API/APIResponse';
import bonfire from '~/icons/bonfire.png';
import exhaust from '~/icons/exhaust.png';
import longdistance from '~/icons/longdist.png';
import ship from '~/icons/ship.png';
import dust from '~/icons/dust.png';
import factory from '~/icons/factory.png';

import { particleInfo } from './TextContent/particleInfo';

type MainPollutantsProps = {
  highestPoll: string;
  origin: stdconcentrations;
  location: string;
};

function MainPollutants({ highestPoll, origin, location }: MainPollutantsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showButtonDescription, setShowButtonDescription] = useState(true);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
    setShowButtonDescription(false);
  };

  var dominantPollutantFactorString = '';

  var dominantPollutantName = '';

  function dominantPollutantSVG() {
    if (highestPoll?.toLowerCase() == 'pm25') {
      dominantPollutantName = particleInfo.liten.name;
      return (
        <svg className="w-40 h-40" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill={particleInfo.liten.color} />
        </svg>
      );
    } else if (highestPoll?.toLowerCase() == 'pm10') {
      dominantPollutantName = particleInfo.stor.name;
      return (
        <svg className="w-40 h-40" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill={particleInfo.stor.color} />
        </svg>
      );
    } else if (highestPoll?.toLowerCase() == 'o3') {
      dominantPollutantName = particleInfo.gass1.name;
      return (
        <svg className="w-40 h-40" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill={particleInfo.gass1.color} />
        </svg>
      );
    } else if (highestPoll?.toLowerCase() == 'no2') {
      dominantPollutantName = particleInfo.gass2.name;
      return (
        <svg className="w-40 h-40" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill={particleInfo.gass2.color} />
        </svg>
      );
    }
  }

  function findTopContributer(data: stdconcentrations, dom: string) {
    const pollutantData = data[dom.toUpperCase()];

    if (pollutantData) {
      const topContributers = pollutantData.topContributers;
      let maxContributer: string | null = null;
      let maxValue = Number.NEGATIVE_INFINITY;

      for (const key in topContributers) {
        if (Object.prototype.hasOwnProperty.call(topContributers, key)) {
          const value = topContributers[key as keyof typeof topContributers];
          if (value && value > maxValue) {
            maxContributer = key as keyof typeof topContributers;
            maxValue = value;
          }
        }
      }

      return maxContributer;
    }
  }

  const maxContributer = findTopContributer(origin, highestPoll);

  function dominantPollutantFactor() {
    if (maxContributer === 'vedfyring') {
      dominantPollutantFactorString = 'vedfyring';
      return <img className="max-h-20" src={bonfire} alt="" />;
    } else if (maxContributer === 'eksos') {
      dominantPollutantFactorString = 'eksos';
      return <img className="max-h-20" src={exhaust} alt="" />;
    } else if (maxContributer === 'industri') {
      dominantPollutantFactorString = 'industri';
      return <img className="max-h-20" src={factory} alt="" />;
    } else if (maxContributer === 'langtransport') {
      dominantPollutantFactorString = 'langtransport';
      return <img className="max-h-20" src={longdistance} alt="" />;
    } else if (maxContributer === 'veistov') {
      dominantPollutantFactorString = 'veistøv';
      return <img className="max-h-20" src={dust} alt="" />;
    } else if (maxContributer === 'skip') {
      dominantPollutantFactorString = 'skip';
      return <img className="max-h-20" src={ship} alt="" />;
    } else {
      dominantPollutantFactorString = 'utilgjengelig utenfor Norge';
      return;
    }
  }

  return (
    <div className="flex flex-col items-center" style={{ width: '450px' }}>
      <div
        className="mb-8 badge badge-lg text-2xl text-white font-extralight px-[0.65em] pb-[0.8em] pt-[0.7em]"
        style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
      >
        Forurenser luften mest nå
      </div>
      <div className="flex flex-row justify-center">
        {highestPoll && (
          <div className="flex flex-col  items-center">
            <div
              className="cursor-pointer flex items-center justify-center hover:scale-110 transition-transform duration-300"
              onClick={openModal}
            >
              <div className="absolute">{dominantPollutantFactor()}</div>

              {dominantPollutantSVG()}
            </div>
            <p className="font-extralight text-2xl mt-5">{dominantPollutantName}</p>
          </div>
        )}
      </div>

      <div className="mx-4 mt-5 flex flex-col items-center text-center text-xl">
        <p className=" font-extralight mb-6">
          {dominantPollutantFactorString === 'utilgjengelig utenfor Norge' ? (
            <p>Data for hva dette stammer av er {dominantPollutantFactorString}</p>
          ) : (
            <>
              Stammer i aller størst grad fra <b className="font-medium">{dominantPollutantFactorString}</b>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default MainPollutants;
