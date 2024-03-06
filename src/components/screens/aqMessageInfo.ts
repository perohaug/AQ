import { UserGroupInfo, userGroupInfoHigh, userGroupInfoLow, userGroupInfoModerate, userGroupInfoVeryHigh } from "./userGroupInfo";

interface AQMessage {
    [key: string]: {
        color: string;
        message: string,
        userGroupInfo: UserGroupInfo;
    };
}

// Define the array of AQ message colors
export const aqMessage: AQMessage = 
    {
        low: {
            color: '#A4E7ED',
            message: 'Nyt dagen ute!',
            userGroupInfo: userGroupInfoLow,
        },
        moderate: {
            color: '#FEA837',
            message: 'Nyt dagen ute, men det er moderat helserisiko for utsatte grupper',
            userGroupInfo: userGroupInfoModerate,
        },
        high: {
            color: '#EB6758',
            message: 'Nyt dagen ute, men det er betydelig helserisiko for utsatte grupper',
            userGroupInfo: userGroupInfoHigh,
        },
        veryhigh: {
            color: '#593E67',
            message: 'Nyt dagen ute, men det er alvorlig heleserisiko for sårbare grupper ',
            userGroupInfo: userGroupInfoVeryHigh,
        }
    }


