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
            color: '#CFF9FB',
            message: 'Nyt dagen ute!',
            userGroupInfo: userGroupInfoLow,
        },
        moderate: {
            color: '#FEA837',
            message: 'Nyt dagen ute, men for noen finnes det en liten helserisiko',
            userGroupInfo: userGroupInfoModerate,
        },
        high: {
            color: '#EB6758',
            message: 'Nyt dagen ute,  men for noen finnes det betydelig helserisiko',
            userGroupInfo: userGroupInfoHigh,
        },
        veryhigh: {
            color: '#593E67',
            message: 'Nyt dagen ute,  men for noen finnes det en alvorlig helserisiko',
            userGroupInfo: userGroupInfoVeryHigh,
        }
    }


