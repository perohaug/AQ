import { useState } from 'react';
import { APIStandard } from '~/components/lib/API/APIResponse';
import bonfire from '~/icons/bonfire 1.png';
import exhaust from '~/icons/exhaust-pipe 1.png';

type MainPollutantsProps = {
  highestPoll: string | undefined;
  origin: string | undefined;
  location: string | undefined;
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
  console.log('skjer her a?', origin);
  function dominantPollutantFactor() {
    if (origin === 'vedfyring') {
      dominantPollutantFactorString = 'vedfyring';
      console.log(origin);
      return <img src={bonfire} alt="" />;
    } else if (origin === 'eksos') {
      dominantPollutantFactorString = 'eksos';
      console.log(origin);
      return <img src={exhaust} alt="" />;
    } else if (origin === 'industri') {
      console.log(origin);
      dominantPollutantFactorString = 'industri';
      return <img src={exhaust} alt="" />;
    } else if (origin === 'langtransport') {
      console.log(origin);
      dominantPollutantFactorString = 'langtransport';
      return <img src={exhaust} alt="" />;
    } else if (origin === 'veistov') {
      console.log(origin);
      dominantPollutantFactorString = 'veistøv';
      return <img src={exhaust} alt="" />;
    } else {
      console.log(origin);
      dominantPollutantFactorString = 'utilgjengelig utenfor Norge';
      return <img src={exhaust} alt="" />;
    }
  }

  return (
    <>
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
              <div className="absolute ">{dominantPollutantFactor()}</div>
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
      </>
    </>
  );
}

export default MainPollutants;
