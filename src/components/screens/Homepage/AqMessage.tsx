import { useState } from 'react';
import { Link } from 'react-router-dom';
import { aqMessage } from '../TextContent/aqMessageInfo';

function AqMessage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  console.log('lol');
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center mt-20 mb-10">
      <div className="flex justify-center">
        <div className="mr-5">
          <svg width={80} height={80} onClick={openModal} className="cursor-pointer">
            <circle
              cx={40}
              cy={40}
              r={20}
              fill={aqMessage['high'].color} // Adjust opacity as needed (0.3 for example)
              opacity={0.5}
              style={{ animation: 'expandShrink 1s infinite alternate' }}
            />
            {/* Tinier circle */}
            <circle cx={40} cy={40} r={25} fill={aqMessage['high'].color} /> {/* Adjust the radius as needed */}
          </svg>
          <style>
            {`
        @keyframes expandShrink {
          0% {
            r: 30; // Initial radius
          }
          50% {
            r: 35; // Maximum radius
          }
          100% {
            r: 40; // Back to the initial radius
          }
        }
      `}
          </style>
        </div>
        <div className="mt-5">
          <p className="font-light text-3xl">{aqMessage['high'].message}</p>
        </div>
        <Link to="/map">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="mt-3 ml-3"
          >
            <rect width="40" height="40" fill="url(#pattern7)" />
            <defs>
              <pattern id="pattern7" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_209_2250" transform="scale(0.00195312)" />
              </pattern>
              <image
                id="image0_209_2250"
                width="512"
                height="512"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </Link>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-5" onClick={closeModal}></div>
          <div className="bg-white p-10 rounded-lg z-20">
            <p className="font-bold mb-6">Helserisiko</p>

            <div className="flex items-center mb-3">
              <svg width={40} height={40} className=" mr-5">
                <circle cx={20} cy={20} r={20} fill={aqMessage['low'].color} />
              </svg>
              <p>Liten</p>
            </div>
            <div className="flex items-center mb-3">
              <svg width={40} height={40} className="mr-5">
                <circle cx={20} cy={20} r={20} fill={aqMessage['moderate'].color} />
              </svg>
              <p>Moderat</p>
            </div>
            <div className="flex items-center mb-3">
              <svg width={40} height={40} className="mr-5">
                <circle cx={20} cy={20} r={20} fill={aqMessage['high'].color} />
              </svg>
              <p>Høy</p>
            </div>
            <div className="flex items-center">
              <svg width={40} height={40} className="mr-5">
                <circle cx={20} cy={20} r={20} fill={aqMessage['veryhigh'].color} />
              </svg>
              <p>Svært høy</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AqMessage;
