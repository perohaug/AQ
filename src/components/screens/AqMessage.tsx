import { useState } from 'react';
import { aqMessage } from './aqMessageInfo';

function AqMessage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center mt-20 mb-10">
      <div className="flex justify-center">
        <div className="mr-8">
          <svg width={80} height={80} onClick={openModal} className="cursor-pointer">
            <circle cx={40} cy={40} r={40} fill={aqMessage['low'].color} />
          </svg>
        </div>
        <div className="mt-5">
          <p className="font-light text-3xl">{aqMessage['low'].message}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-5" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded-lg z-20">
            <p className="font-bold mb-3">Helserisiko</p>

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