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
        <div className="badge badge-lg text-xl  text-white font-light pb-[0.8em] pt-[0.7em] ">
          {aqMessage['moderate'].userGroupInfo[activeSVG].name}
        </div>
      ) : (
        <div className="badge badge-lg text-xl   text-white font-light  px-[0.65em] pb-[0.8em] pt-[0.7em] ">
          Generell befolkning
        </div>
      )}

      <div className="relative flex justify-center items-center">
        <AirFlowSVG />
        <div className="flex flex-col justify-center items-center absolute left-0">
          <div className="badge badge-lg badge-badgeColor text-xl ml-20 text-white font-light px-[0.65em] pb-[0.8em] pt-[0.7em] mb-10">
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
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble bg-white text-xl font-light text-black mr-80">
          {aqMessage['moderate'].userGroupInfo[activeSVG].healthMessage}
        </div>
      </div>
    </>
  );
}

export default UserGroups;
