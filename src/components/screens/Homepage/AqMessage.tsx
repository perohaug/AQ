import { useState } from 'react';
import { Link } from 'react-router-dom';
import { APIStandard } from '~/components/lib/API/APIResponse';
import HealthRiskModal from '../HealthRiskModal';
import { aqMessage } from '../TextContent/aqMessageInfo';

interface AqMessageProps {
  aqValue?: string;
  location?: string;
}

function AqMessage({ aqValue = 'low', location }: AqMessageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aqMessageValue = aqMessage[aqValue];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="flex justify-center mt-12 mb-10">
      <div className="flex justify-center">
        <p className="font-extralight text-5xl mt-5">i {location}</p>

        <svg width={80} height={80} onClick={openModal} className="cursor-pointer ml-3">
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
            }`}
        </style>
      </div>

      {isModalOpen && <HealthRiskModal closeModal={closeModal} />}
    </div>
  );
}

export default AqMessage;
