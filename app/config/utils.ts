import colors from "./colors";

export type menu = {
    title: string
    icon: {
        name: any
        backgroundColor: string
    }
    id: number
}

export const menuItems: menu[] = [
    {
        id: 1,
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        id: 2,
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },
];

export interface PickerItemCommonProps {
    onPress: (value: any) => void
}

export type RootStateParamsList = {
    Tweets: undefined
    TweetDetails: undefined
}

export type RootStateTabsList = {
    Feed: undefined
    Account: undefined
}