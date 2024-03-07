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
        <div className="flex justify-center">
          <div className="flex items-center justify-center relative">
            {/* Search city */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-20">
              <div className="flex items-center">
                <div
                  className="badge badge-lg text-xl text-white font-light px-[0.9em] pb-[0.8em] pt-[0.7em] mt-80 mr-10"
                  style={{ backgroundColor: '#192E54' }}
                >
                  Trondheim
                </div>
                <div className="relative inline-block text-left mt-80 ">
                  <div>
                    <input
                      type="text"
                      className="border border-white bg-white h-8 px-3 w-40 rounded-2xl text-lg focus:outline-none"
                      placeholder="Skriv inn by.."
                    />
                    <svg
                      className="absolute right-2 top-2.5 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    ></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Clickable SVG */}
            <div className=" mt-40">
              <svg width="70" height="70" onClick={handleSvgClick}>
                <circle cx="35" cy="35" r="35" fill="#192E54" />
                <text x="50%" y="50%" textAnchor="middle" fill="#FFFFFF" fontSize="24" dy=".3em">
                  ?
                </text>
              </svg>
              {isClicked && <div className="absolute z-20 text-grey-900">Trang?</div>}
            </div>
          </div>
          {/* Particle explanation */}

          <div className="absolute left-1/2 transform translate-x-1/4 ml-40 mt-60">
            <div className="flex items-center justify-start">
              <svg className="w-12 h-12" viewBox="0 0 70 70">
                <circle cx="35" cy="35" r="35" fill="#FCC16D" />
              </svg>
              <p className="ml-2 font-medium text-m">Store partikler, ikke alle trenger ned i lungene</p>
            </div>
            <div className="ml-2 flex items-center justify-start mt-2">
              <svg className="w-8 h-8" viewBox="0 0 70 70">
                <circle cx="35" cy="35" r="35" fill="#F88864" />
              </svg>
              <p className="ml-2 font-medium text-m">Små partikler, trenger oftere ned i lungene</p>
            </div>
            <div className="ml-2 flex items-center justify-start mt-2">
              <svg className="w-8 h-8" viewBox="0 0 70 70">
                <defs>
                  <filter id="blurFilter" x="0" y="0" width="100%" height="100%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                  </filter>
                </defs>
                <circle cx="35" cy="35" r="35" fill="#593E67" filter="url(#blurFilter)" />
              </svg>
              <p className="ml-2 font-medium  text-m">Gass1: Irriterer øverst i lungene</p>
            </div>
            <div className="ml-2 flex items-center justify-start mt-2">
              <svg className="w-8 h-8" viewBox="0 0 70 70">
                <defs>
                  <filter id="blurFilter" x="0" y="0" width="100%" height="100%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                  </filter>
                </defs>
                <circle cx="35" cy="35" r="35" fill="#C1AA9D" filter="url(#blurFilter)" />
              </svg>
              <p className="ml-2 font-medium  text-m">Gass2: Irriterer øverst i lungene</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnMore;
