interface UserGroupInfo {
    [key: number]: {
        id: number, 
        name: string;
        healthMessage: string;
    };
}

export const userGroupInfoLow: UserGroupInfo = {
    1: {
        id: 1,
        name: "Generell befolkning",
        healthMessage: "Low Health message for group 1"
    },
    2: {
        id: 2, 
        name: "Gravide og barn",
        healthMessage: "Low Health message for group 2"
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Low Health message for group 3"
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Low Health message for group 3"
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Low Health message for group 3"
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Low Health message for group 3"
    },
    7: {
        id: 7,
        name: "Toppidrett",
        healthMessage: "Health message for group 3"
    }
};


export const userGroupInfoModerate: UserGroupInfo = {
    1: {
        id: 1,
        name: "Generell befolkning",
        healthMessage: "Moderate Health message for group 1"
    },
    2: {
        id: 2, 
        name: "Gravide og barn",
        healthMessage: "Moderate Health message for group 2"
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Moderate Health message for group 3"
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Moderate Health message for group 3"
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Moderate Health message for group 3"
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Low Health message for group 3"
    },
    7: {
        id: 7,
        name: "Toppidrett",
        healthMessage: "Moderate message for group 3"
    }
};

