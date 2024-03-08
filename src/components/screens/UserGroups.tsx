import { useEffect, useState } from 'react';
import { aqMessage } from './aqMessageInfo';
import { userGroupInfoLow } from './userGroupInfo';
import bonfire from '~/icons/bonfire 1.png';
import exhaust from '~/icons/exhaust-pipe 1.png';
import traffic from '~/icons/car 1.png';
import HumanBody from './HumanBodySVG';
import UserGroupsSVG from './UserGroupSVG';
import AirFlowSVG from './AirFlowSVG';
import { Link } from 'react-router-dom';

function UserGroups() {
  const [activeSVG, setActiveSVG] = useState(1);

  const handleSVGClick = (svgId: any) => {
    setActiveSVG(svgId);
  };

  return (
    <>
      {userGroupInfoLow[activeSVG].id > 1 ? (
        <div
          className="badge badge-lg text-xl  text-white font-light pb-[0.8em] pt-[0.7em]"
          style={{ backgroundColor: '#FC8861', borderColor: '#FC8861' }}
        >
          {aqMessage['moderate'].userGroupInfo[activeSVG].name}
        </div>
      ) : (
        <div
          className="badge badge-lg text-xl  text-white font-light  px-[0.65em] pb-[0.8em] pt-[0.7em]"
          style={{ backgroundColor: '#FC8861', borderColor: '#FC8861' }}
        >
          Generell befolkning
        </div>
      )}

      <div className="relative flex  items-center">
        <AirFlowSVG />
        <div className="absolute left-40">
          <Link to="/learn">
            <button
              className="rounded-full bg-blue-800 text-white text-xl px-4 py-2"
              style={{ width: '150px', height: '150px', backgroundColor: '#192E54' }}
            >
              Hva er i luften nå?
            </button>
          </Link>
        </div>
        <div className="absolute right-0">
          <HumanBody height={600} style={{ transform: 'translateY(150px)' }} />
        </div>
        <UserGroupsSVG handleSVGClick={handleSVGClick} activeSVG={activeSVG} />
        <div className="absolute right-20" style={{ top: '160px' }}>
          <div className="chat chat-end">
            <div
              className="relative chat-bubble bg-white text-2xl font-light text-black px-4 py-3 mr-80"
              style={{ maxWidth: '600px' }}
            >
              {aqMessage['moderate'].userGroupInfo[activeSVG].healthMessage}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserGroups;
