import { useState } from 'react';
import { APIStandard, stdconcentration, stdconcentrations } from '~/components/lib/API/APIResponse';
import bonfire from '~/icons/bonfire.png';
import exhaust from '~/icons/exhaust.png';
import longdistance from '~/icons/longdist.png';
import ship from '~/icons/ship.png';

type MainPollutantsProps = {
  highestPoll: string;
  origin: stdconcentrations;
  location: string;
};

function MainPollutants({ highestPoll, origin, location }: MainPollutantsProps) {
  // const { data } = props;
  // console.log('PROPS', props);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  var dominantPollutantFactorString = '';

  var dominantPollutantName = '';

  function dominantPollutantSVG() {
    if (highestPoll?.toLowerCase() == 'pm25') {
      dominantPollutantName = 'små partikler';
      return (
        <svg className="w-40 h-40" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill="#FF155C" />
        </svg>
      );
    } else if (highestPoll?.toLowerCase() == 'pm10') {
      dominantPollutantName = 'store partikler';
      return (
        <svg className="w-40 h-40" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill="#FF155C" />
        </svg>
      );
    } else if (highestPoll?.toLowerCase() == 'o3' || 'no2') {
      dominantPollutantName = 'gasser';
      return (
        <svg className="w-40 h-40" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill="#5A4858" />
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
        if (topContributers.hasOwnProperty(key)) {
          const value = topContributers[key];
          if (value && value > maxValue) {
            maxContributer = key;
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
      return <img src={bonfire} alt="" />;
    } else if (maxContributer === 'eksos') {
      dominantPollutantFactorString = 'eksos';
      return <img src={exhaust} alt="" />;
    } else if (maxContributer === 'industri') {
      dominantPollutantFactorString = 'industri';
      return <img src={exhaust} alt="" />;
    } else if (maxContributer === 'langtransport') {
      dominantPollutantFactorString = 'langtransport';
      return <img className="max-h-20" src={longdistance} alt="" />;
    } else if (maxContributer === 'veistov') {
      dominantPollutantFactorString = 'veistøv';
      return <img src={exhaust} alt="" />;
    } else if (maxContributer === 'skip') {
      dominantPollutantFactorString = 'skip';
      return <img src={ship} alt="" />;
    } else {
      dominantPollutantFactorString = 'utilgjengelig utenfor Norge';
      return <img src={exhaust} alt="" />;
    }
  }

  return (
    <>
      <div className="absolute left-1/2 transform translate-x-1/4 ml-60 mt-16">
        <div
          className="badge badge-lg text-xl  text-white font-light  px-[0.65em] pb-[0.8em] pt-[0.7em] mb-10 mt-20"
          style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
        >
          Forurenser luften mest i {location} nå
        </div>
        {highestPoll && (
          <div
            className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
            onClick={openModal}
          >
            <div className="absolute">{dominantPollutantFactor()}</div>
            {dominantPollutantSVG()}
          </div>
        )}
        {isModalOpen && (
          <div className="mt-10">
            <p className="font-normal mb-6">
              Det er <b className="font-bold">{dominantPollutantName}</b> som forurenser mest akkurat nå
            </p>
            <p className="font-light mb-6">
              Dette stammer i aller størst grad fra <b className="font-bold">{dominantPollutantFactorString}</b>
            </p>
          </div>
        )}
      </div>
      )
    </>
  );
}

export default MainPollutants;
