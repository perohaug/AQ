interface UserGroupInfo {
    [key: number]: {
        id: number, 
        name: string;
        healthMessage: string;
    };
}

const userGroupInfo: UserGroupInfo = {
    1: {
        id: 1,
        name: "Generell befolkning",
        healthMessage: "Health message for group 1"
    },
    2: {
        id: 2, 
        name: "Gravide og barn",
        healthMessage: "Health message for group 2"
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Health message for group 3"
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Health message for group 3"
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Health message for group 3"
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Health message for group 3"
    },
    7: {
        id: 7,
        name: "Toppidrett",
        healthMessage: "Health message for group 3"
    }
};
export default userGroupInfo;