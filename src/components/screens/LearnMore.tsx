import { useState } from 'react';
import { Head } from '../shared/Head';
import AirFlowSVG from './AirFlowSVG';
import HumanBody from './HumanBodySVG';

function LearnMore() {
  const [isClicked, setIsClicked] = useState(false);

  const handleSvgClick = () => {
    setIsClicked(!isClicked); // Toggle the state when the SVG is clicked
  };

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="min-h-screen max-w-screen bg-background relative">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1 className="text-7xl rock-3d-logo">JegPuster</h1>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <AirFlowSVG />
        </div>
        <div className="absolute mt-20 left-0 w-full flex justify-center items-center">
          <HumanBody height={900} />
        </div>
        <div className="flex items-center justify-center h-screen ">
          <div className="relative">
            <svg width="70" height="70" onClick={handleSvgClick}>
              <circle cx="35" cy="35" r="35" fill="#192E54"/>
              <text x="50%" y="50%" textAnchor="middle" fill="#FFFFFF" fontSize="24" dy=".3em">
                ?
              </text>
            </svg>
            {isClicked && <div className="absolute z-20 text-grey-900 ml-2">Trang?</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnMore;
