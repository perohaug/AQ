import { useEffect, useState } from 'react';
import { aqMessage } from '../TextContent/aqMessageInfo';
import { userGroupInfoLow } from '../TextContent/userGroupInfo';
import HumanBody from '../../svgs/HumanBodySVG';
import UserGroupsSVG from '../../svgs/UserGroupSVG';
import AirFlowSVG from '../../svgs/AirFlowSVG';
import { Link } from 'react-router-dom';
import ChatBubble from './ChatBubble';

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
          style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
        >
          {aqMessage['low'].userGroupInfo[activeSVG].name}
        </div>
      ) : (
        <div
          className="badge badge-lg text-xl  text-white font-light  px-[0.65em] pb-[0.8em] pt-[0.7em]"
          style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
        >
          Generell befolkning
        </div>
      )}

      <div className="relative flex  items-center">
        <AirFlowSVG />
        <div className="absolute left-60">
          <Link to="/learn">
            <button
              className="rounded-full bg-blue-800 text-white text-xl px-4 py-2 hover:scale-105 transition-transform duration-300"
              style={{ width: '200px', height: '200px', backgroundColor: '#FC8861' }}
            >
              Se mer om luften!
            </button>
          </Link>
        </div>
        <div className="absolute right-0 mt-80">
          <HumanBody showLungs={false} height={600} />
        </div>
        <UserGroupsSVG handleSVGClick={handleSVGClick} activeSVG={activeSVG} />
        <div className="absolute right-20" style={{ top: '180px' }}>
          <ChatBubble svg={activeSVG} />
        </div>
      </div>
    </>
  );
}

export default UserGroups;
