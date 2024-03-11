import { useEffect, useState } from 'react';
import { aqMessage } from './aqMessageInfo';
import { userGroupInfoLow } from './userGroupInfo';
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
        <div className="absolute left-40">
          <Link to="/learn">
            <button
              className="rounded-full bg-blue-800 text-white text-xl px-4 py-2 hover:scale-105 transition-transform duration-300"
              style={{ width: '150px', height: '150px', backgroundColor: '#FC8861' }}
            >
              Se mer om luften
            </button>
          </Link>
        </div>
        <div className="absolute right-0 mt-80">
          <HumanBody showLungs={false} height={600} />
        </div>
        <UserGroupsSVG handleSVGClick={handleSVGClick} activeSVG={activeSVG} />
        <div className="absolute right-20" style={{ top: '160px' }}>
          <div className="relative chat chat-end mr-80">
            <div
              className=" chat-bubble bg-white text-2xl font-light text-black px-4 py-3 mr-10"
              style={{ maxWidth: '600px' }}
            >
              {aqMessage['low'].userGroupInfo[activeSVG].healthMessage}
            </div>
            <div className="chat-footer opacity-50 mr-10">Sendt 12:46</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserGroups;
