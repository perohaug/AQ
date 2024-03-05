import { userGroupInfoModerate , userGroupInfoLow } from "./userGroupInfo";

interface AQMessage {
    [key: string]: {
        color: string;
        message: string,
        userGroupInfo: typeof userGroupInfoLow;
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
            message: 'Dagen anbefales å nytes ute',
            userGroupInfo: userGroupInfoModerate,
        }
    }


