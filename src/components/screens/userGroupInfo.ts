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
        healthMessage: "Ved forverrede luftveis- eller hjerte- og karsymptomer, begrens utendørsaktivitet i forurensede områder.",
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Ingen bekymring for helse"
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "De med forverrede luftveis-symptomer bør vurdere å redusere aktivitet i forurensede områder."
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Ved forverrede symptomer, reduser utendørsaktivitet i forurensede områder."
    },
};

export const userGroupInfoHigh: UserGroupInfo = {
    1: {
        id: 1,
        name: "Generell befolkning",
        healthMessage: "Hvis du har hoste eller sår hals, bør du vurdere å redusere høy fysisk aktivitet i de mest forurensede uteområdene."
    },
    2: {
        id: 2, 
        name: "Gravide",
        healthMessage: "Er du gravid og har luftveis-symptomer bør du begrense oppholdstiden i de mest forurensede uteområdene."
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Personer med luftveis- eller hjerte- og karsykdom bør redusere høy fysisk aktivitet og begrense oppholdstiden i de mest forurensede uteområdene."
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Barn med luftveis-symptomer bør du begrense oppholdstiden i de mest forurensede uteområdene."
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Alvorlig luftveissykdom eller som opplever du forverring av din astma? Da bør redusere høy fysisk aktivitet og begrense oppholdstiden i de mest forurensede uteområdene."
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Alvorlig hjerte- og karsykdom? Da bør du redusere høy fysisk aktivitet og begrense oppholdstiden i de mest forurensede uteområdene."
    },

};


export const userGroupInfoVeryHigh: UserGroupInfo = {
    1: {
        id: 1,
        name: "Generell befolkning",
        healthMessage: "Reduser utendørs fysisk aktivitet og begrens oppholdstiden i de mest forurensede uteområdene, spesielt hvis du har symptomer som hoste ellers sår hals."
    },
    2: {
        id: 2, 
        name: "Gravide",
        healthMessage: "Reduser fysisk aktivitet og begrens oppholdstiden i de mest forurensede uteområdene."
    },
    3: {
        id: 3,
        name: "Eldre",
        healthMessage: "Reduser fysisk aktivitet og begrens oppholdstiden i de mest forurensede uteområdene."
    },
    4: {
        id: 4,
        name: "Barn",
        healthMessage: "Reduser fysisk aktivitet og begrens oppholdstiden i de mest forurensede uteområdene."
    },
    5: {
        id: 5,
        name: "Astmatikere og luftveisplager",
        healthMessage: "Bør ikke oppholde seg i de mest forurensede uteområdene."
    },
    6: {
        id: 6,
        name: "Hjerte- og karsykdommer",
        healthMessage: "Bør ikke oppholde seg i de mest forurensede uteområdene."
    },
 
};
