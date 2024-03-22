import { useState } from 'react';
import { Link } from 'react-router-dom';
import HealthRiskModal from '../HealthRiskModal';
import { aqMessage } from '../TextContent/aqMessageInfo';

function AqMessage({ aqValue = 'low' }: { aqValue?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aqMessageValue = aqMessage[aqValue];

  const openModal = () => {
    setIsModalOpen(true);
  };

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
              fill={aqMessage[aqValue].color} // Adjust opacity as needed (0.3 for example)
              opacity={0.5}
              style={{ animation: 'expandShrink 1s infinite alternate' }}
            />
            {/* Tinier circle */}
            <circle cx={40} cy={40} r={25} fill={aqMessageValue.color} /> {/* Adjust the radius as needed */}
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
          <p className="font-extralight text-3xl">{aqMessageValue.message}</p>
        </div>
      </div>

      {isModalOpen && (
       <HealthRiskModal closeModal={closeModal}/>
      )}
    </div>
  );
}

export default AqMessage;
