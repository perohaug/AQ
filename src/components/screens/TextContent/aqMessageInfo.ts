import { UserGroupInfo, userGroupInfoHigh, userGroupInfoLow, userGroupInfoModerate, userGroupInfoVeryHigh } from "./userGroupInfo";

interface AQMessage {
    [key: string]: {
        color: string;
        risk: string,
        message: string,
        userGroupInfo: UserGroupInfo;
    };

}
// 89c4f4, CFF9FB

// Define the array of AQ message colors
export const aqMessage: AQMessage = 
    {

        low: {
            color: '#9BE4E6',
            risk: 'Liten eller ingen helserisiko',
            message: 'Nyt dagen ute!',
            userGroupInfo: userGroupInfoLow,
        },
        moderate: {
            color: '#FEA837',
            risk: 'Moderat helserisiko',
            message: 'Nyt dagen ute, men for noen finnes det en liten helserisiko',
            userGroupInfo: userGroupInfoModerate,
        },
        high: {
            color: '#EB6758',
            risk: 'Høy helserisiko',
            message: 'Nyt dagen ute,  men for noen finnes det betydelig helserisiko',
            userGroupInfo: userGroupInfoHigh,
        },
        veryhigh: {
            color: '#593E67',
            risk: 'Svært høy helserisiko',
            message: 'Nyt dagen ute,  men for noen finnes det en alvorlig helserisiko',
            userGroupInfo: userGroupInfoVeryHigh,
        }
    }


