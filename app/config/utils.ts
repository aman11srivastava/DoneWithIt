import colors from "./colors";

export type menu = {
    title: string
    icon: {
        name: any
        backgroundColor: string
    }
    id: number,
    targetScreen: any
}

export const menuItems: menu[] = [
    {
        id: 1,
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
        targetScreen: ""
    },
    {
        id: 2,
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: "Messages"
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

export type RootStateStackList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
}

export type AppStateTabList = {
    Feed: undefined
    ListingEdit: undefined
    Account: undefined     
}

export type FeedStateStackList = {
    Listings: undefined
    ListingDetails: undefined
}

export type AccountStateStackList = {
    Account: undefined
    Messages: undefined
}