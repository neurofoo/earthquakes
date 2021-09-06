export interface Data {
    type: string;
    metadata: {
        generated: number;
        url: string;
        title: string;
        status: number;
        api: string;
        count: number;
    };
    features: Feature[];
    bbox: number[];
}

export interface Feature {
    type: string;
    properties: {
        mag: number;
        place: string;
        time: number;
        updated: number;
        tz: number;
        url: string;
        detail: string;
        felt: any;
        cdi: any;
        mmi: any;
        alert: any;
        status: string;
        tsunami: number;
        sig: number;
        net: string;
        code: string;
        ids: string;
        sources: string;
        types: string;
        nst: any;
        dmin: any;
        rms: any;
        gap: any;
        magType: string;
        type: string;
        title: string;
    };
    geometry: {
        type: string;
        coordinates: number[];
    };
    id: string;
}

export interface Profile {
    firstName: string;
    lastName: string;
    avatarImage: string;
    phone: string;
    email: string;
    bio: string;
}
