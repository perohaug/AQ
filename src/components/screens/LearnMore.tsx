import { useState } from 'react';
import { Head } from '../shared/Head';
import AirFlowSVG from './AirFlowSVG';
import HumanBody from './HumanBodySVG';
import ParticleExplanation from './ParticleExplanation';
import bonfire from '~/icons/bonfire 1.png';
import MainPollutants from './MainPollutants';
import { aqMessage } from './aqMessageInfo';

function LearnMore() {
  const [isClicked, setIsClicked] = useState(false);
  const [isViewMore, setIsViewMore] = useState(false);

  const handleSvgClick = () => {
    setIsClicked(!isClicked); // Toggle the state when the SVG is clicked
  };

  const handleCompareClick = () => {
    setIsViewMore(!isViewMore);
  };

  const currentAQ = aqMessage['moderate'];

  return (
    <>
      <Head title="TOP PAGE" />

      <div className="bg-background relative">
        <div className="absolute top-1/2 mt-60">
          <AirFlowSVG />
        </div>
        <div className="absolute mt-20 left-0 w-full flex justify-center items-center">
          <HumanBody showLungs={true} height={900} />
        </div>
        <div className="absolute flex flex-col top-1/2 left-20 mt-80">
          <ParticleExplanation />
        </div>

        <div className="flex justify-center">
          <div className="flex items-center justify-center relative">
            {!isViewMore && (
              <div className="absolute top-1/2 mt-80 ml-80">
                <button
                  className="rounded-full bg-blue-800 text-white text-lg px-4 hover:scale-110 transition-transform duration-300 py-2 mt-20"
                  style={{ width: '160px', height: '160px', backgroundColor: '#FC8861' }}
                  onClick={handleCompareClick}
                >
                  Sammenlign luften i Trondheim med andre byer
                </button>
              </div>
            )}

            {/* Search city */}
            {isViewMore && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-40">
                <div className="flex items-center mt-80">
                  <button
                    className="absolute rounded-full bg-blue-800 text-white text-lg px-4 py-2 mb-20 ml-80"
                    style={{ width: '60px', height: '60px', backgroundColor: '#FC8861' }}
                    onClick={handleCompareClick}
                  >
                    <p className="text-3xl mb-1">x</p>
                  </button>
                  <div className="flex items-center mt-20">
                    <div
                      className="badge badge-lg text-xl text-white font-light px-[0.9em] pb-[0.8em] pt-[0.7em] top-1/2 mr-6"
                      style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
                    >
                      Trondheim
                    </div>

                    <div className="relative inline-block text-left ml-20 ">
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
              </div>
            )}

            {/*<div className=" mt-40">
              <svg width="70" height="70" onClick={handleSvgClick}>
                <circle cx="35" cy="35" r="35" fill="#192E54" />
                <text x="50%" y="50%" textAnchor="middle" fill="#FFFFFF" fontSize="24" dy=".3em">
                  ?
                </text>
              </svg>
              {isClicked && <div className="absolute z-20 text-grey-900">Trang?</div>}
            </div>*/}
          </div>

          {currentAQ != aqMessage['low'] && (
            <div className="absolute left-1/2 transform translate-x-1/4 ml-60 mt-40">
              <MainPollutants />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LearnMore;
