import { useEffect, useState } from 'react';
import { aqMessage } from '../TextContent/aqMessageInfo';
import { userGroupInfoLow } from '../TextContent/userGroupInfo';
import HumanBody from '../../svgs/HumanBodySVG';
import UserGroupsSVG from '../../svgs/UserGroupSVG';
import AirFlowSVG from '../../svgs/AirFlowSVG';
import { Link } from 'react-router-dom';
import ChatBubble from './ChatBubble';

function UserGroups({ aqValue = 'low' }: { aqValue?: string }) {
  const [activeSVG, setActiveSVG] = useState(1);
  const [showButtonDescription, setShowButtonDescription] = useState(true);

  const aqMessageValue = aqMessage[aqValue];

  const handleSVGClick = (svgId: any) => {
    setActiveSVG(svgId);
    setShowButtonDescription(false);
  };

  return (
    <>
      {userGroupInfoLow[activeSVG].id > 1 ? (
        <div
          className="mt-2 badge badge-lg text-2xl  text-white font-light pb-[0.8em] pt-[0.7em]"
          style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
        >
          {aqMessageValue.userGroupInfo[activeSVG].name}
        </div>
      ) : (
        <div
          className="mt-2 badge badge-lg text-2xl  text-white font-light  px-[0.65em] pb-[0.8em] pt-[0.7em]"
          style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
        >
          Generell befolkning
        </div>
      )}

      <div className="relative flex justify-center items-center">
        {showButtonDescription && (
          <svg
            className="absolute mb-40 mr-60"
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="70"
            viewBox="0 0 90 47"
            fill="none"
          >
            <path
              d="M0.4375 7.95312L0.203125 7.73438C0.276042 7.65104 0.375 7.5625 0.5 7.46875C0.635417 7.375 0.755208 7.32292 0.859375 7.3125C0.953125 7.29167 1.11979 7.27604 1.35938 7.26562C1.60938 7.24479 1.86979 7.21875 2.14062 7.1875C2.41146 7.15625 2.66667 7.13542 2.90625 7.125C3.15625 7.11458 3.33333 7.10938 3.4375 7.10938C3.60417 7.10938 3.85417 7.10417 4.1875 7.09375C4.53125 7.08333 4.92188 7.07812 5.35938 7.07812C5.79688 7.06771 6.25521 7.0625 6.73438 7.0625C7.21354 7.05208 7.67188 7.04688 8.10938 7.04688C8.54688 7.03646 8.9375 7.03125 9.28125 7.03125C9.625 7.02083 9.88021 7.01562 10.0469 7.01562V7.53125C9.94271 7.53125 9.77604 7.53646 9.54688 7.54688C9.31771 7.55729 9.0625 7.57292 8.78125 7.59375C8.5 7.60417 8.20312 7.61979 7.89062 7.64062C7.58854 7.65104 7.29688 7.66146 7.01562 7.67188C6.73438 7.68229 6.48438 7.69792 6.26562 7.71875C6.04688 7.72917 5.88542 7.73438 5.78125 7.73438C5.71875 7.73438 5.61458 7.75 5.46875 7.78125C5.33333 7.80208 5.18229 7.82292 5.01562 7.84375C4.85938 7.85417 4.70833 7.875 4.5625 7.90625C4.42708 7.9375 4.33333 7.95312 4.28125 7.95312C4.28125 8.00521 4.27604 8.10938 4.26562 8.26562C4.26562 8.42188 4.26042 8.58333 4.25 8.75C4.25 8.91667 4.25 9.07812 4.25 9.23438V9.54688C4.25 10.1719 4.27604 10.7865 4.32812 11.3906C4.38021 11.9844 4.43229 12.5833 4.48438 13.1875C4.54688 13.7812 4.60417 14.3802 4.65625 14.9844C4.70833 15.5885 4.73438 16.1979 4.73438 16.8125C4.73438 16.8646 4.73438 16.9323 4.73438 17.0156C4.73438 17.099 4.72917 17.1823 4.71875 17.2656C4.71875 17.3385 4.71875 17.4062 4.71875 17.4688L4.70312 17.5625L4.28125 18C4.14583 17.9375 4.04688 17.8438 3.98438 17.7188C3.93229 17.5938 3.89583 17.4583 3.875 17.3125C3.86458 17.1667 3.85938 17.026 3.85938 16.8906C3.85938 16.7448 3.85938 16.6198 3.85938 16.5156C3.84896 16.3385 3.82812 16.1094 3.79688 15.8281C3.77604 15.5365 3.75 15.1979 3.71875 14.8125C3.69792 14.4271 3.66667 14.0156 3.625 13.5781C3.59375 13.1406 3.55729 12.6927 3.51562 12.2344C3.48438 11.776 3.45312 11.3281 3.42188 10.8906C3.40104 10.4427 3.375 10.0312 3.34375 9.65625C3.3125 9.27083 3.28125 8.93229 3.25 8.64062C3.22917 8.34896 3.21354 8.11979 3.20312 7.95312H0.4375ZM10.9375 13.1406V10.8594C10.9375 10.7969 10.9427 10.7448 10.9531 10.7031C10.9635 10.651 10.9844 10.6094 11.0156 10.5781C11.0469 10.5365 11.099 10.5104 11.1719 10.5C11.3177 10.5938 11.4167 10.7292 11.4688 10.9062C11.5208 11.0729 11.5625 11.2448 11.5938 11.4219C11.625 11.5885 11.6667 11.75 11.7188 11.9062C11.7812 12.0521 11.8802 12.151 12.0156 12.2031C12.1927 11.901 12.3698 11.6198 12.5469 11.3594C12.724 11.099 12.9219 10.8698 13.1406 10.6719C13.3698 10.474 13.6198 10.3229 13.8906 10.2188C14.1615 10.1146 14.4844 10.0625 14.8594 10.0625C15.0781 10.0625 15.3021 10.0833 15.5312 10.125C15.7708 10.1667 15.9844 10.2396 16.1719 10.3438C16.3698 10.4479 16.5312 10.5938 16.6562 10.7812C16.7812 10.9583 16.8438 11.1823 16.8438 11.4531C16.6354 11.4531 16.4479 11.4167 16.2812 11.3438C16.125 11.2604 15.9688 11.1719 15.8125 11.0781C15.6562 10.9844 15.4896 10.901 15.3125 10.8281C15.1354 10.7448 14.9271 10.7031 14.6875 10.7031C14.375 10.7031 14.0938 10.7865 13.8438 10.9531C13.5938 11.1094 13.3698 11.3229 13.1719 11.5938C12.974 11.8646 12.8021 12.1771 12.6562 12.5312C12.5104 12.8854 12.3802 13.2604 12.2656 13.6562C12.1615 14.0521 12.0781 14.4531 12.0156 14.8594C11.9531 15.2552 11.901 15.6406 11.8594 16.0156C11.8177 16.3802 11.7865 16.7188 11.7656 17.0312C11.7552 17.3438 11.75 17.599 11.75 17.7969H11.125C11.0833 17.5156 11.0521 17.1927 11.0312 16.8281C11.0104 16.4531 10.9948 16.0625 10.9844 15.6562C10.974 15.2396 10.9635 14.8177 10.9531 14.3906C10.9427 13.9635 10.9375 13.5469 10.9375 13.1406ZM15.9688 22.5938C15.9688 22.5729 15.9896 22.4948 16.0312 22.3594C16.0625 22.224 16.1042 22.0781 16.1562 21.9219C16.2083 21.776 16.2656 21.6406 16.3281 21.5156C16.3906 21.3906 16.4583 21.3281 16.5312 21.3281C16.5312 21.8073 16.6198 22.2604 16.7969 22.6875C16.974 23.125 17.2135 23.5052 17.5156 23.8281C17.8281 24.151 18.1927 24.401 18.6094 24.5781C19.0365 24.7656 19.4896 24.8594 19.9688 24.8594C20.4062 24.8594 20.776 24.7708 21.0781 24.5938C21.3802 24.4271 21.6302 24.1979 21.8281 23.9062C22.026 23.6146 22.1771 23.2865 22.2812 22.9219C22.3958 22.5573 22.4792 22.1771 22.5312 21.7812C22.5833 21.3958 22.6146 21.0156 22.625 20.6406C22.6354 20.276 22.6406 19.9375 22.6406 19.625C22.6406 19.5208 22.6354 19.3646 22.625 19.1562C22.625 18.9583 22.625 18.7604 22.625 18.5625C22.625 18.3646 22.625 18.1875 22.625 18.0312C22.625 17.8854 22.625 17.8073 22.625 17.7969C22.625 17.7552 22.6146 17.6562 22.5938 17.5C22.5833 17.3438 22.5625 17.1771 22.5312 17C22.5104 16.8125 22.4896 16.6354 22.4688 16.4688C22.4479 16.3021 22.4323 16.1771 22.4219 16.0938C22.4115 16.0521 22.3958 15.9792 22.375 15.875C22.3646 15.7708 22.3438 15.6615 22.3125 15.5469C22.2812 15.4323 22.2396 15.3229 22.1875 15.2188C22.1354 15.1146 22.0677 15.0417 21.9844 15C21.8594 15.25 21.6823 15.5156 21.4531 15.7969C21.2344 16.0677 20.9792 16.3229 20.6875 16.5625C20.4062 16.7917 20.1094 16.9844 19.7969 17.1406C19.4948 17.2969 19.1875 17.375 18.875 17.375C18.6354 17.375 18.4323 17.3125 18.2656 17.1875C18.1094 17.0521 17.9792 16.8854 17.875 16.6875C17.7812 16.4896 17.7031 16.2604 17.6406 16C17.5885 15.7396 17.5521 15.4844 17.5312 15.2344C17.5104 14.974 17.4948 14.7344 17.4844 14.5156C17.4844 14.2865 17.4844 14.099 17.4844 13.9531C17.4844 13.7031 17.5052 13.4271 17.5469 13.125C17.5885 12.8229 17.6354 12.5104 17.6875 12.1875C17.75 11.8646 17.8073 11.5469 17.8594 11.2344C17.9219 10.9115 17.9792 10.6146 18.0312 10.3438C18.1146 10.1771 18.224 10.0938 18.3594 10.0938C18.3698 10.0938 18.3854 10.099 18.4062 10.1094C18.4375 10.1094 18.4583 10.1094 18.4688 10.1094C18.4688 10.2031 18.4635 10.375 18.4531 10.625C18.4531 10.8646 18.4479 11.1406 18.4375 11.4531C18.4271 11.7656 18.4115 12.1042 18.3906 12.4688C18.3802 12.8229 18.3698 13.1562 18.3594 13.4688C18.3594 13.7812 18.3542 14.0573 18.3438 14.2969C18.3438 14.5365 18.349 14.7031 18.3594 14.7969C18.3594 14.901 18.3646 15.0521 18.375 15.25C18.3854 15.4375 18.4115 15.625 18.4531 15.8125C18.4948 16 18.5573 16.1667 18.6406 16.3125C18.7344 16.4583 18.875 16.5312 19.0625 16.5312C19.2188 16.5312 19.3958 16.5156 19.5938 16.4844C19.7917 16.4531 19.9427 16.3906 20.0469 16.2969C20.1927 16.1719 20.3698 16.0104 20.5781 15.8125C20.7865 15.6042 20.9844 15.3958 21.1719 15.1875C21.3594 14.9792 21.5208 14.7969 21.6562 14.6406C21.8021 14.4844 21.875 14.3906 21.875 14.3594L22.2031 9.70312C22.2031 9.66146 22.2188 9.625 22.25 9.59375C22.2812 9.5625 22.3177 9.54167 22.3594 9.53125C22.4115 9.51042 22.4583 9.49479 22.5 9.48438C22.5521 9.47396 22.599 9.46875 22.6406 9.46875C22.776 9.46875 22.875 9.51562 22.9375 9.60938C23.0104 9.69271 23.0885 9.79688 23.1719 9.92188C23.0885 10.6615 23.0625 11.4531 23.0938 12.2969C23.125 13.1302 23.1719 13.974 23.2344 14.8281C23.2969 15.6719 23.3594 16.5156 23.4219 17.3594C23.4844 18.1927 23.5156 18.9792 23.5156 19.7188C23.5156 19.8021 23.5156 19.9531 23.5156 20.1719C23.5156 20.401 23.5104 20.6406 23.5 20.8906C23.5 21.1406 23.4948 21.375 23.4844 21.5938C23.474 21.8229 23.4688 21.9792 23.4688 22.0625C23.4271 22.5 23.3073 22.9323 23.1094 23.3594C22.9115 23.7969 22.6562 24.1927 22.3438 24.5469C22.0312 24.901 21.6667 25.1875 21.25 25.4062C20.8438 25.625 20.4062 25.7344 19.9375 25.7344C19.7292 25.7344 19.4792 25.6927 19.1875 25.6094C18.9062 25.5365 18.6198 25.4271 18.3281 25.2812C18.0365 25.1458 17.75 24.9792 17.4688 24.7812C17.1875 24.5938 16.9375 24.3854 16.7188 24.1562C16.5 23.9271 16.3229 23.6771 16.1875 23.4062C16.0417 23.1458 15.9688 22.875 15.9688 22.5938ZM25.7812 13.2656C25.7396 13.2656 25.6875 13.2708 25.625 13.2812L25.5156 13.2969L25.0938 16.9375C25.0729 17.0625 25.0365 17.1667 24.9844 17.25C24.9323 17.3229 24.8646 17.3802 24.7812 17.4219C24.7083 17.4635 24.6198 17.4896 24.5156 17.5C24.4115 17.5104 24.3021 17.5156 24.1875 17.5156C24.1875 17.1719 24.2031 16.8594 24.2344 16.5781C24.276 16.2969 24.3438 15.9896 24.4375 15.6562V7.25C24.5 7.25 24.5677 7.27083 24.6406 7.3125C24.724 7.34375 24.7969 7.39062 24.8594 7.45312C24.9219 7.50521 24.974 7.55729 25.0156 7.60938C25.0677 7.66146 25.0938 7.70312 25.0938 7.73438L25.5156 12.3281L30.0156 9.65625H30.5C30.5 9.86458 30.4115 10.0625 30.2344 10.25C30.0677 10.4271 29.849 10.6042 29.5781 10.7812C29.3073 10.9479 29.0104 11.1042 28.6875 11.25C28.3646 11.3958 28.0573 11.5417 27.7656 11.6875C27.4844 11.8229 27.2292 11.9583 27 12.0938C26.7812 12.2188 26.6406 12.3385 26.5781 12.4531C26.9323 12.6823 27.2396 12.9688 27.5 13.3125C27.7604 13.6458 28 13.9948 28.2188 14.3594C28.4479 14.724 28.6719 15.0885 28.8906 15.4531C29.1094 15.8177 29.3594 16.1406 29.6406 16.4219C29.9323 16.7031 30.2604 16.9375 30.625 17.125C30.9896 17.3021 31.4375 17.3906 31.9688 17.3906C32.1042 17.3906 32.224 17.3646 32.3281 17.3125C32.4323 17.2604 32.5365 17.2031 32.6406 17.1406C32.7448 17.0781 32.849 17.0208 32.9531 16.9688C33.0573 16.9167 33.1771 16.8906 33.3125 16.8906C33.3125 17.1198 33.2552 17.3073 33.1406 17.4531C33.0365 17.599 32.9062 17.7188 32.75 17.8125C32.5938 17.8958 32.4167 17.9531 32.2188 17.9844C32.0312 18.0156 31.8438 18.0312 31.6562 18.0312C31.1354 18.0312 30.6823 17.9635 30.2969 17.8281C29.9219 17.6823 29.5938 17.5 29.3125 17.2812C29.0312 17.0625 28.7917 16.8125 28.5938 16.5312C28.3958 16.2396 28.2135 15.9479 28.0469 15.6562C27.8802 15.3542 27.7188 15.0573 27.5625 14.7656C27.4167 14.474 27.2604 14.2188 27.0938 14C26.9271 13.7812 26.7396 13.6042 26.5312 13.4688C26.3229 13.3333 26.0729 13.2656 25.7812 13.2656ZM35.4062 13.2656C35.3646 13.2656 35.3125 13.2708 35.25 13.2812L35.1406 13.2969L34.7188 16.9375C34.6979 17.0625 34.6615 17.1667 34.6094 17.25C34.5573 17.3229 34.4896 17.3802 34.4062 17.4219C34.3333 17.4635 34.2448 17.4896 34.1406 17.5C34.0365 17.5104 33.9271 17.5156 33.8125 17.5156C33.8125 17.1719 33.8281 16.8594 33.8594 16.5781C33.901 16.2969 33.9688 15.9896 34.0625 15.6562V7.25C34.125 7.25 34.1927 7.27083 34.2656 7.3125C34.349 7.34375 34.4219 7.39062 34.4844 7.45312C34.5469 7.50521 34.599 7.55729 34.6406 7.60938C34.6927 7.66146 34.7188 7.70312 34.7188 7.73438L35.1406 12.3281L39.6406 9.65625H40.125C40.125 9.86458 40.0365 10.0625 39.8594 10.25C39.6927 10.4271 39.474 10.6042 39.2031 10.7812C38.9323 10.9479 38.6354 11.1042 38.3125 11.25C37.9896 11.3958 37.6823 11.5417 37.3906 11.6875C37.1094 11.8229 36.8542 11.9583 36.625 12.0938C36.4062 12.2188 36.2656 12.3385 36.2031 12.4531C36.5573 12.6823 36.8646 12.9688 37.125 13.3125C37.3854 13.6458 37.625 13.9948 37.8438 14.3594C38.0729 14.724 38.2969 15.0885 38.5156 15.4531C38.7344 15.8177 38.9844 16.1406 39.2656 16.4219C39.5573 16.7031 39.8854 16.9375 40.25 17.125C40.6146 17.3021 41.0625 17.3906 41.5938 17.3906C41.7292 17.3906 41.849 17.3646 41.9531 17.3125C42.0573 17.2604 42.1615 17.2031 42.2656 17.1406C42.3698 17.0781 42.474 17.0208 42.5781 16.9688C42.6823 16.9167 42.8021 16.8906 42.9375 16.8906C42.9375 17.1198 42.8802 17.3073 42.7656 17.4531C42.6615 17.599 42.5312 17.7188 42.375 17.8125C42.2188 17.8958 42.0417 17.9531 41.8438 17.9844C41.6562 18.0156 41.4688 18.0312 41.2812 18.0312C40.7604 18.0312 40.3073 17.9635 39.9219 17.8281C39.5469 17.6823 39.2188 17.5 38.9375 17.2812C38.6562 17.0625 38.4167 16.8125 38.2188 16.5312C38.0208 16.2396 37.8385 15.9479 37.6719 15.6562C37.5052 15.3542 37.3438 15.0573 37.1875 14.7656C37.0417 14.474 36.8854 14.2188 36.7188 14C36.5521 13.7812 36.3646 13.6042 36.1562 13.4688C35.9479 13.3333 35.6979 13.2656 35.4062 13.2656ZM59.3594 10.7188C58.8802 10.75 58.4844 10.8958 58.1719 11.1562C57.8698 11.4167 57.625 11.7448 57.4375 12.1406C57.2604 12.526 57.125 12.9531 57.0312 13.4219C56.9479 13.8906 56.8906 14.3542 56.8594 14.8125C56.8385 15.2708 56.8333 15.7083 56.8438 16.125C56.8646 16.5312 56.8906 16.8698 56.9219 17.1406L56.0938 17.0938C56.0938 17.0417 56.0885 16.9115 56.0781 16.7031C56.0677 16.4844 56.0521 16.2292 56.0312 15.9375C56.0104 15.6354 55.9896 15.3177 55.9688 14.9844C55.9583 14.651 55.9427 14.3385 55.9219 14.0469C55.9115 13.7448 55.8958 13.4896 55.875 13.2812C55.8646 13.0729 55.8542 12.9375 55.8438 12.875C55.8229 12.7188 55.7865 12.5208 55.7344 12.2812C55.6823 12.0312 55.599 11.7917 55.4844 11.5625C55.3802 11.3333 55.25 11.1354 55.0938 10.9688C54.9479 10.8021 54.776 10.7188 54.5781 10.7188C54.3385 10.7188 54.125 10.776 53.9375 10.8906C53.75 10.9948 53.5885 11.1406 53.4531 11.3281C53.3177 11.5052 53.1979 11.7135 53.0938 11.9531C53 12.1823 52.9219 12.4167 52.8594 12.6562C52.7969 12.8958 52.7448 13.1302 52.7031 13.3594C52.6719 13.5781 52.651 13.7708 52.6406 13.9375C52.6302 14.0208 52.6198 14.1458 52.6094 14.3125C52.599 14.4792 52.5833 14.6719 52.5625 14.8906C52.5521 15.099 52.5365 15.3177 52.5156 15.5469C52.5052 15.776 52.4896 16 52.4688 16.2188C52.4583 16.4271 52.4479 16.6146 52.4375 16.7812C52.4375 16.9479 52.4375 17.0677 52.4375 17.1406H51.7812C51.75 16.5781 51.7188 16.0885 51.6875 15.6719C51.6562 15.2448 51.6302 14.849 51.6094 14.4844C51.599 14.1198 51.5885 13.75 51.5781 13.375C51.5677 13 51.5625 12.5833 51.5625 12.125V11.8906C51.5625 11.776 51.5625 11.6562 51.5625 11.5312C51.5729 11.4062 51.5781 11.2917 51.5781 11.1875V10.9375C51.6094 10.8229 51.6615 10.7083 51.7344 10.5938C51.8073 10.4688 51.901 10.375 52.0156 10.3125C52.0365 10.3125 52.0677 10.3438 52.1094 10.4062C52.1615 10.4583 52.1927 10.4948 52.2031 10.5156C52.224 10.5573 52.2448 10.6302 52.2656 10.7344C52.2865 10.8385 52.3073 10.9479 52.3281 11.0625C52.349 11.1667 52.3698 11.2708 52.3906 11.375C52.4219 11.4792 52.4375 11.5521 52.4375 11.5938C52.4375 11.6042 52.4479 11.6094 52.4688 11.6094C52.5 11.6094 52.5208 11.6094 52.5312 11.6094C52.5625 11.6094 52.6146 11.5729 52.6875 11.5C52.7604 11.4167 52.849 11.3229 52.9531 11.2188C53.0677 11.1042 53.1927 10.9792 53.3281 10.8438C53.4635 10.7083 53.6042 10.5885 53.75 10.4844C53.8958 10.3698 54.0469 10.2708 54.2031 10.1875C54.3594 10.1042 54.5208 10.0625 54.6875 10.0625C54.9062 10.0625 55.1094 10.1198 55.2969 10.2344C55.4844 10.349 55.651 10.4896 55.7969 10.6562C55.9427 10.8229 56.0729 11.0104 56.1875 11.2188C56.3021 11.4271 56.4062 11.6198 56.5 11.7969C56.8542 11.2031 57.3021 10.7656 57.8438 10.4844C58.3958 10.2031 59.0156 10.0625 59.7031 10.0625C60.151 10.2292 60.5052 10.4792 60.7656 10.8125C61.026 11.1458 61.224 11.526 61.3594 11.9531C61.5052 12.3802 61.599 12.8333 61.6406 13.3125C61.6927 13.7917 61.7292 14.2604 61.75 14.7188C61.7812 15.1771 61.8177 15.599 61.8594 15.9844C61.901 16.3594 61.9844 16.6615 62.1094 16.8906C62.2344 17.1198 62.4167 17.2552 62.6562 17.2969C62.9062 17.3385 63.25 17.2448 63.6875 17.0156C63.6458 17.1094 63.625 17.1979 63.625 17.2812C63.6354 17.3646 63.6458 17.4375 63.6562 17.5C63.6667 17.5625 63.6615 17.6094 63.6406 17.6406C63.6302 17.6719 63.5833 17.6875 63.5 17.6875C63.0312 17.9375 62.6458 18.0208 62.3438 17.9375C62.0417 17.8542 61.7969 17.6667 61.6094 17.375C61.4323 17.0833 61.2917 16.7083 61.1875 16.25C61.0833 15.7812 61 15.2917 60.9375 14.7812C60.875 14.2604 60.8125 13.7448 60.75 13.2344C60.6875 12.724 60.599 12.276 60.4844 11.8906C60.3802 11.4948 60.2396 11.1875 60.0625 10.9688C59.8958 10.7396 59.6615 10.6562 59.3594 10.7188ZM63.75 13.2969C63.75 12.8177 63.8021 12.375 63.9062 11.9688C64.0208 11.5521 64.1979 11.1979 64.4375 10.9062C64.6771 10.6146 64.9844 10.3854 65.3594 10.2188C65.7448 10.0521 66.1979 9.96875 66.7188 9.96875C67.0208 9.96875 67.2812 9.99479 67.5 10.0469C67.7292 10.099 67.9167 10.1927 68.0625 10.3281C68.2188 10.4531 68.3333 10.625 68.4062 10.8438C68.4792 11.0521 68.5156 11.3125 68.5156 11.625C68.5156 11.9479 68.4479 12.224 68.3125 12.4531C68.1875 12.6719 68.0156 12.8542 67.7969 13C67.5781 13.1458 67.3333 13.2552 67.0625 13.3281C66.7917 13.401 66.5156 13.4375 66.2344 13.4375C66.1823 13.4375 66.1094 13.4479 66.0156 13.4688C65.9219 13.4896 65.8125 13.5156 65.6875 13.5469C65.5729 13.5677 65.4531 13.5938 65.3281 13.625C65.2031 13.6562 65.0833 13.6771 64.9688 13.6875C64.8646 13.6875 64.776 13.6823 64.7031 13.6719C64.6406 13.651 64.6094 13.6042 64.6094 13.5312C64.6094 13.5208 64.6302 13.4896 64.6719 13.4375C64.724 13.375 64.776 13.3125 64.8281 13.25C64.8802 13.1875 64.9271 13.125 64.9688 13.0625L65.0469 12.9844C65.3281 12.9427 65.6302 12.9115 65.9531 12.8906C66.2865 12.8594 66.5885 12.8021 66.8594 12.7188C67.1406 12.6354 67.375 12.5 67.5625 12.3125C67.75 12.125 67.8438 11.849 67.8438 11.4844C67.8438 11.2969 67.8125 11.151 67.75 11.0469C67.6979 10.9323 67.6146 10.8438 67.5 10.7812C67.3958 10.7188 67.2708 10.6771 67.125 10.6562C66.9792 10.6354 66.8229 10.625 66.6562 10.625C66.2917 10.625 65.974 10.6875 65.7031 10.8125C65.4427 10.9271 65.2344 11.0938 65.0781 11.3125C64.9219 11.5312 64.8021 11.7917 64.7188 12.0938C64.6458 12.3958 64.6094 12.7292 64.6094 13.0938C64.6094 13.3229 64.6146 13.5938 64.625 13.9062C64.6354 14.2083 64.6615 14.5156 64.7031 14.8281C64.7552 15.1406 64.8229 15.4531 64.9062 15.7656C64.9896 16.0677 65.099 16.3385 65.2344 16.5781C65.3802 16.8177 65.5469 17.0104 65.7344 17.1562C65.9323 17.3021 66.1667 17.375 66.4375 17.375C66.4896 17.375 66.5677 17.3646 66.6719 17.3438C66.776 17.3229 66.8802 17.3021 66.9844 17.2812C67.099 17.25 67.2031 17.224 67.2969 17.2031C67.401 17.1823 67.4792 17.1615 67.5312 17.1406C67.6146 17.1094 67.7396 17.0573 67.9062 16.9844C68.0729 16.9115 68.2604 16.8281 68.4688 16.7344C68.6875 16.6406 68.9115 16.5365 69.1406 16.4219C69.3698 16.3073 69.5885 16.2031 69.7969 16.1094C70.0052 16.0156 70.1927 15.9271 70.3594 15.8438C70.5365 15.75 70.6615 15.6875 70.7344 15.6562C70.7448 15.6667 70.75 15.6979 70.75 15.75C70.75 15.8021 70.75 15.8385 70.75 15.8594C70.75 16.0469 70.6562 16.2344 70.4688 16.4219C70.2917 16.599 70.0625 16.7708 69.7812 16.9375C69.5 17.0938 69.1823 17.2396 68.8281 17.375C68.474 17.5104 68.1354 17.625 67.8125 17.7188C67.4896 17.8125 67.1927 17.8906 66.9219 17.9531C66.651 18.0052 66.4479 18.0312 66.3125 18.0312C65.9896 18.0312 65.6979 17.9583 65.4375 17.8125C65.1771 17.6667 64.9531 17.4688 64.7656 17.2188C64.5781 16.9688 64.4167 16.6823 64.2812 16.3594C64.1458 16.0365 64.0365 15.7031 63.9531 15.3594C63.8802 15.0156 63.8281 14.6667 63.7969 14.3125C63.7656 13.9479 63.75 13.6094 63.75 13.2969ZM70.9688 22.7188C70.9688 22.5729 70.9792 22.4583 71 22.375C71.0312 22.2917 71.099 22.1875 71.2031 22.0625C71.4948 22.5938 71.8438 22.9792 72.25 23.2188C72.6562 23.4688 73.1667 23.5938 73.7812 23.5938C73.8021 23.5938 73.8542 23.5885 73.9375 23.5781C74.0208 23.5781 74.1094 23.5729 74.2031 23.5625C74.2969 23.5625 74.3802 23.5625 74.4531 23.5625C74.5365 23.5625 74.5938 23.5625 74.625 23.5625C74.9792 23.2812 75.2552 22.9479 75.4531 22.5625C75.651 22.1875 75.7969 21.7865 75.8906 21.3594C75.9948 20.9323 76.0625 20.4948 76.0938 20.0469C76.125 19.599 76.1406 19.1667 76.1406 18.75C76.1406 18.5208 76.1354 18.3125 76.125 18.125C76.125 17.9375 76.1146 17.7552 76.0938 17.5781C76.0729 17.401 76.0469 17.2135 76.0156 17.0156C75.9844 16.8073 75.9427 16.5677 75.8906 16.2969L75.8594 16.2812C75.8385 16.2708 75.8177 16.2656 75.7969 16.2656C75.7135 16.2656 75.5729 16.3333 75.375 16.4688C75.1875 16.6042 74.9635 16.7604 74.7031 16.9375C74.4427 17.1042 74.151 17.2552 73.8281 17.3906C73.5156 17.526 73.1979 17.5938 72.875 17.5938C72.7396 17.5938 72.599 17.5781 72.4531 17.5469C72.3177 17.5052 72.1927 17.4479 72.0781 17.375C71.974 17.3021 71.8802 17.2135 71.7969 17.1094C71.7135 16.9948 71.6562 16.8646 71.625 16.7188C71.625 16.6771 71.625 16.6042 71.625 16.5C71.625 16.3854 71.6198 16.2656 71.6094 16.1406C71.6094 16.0156 71.6094 15.8958 71.6094 15.7812V15.5469C71.6094 15.2344 71.625 14.8958 71.6562 14.5312C71.6875 14.1667 71.7396 13.7969 71.8125 13.4219C71.8854 13.0365 71.9844 12.6667 72.1094 12.3125C72.2344 11.9479 72.3906 11.6302 72.5781 11.3594C72.776 11.0781 73.0052 10.8594 73.2656 10.7031C73.526 10.5365 73.8333 10.4531 74.1875 10.4531C74.6667 10.4531 75.125 10.5312 75.5625 10.6875C76 10.8438 76.375 11.1302 76.6875 11.5469C76.7292 12.0885 76.7656 12.6615 76.7969 13.2656C76.8385 13.8698 76.8698 14.474 76.8906 15.0781C76.9219 15.6823 76.9427 16.2708 76.9531 16.8438C76.974 17.4062 76.9844 17.9167 76.9844 18.375C76.9844 18.7604 76.974 19.1771 76.9531 19.625C76.9323 20.0729 76.8854 20.5156 76.8125 20.9531C76.7396 21.401 76.6302 21.8333 76.4844 22.25C76.3385 22.6667 76.1406 23.0365 75.8906 23.3594C75.6406 23.6823 75.3333 23.9375 74.9688 24.125C74.6146 24.3125 74.1771 24.4062 73.6562 24.4062C73.4583 24.4062 73.2031 24.3698 72.8906 24.2969C72.5885 24.2344 72.2917 24.1302 72 23.9844C71.7188 23.849 71.474 23.6719 71.2656 23.4531C71.0677 23.2448 70.9688 23 70.9688 22.7188ZM72.5 16.5156C72.5208 16.5469 72.5573 16.5885 72.6094 16.6406C72.6615 16.6927 72.7188 16.7396 72.7812 16.7812C72.8542 16.8229 72.9167 16.8594 72.9688 16.8906C73.0312 16.9219 73.0833 16.9375 73.125 16.9375C73.375 16.9375 73.6146 16.8594 73.8438 16.7031C74.0833 16.5469 74.3021 16.3385 74.5 16.0781C74.7083 15.8177 74.8958 15.526 75.0625 15.2031C75.2292 14.8698 75.3698 14.5312 75.4844 14.1875C75.599 13.8438 75.6875 13.5156 75.75 13.2031C75.8125 12.8802 75.8438 12.5885 75.8438 12.3281C75.8438 12.099 75.8021 11.8958 75.7188 11.7188C75.6458 11.5417 75.5365 11.3906 75.3906 11.2656C75.2448 11.1302 75.0729 11.0365 74.875 10.9844C74.6771 10.9323 74.4583 10.9062 74.2188 10.9062C73.9792 10.9062 73.7656 10.9948 73.5781 11.1719C73.401 11.3385 73.25 11.5625 73.125 11.8438C73 12.1146 72.8906 12.4271 72.7969 12.7812C72.7135 13.125 72.6458 13.4635 72.5938 13.7969C72.5417 14.1198 72.5052 14.4271 72.4844 14.7188C72.474 15.0104 72.4688 15.2448 72.4688 15.4219C72.4688 15.474 72.4688 15.5521 72.4688 15.6562C72.4688 15.75 72.4688 15.8542 72.4688 15.9688C72.4792 16.0729 72.4844 16.1771 72.4844 16.2812C72.4948 16.3854 72.5 16.4635 72.5 16.5156Z"
              fill="#3D4043"
            />
            <path
              d="M54.1044 25.5478C61.7582 27.6952 73.1515 22.3628 78.8719 29.8739C81.0071 32.6776 80.0982 36.3362 81.617 39.1965C83.7887 43.2864 83.7746 42.4549 85.356 38.212C85.5504 37.6902 88.8062 31.8754 88.2969 34.148C87.6196 37.1695 86.1608 42.8064 83.7419 44.8262C80.9575 47.1512 70.7734 38.3907 74.1873 39.6169"
              stroke="#3D4043"
              stroke-width="0.5"
              stroke-linecap="round"
            />
          </svg>
        )}
        <AirFlowSVG aqColor={aqMessageValue.color} />
        <div className="absolute left-40">
          <Link to="/learn" className="z-50">
            <button
              className="rounded-full bg-blue-800 text-white text-3xl px-4 py-2 hover:scale-105 transition-transform duration-300 font-extralight z-30"
              style={{ width: '200px', height: '200px', backgroundColor: '#fb5607' }}
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
          <ChatBubble aqMessageValue={aqMessageValue} aqMessageStatment={aqMessageValue.message} svg={activeSVG} />
        </div>
      </div>
    </>
  );
}

export default UserGroups;
