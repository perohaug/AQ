import { aqMessage } from './TextContent/aqMessageInfo';

interface HealthRiskModalProps {
  closeModal: () => void;
}

function HealthRiskModal({ closeModal }: HealthRiskModalProps) {
  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-5" onClick={closeModal}></div>
      <div className="bg-white p-10 rounded-lg z-20">
        <p className="font-bold mb-6">Mulighet for påvirkning av helse</p>

        <div className="flex items-center mb-3">
          <svg width={40} height={40} className=" mr-5">
            <circle cx={20} cy={20} r={20} fill={aqMessage['low'].color} />
          </svg>
          <p>Ingen eller liten</p>
        </div>
        <div className="flex  items-center mb-3">
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
  );
}

export default HealthRiskModal;
