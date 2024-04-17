export interface UserGroupInfo {
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
        healthMessage: "Ingen eller liten mulighet for påvirkning av helse."
    },
    2: {
        id: 2, 
        name: "Gravide",
        healthMessage: "Ingen eller liten mulighet for påvirkning av helse for gravide."
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Ingen eller liten mulighet for påvirkning av helse for eldre."
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Ingen eller liten mulighet for påvirkning av helse for barn."
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Ingen bekymring for helse for de med astma eller luftveisplager."
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Ingen bekymring for helse for de med hjerte- og karsykdommer."
    },
};


export const userGroupInfoModerate: UserGroupInfo = {
    1: {
        id: 1,
        name: "Generell befolkning",
        healthMessage: "Ingen eller liten mulighet for påvirkning av helse."
    },
    2: {
        id: 2, 
        name: "Gravide",
        healthMessage: "Ingen eller liten mulighet for påvirkning av helse for gravide."
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Men eldre og forverrede symptomer i luftveiene eller i hjert- og karsystemet? Da bør du vurdere å redusere høy fysisk aktivitet i de mest forurensede områdene.",
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Ingen eller liten mulighet for påvirkning av helse for barn."
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Men astma eller luftveisplager og forverrede luftveis-symptomer? Da bør du vurdere å redusere høy fysisk aktivitet i de mest forurensede områdene."
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Men hjerte- eller karsykdom og forverrede symptomer? Da bør du vurdere å redusere høy fysisk aktivitet i de mest forurensede områdene."
    },
};

export const userGroupInfoHigh: UserGroupInfo = {
    1: {
        id: 1,
        name: "Generell befolkning",
        healthMessage: "Men hoste eller sår hals? Da bør du vurdere å redusere høy fysisk aktivitet i de mest forurensede områdene."
    },
    2: {
        id: 2, 
        name: "Gravide",
        healthMessage: "Men gravid og Luftveissymptomer? Da bør du begrense oppholdstiden i de mest forurensede områdene."
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Men eldre og luftveis- eller hjerte- og karsykdom? Da bør du redusere høy fysisk aktivitet og begrense oppholdstiden i de mest forurensede områdene."
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Men barn og luftveissymptomer? Da bør du begrense oppholdstiden i de mest forurensede områdene."
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Men alvorlig luftveissykdom eller forverring av astma? Da bør du redusere høy fysisk aktivitet og begrense oppholdstiden i de mest forurensede områdene."
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Men alvorlig hjerte- eller karsykdom? Da bør du redusere høy fysisk aktivitet og begrense oppholdstiden i de mest forurensede områdene."
    },

};


export const userGroupInfoVeryHigh: UserGroupInfo = {
    1: {
        id: 1,
        name: "Generell befolkning",
        healthMessage: "Men reduser utendørs fysisk aktivitet og begrens oppholdstiden i de mest forurensede områdene, spesielt hvis du har symptomer som hoste ellers sår hals."
    },
    2: {
        id: 2, 
        name: "Gravide",
        healthMessage: "Men gravid? Da bør du redusere fysisk aktivitet og begrense oppholdstiden i de mest forurensede områdene."
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Men eldre? Da bør du redusere fysisk aktivitet og begrense oppholdstiden i de mest forurensede områdene."
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Men barn? Da bør du redusere fysisk aktivitet og begrense oppholdstiden i de mest forurensede områdene."
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Men astmatiker eller luftveisplager? Da bør du ikke oppholde deg i de mest forurensede områdene."
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Men hjerte- eller karsykdom? Da bør du ikke oppholde deg i de mest forurensede uteområdene."
    },
 
};
