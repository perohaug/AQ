import { aqMessage } from './aqMessageInfo';

function AqMessage() {
  return (
    <div className="flex justify-center mt-20 mb-10">
      <div className="flex justify-center">
        <div className="mr-8">
          <svg width={80} height={80}>
            <circle cx={40} cy={40} r={40} fill={aqMessage['low'].color} />
          </svg>
        </div>
        <div className="mt-5">
          <p className="font-light text-3xl">{aqMessage['low'].message}</p>
        </div>
      </div>
    </div>
  );
}

export default AqMessage;
