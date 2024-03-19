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
        healthMessage: "Ingen bekymring for helse"
    },
    2: {
        id: 2, 
        name: "Gravide",
        healthMessage: "Ingen bekymring for helse"
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Ingen bekymring for helse"
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Ingen bekymring for helse"
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Ingen bekymring for helse"
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Ingen bekymring for helse"
    },
};


export const userGroupInfoModerate: UserGroupInfo = {
    1: {
        id: 1,
        name: "Generell befolkning",
        healthMessage: "Ingen bekymring for helse"
    },
    2: {
        id: 2, 
        name: "Gravide",
        healthMessage: "Ingen bekymring for helse"
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Ved forverrede symptomer i luftveiene  eller i hjert- og karsystemet, bør du vurdere å redusere høy fysisk aktvitet i de mest forurensede områdene.",
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Ingen bekymring for helse"
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Ved forverrede luftveis-symptomer, bør du vurdere å redusere høy fysisk aktivitet i de mest forurensede områdene."
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Ved forverrede symptomer, bør du vurdere å redusere høy fysisk aktivitet i de mest forurensede områdene."
    },
};

export const userGroupInfoHigh: UserGroupInfo = {
    1: {
        id: 1,
        name: "Generell befolkning",
        healthMessage: "Hoste eller sår hals? Da bør du vurdere å redusere høy fysisk aktivitet i de mest forurensede områdene."
    },
    2: {
        id: 2, 
        name: "Gravide",
        healthMessage: "Luftveissymptomer? Da bør du begrense oppholdstiden i de mest forurensede områdene."
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Luftveis- eller hjerte- og karsykdom? Da bør du redusere høy fysisk aktivitet og begrense oppholdstiden i de mest forurensede områdene."
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Luftveissymptomer? Da bør du begrense oppholdstiden i de mest forurensede områdene."
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Alvorlig luftveissykdom eller forverring av astma? Da bør du redusere høy fysisk aktivitet og begrense oppholdstiden i de mest forurensede områdene."
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Alvorlig hjerte- og karsykdom? Da bør du redusere høy fysisk aktivitet og begrense oppholdstiden i de mest forurensede områdene."
    },

};


export const userGroupInfoVeryHigh: UserGroupInfo = {
    1: {
        id: 1,
        name: "Generell befolkning",
        healthMessage: "Reduser utendørs fysisk aktivitet og begrens oppholdstiden i de mest forurensede områdene, spesielt hvis du har symptomer som hoste ellers sår hals."
    },
    2: {
        id: 2, 
        name: "Gravide",
        healthMessage: "Reduser fysisk aktivitet og begrens oppholdstiden i de mest forurensede områdene."
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Reduser fysisk aktivitet og begrens oppholdstiden i de mest forurensede områdene."
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Reduser fysisk aktivitet og begrens oppholdstiden i de mest forurensede områdene."
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Du bør ikke oppholde deg i de mest forurensede områdene."
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Du bør ikke oppholde deg i de mest forurensede uteområdene."
    },
 
};
