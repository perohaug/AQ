import { useState } from 'react';
import { APIStandard } from '~/components/lib/API/APIResponse';
import bonfire from '~/icons/bonfire 1.png';
import exhaust from '~/icons/exhaust-pipe 1.png';

type MainPollutantsProps = {
  data: APIStandard | null;
};

function MainPollutants(props: MainPollutantsProps) {
  const { data } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const dominantPollutantFactorString = 'vedfyring';

  var dominantPollutantName = '';

  function dominantPollutantSVG() {
    if (data?.dominantPollutant == 'pm25') {
      dominantPollutantName = 'små partikler';
      return (
        <svg className="w-40 h-40" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill="#FF155C" />
        </svg>
      );
    } else if (data?.dominantPollutant == 'pm10') {
      dominantPollutantName = 'store partikler';
      return (
        <svg className="w-40 h-40" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill="#FF155C" />
        </svg>
      );
    } else if (data?.dominantPollutant == 'o3' || 'no2') {
      dominantPollutantName = 'gasser';
      return (
        <svg className="w-40 h-40" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill="#5A4858" />
        </svg>
      );
    }
  }

  function dominantPollutantFactor() {
    if (dominantPollutantFactorString == 'vedfyring') {
      return <img src={bonfire} alt="" />;
    } else if (dominantPollutantFactorString == 'eksos') {
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
            Forurenser luften mest i {data?.location.name} nå
          </div>
          {data?.dominantPollutant && dominantPollutantFactor && (
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
