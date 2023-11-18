
export interface CreateVideo {
    title: string;
    author: string;
    availableResolutions?: RESOLUTIONS[];
}

export interface UpdateVideo extends CreateVideo {
    canBeDownloaded?: boolean;
    minAgeRestriction?: number | null;
    publicationDate?: string;
}

export interface Video extends UpdateVideo {
    id: number;
    createdAt: string;
}

export enum RESOLUTIONS {
    P144 = "P144",
    P240 = "P240",
    P360 = "P360",
    P480 = "P480",
    P720 = "P720",
    P1080 = "P1080",
    P1440 = "P1440",
    P2160 = "P2160"
}