import { useEffect, useState } from 'react';
import { aqMessage } from './aqMessageInfo';
import { userGroupInfoLow } from './userGroupInfo';
import bonfire from '~/icons/bonfire 1.png';
import exhaust from '~/icons/exhaust-pipe 1.png';
import traffic from '~/icons/car 1.png';
import HumanBody from './HumanBodySVG';
import UserGroupsSVG from './UserGroupSVG';
import AirFlowSVG from './AirFlowSVG';

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
          style={{ backgroundColor: '#192E54' }}
        >
          {aqMessage['moderate'].userGroupInfo[activeSVG].name}
        </div>
      ) : (
        <div
          className="badge badge-lg text-xl   text-white font-light  px-[0.65em] pb-[0.8em] pt-[0.7em]"
          style={{ backgroundColor: '#192E54' }}
        >
          Generell befolkning
        </div>
      )}

      <div className="relative flex justify-center items-center">
        <AirFlowSVG />
        <div className="flex flex-col justify-center items-center absolute left-0">
          <div
            className="badge badge-lg badge-badgeColor text-xl ml-20 text-white font-light px-[0.65em] pb-[0.8em] pt-[0.7em] mb-10"
            style={{ backgroundColor: '#192E54' }}
          >
            Hva er i lufta nå?
          </div>
          <img src={bonfire} alt="Bonfire" className="w-16 h-16 mb-5" />
          <img src={exhaust} alt="Exhaust" className="w-16 h-16 ml-20 mb-5" />
          <img src={traffic} alt="Traffic" className="w-16 h-16 mb-5" />
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
