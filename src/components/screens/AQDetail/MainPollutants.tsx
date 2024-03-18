import { useState } from 'react';
import { APIStandard } from '~/components/lib/API/APIResponse';
import bonfire from '~/icons/bonfire.png';
import exhaust from '~/icons/exhaust.png';
import longdistance from '~/icons/longdist.png';
import ship from '~/icons/ship.png';

type MainPollutantsProps = {
  data: APIStandard | null;
};

function MainPollutants(props: MainPollutantsProps) {
  const { data } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const dominantPollutantFactorString: 'vedfyring' | 'eksos' | 'langtransport' | 'skip' = 'skip';
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
    const imageSize = { width: '100px', height: '100px' };

    if (dominantPollutantFactorString === 'vedfyring') {
      return <img src={bonfire} alt="" style={imageSize} />;
    } else if (dominantPollutantFactorString === 'eksos') {
      return <img src={exhaust} alt="" style={imageSize} />;
    } else if (dominantPollutantFactorString === 'langtransport') {
      return <img src={longdistance} alt="" style={imageSize} />;
    } else if (dominantPollutantFactorString === 'skip') {
      return <img src={ship} alt="" style={imageSize} />;
    }
  }

  return (
    <div className="absolute flex flex-col items-center mt-20 ml-60" style={{ width: '450px' }}>
      {/**City name */}
      <div
        className="mb-5 badge badge-lg text-xl text-white font-light px-[0.65em] pb-[0.8em] pt-[0.7em]"
        style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
      >
        {data && data.location && data.location.name !== 'E6-Tiller' ? data.location.name : 'Trondheim'}
      </div>
      {/**Pollutant info */}
      {data?.dominantPollutant && dominantPollutantFactor && (
        <div
          className="mb-10 flex items-center justify-center hover:scale-110 transition-transform duration-300"
          onClick={openModal}
        >
          <div className="absolute">{dominantPollutantFactor()}</div>
          {dominantPollutantSVG()}
        </div>
      )}
      {/**Open modal info */}
      {isModalOpen && (
        <div className="mx-4 flex flex-col items-center">
          <p className="font-normal mb-6">
            Det er <b className="font-bold">{dominantPollutantName}</b> som forurenser mest akkurat nå
          </p>
          <p className="font-light mb-6">
            Dette stammer i aller størst grad fra <b className="font-bold">{dominantPollutantFactorString}</b>
          </p>
        </div>
      )}
    </div>
  );
}

export default MainPollutants;
