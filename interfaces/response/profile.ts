import { UserProfile } from "./shared";

export type StylerProfile = {
    userProfile: UserProfile;
};

export type StylerCrewInfo = {
    crewName: string;
    crewId: number;
    crewMembers: StylerProfile[];
};
