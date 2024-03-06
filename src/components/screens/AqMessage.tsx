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
          <div className="bg-white p-10 rounded-lg z-20">
            <div className="flex items-center mb-3">
              <svg width={40} height={40} className=" mr-5">
                <circle cx={20} cy={20} r={20} fill={'#A4E7ED'} />
              </svg>
              <p>Liten helserisiko</p>
            </div>
            <div className="flex items-center mb-3">
              <svg width={40} height={40} className="mr-5">
                <circle cx={20} cy={20} r={20} fill={'#FEA837'} />
              </svg>
              <p>Moderat helserisiko</p>
            </div>
            <div className="flex items-center mb-3">
              <svg width={40} height={40} className="mr-5">
                <circle cx={20} cy={20} r={20} fill={'#EB6758'} />
              </svg>
              <p>Høy helserisiko</p>
            </div>
            <div className="flex items-center">
              <svg width={40} height={40} className="mr-5">
                <circle cx={20} cy={20} r={20} fill={'#593E67'} />
              </svg>
              <p>Svært høy helserisiko</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AqMessage;
