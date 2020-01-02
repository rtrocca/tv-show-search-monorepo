interface ILink {
    href: string;
}

interface IShowData {
    score: number;
    show: {
        id: number;
        url: string;
        name: string;
        type: string;
        language: string;
        genres: string[];
        status: string; // 'Ended' | 
        runtime: number;
        premiered: string;
        officialSite: string;
        schedule: {
            time: string;
            days: string[];
        };
        rating: {
            average: number
        };
        weight: number;
        network: {
            id: number;
            name: string;
            country: {
                name: string;
                code: string;
                timezone: string;
            };
        };
        webChannel: any;
        externals: {
            tvrage: number;
            thetvdb: number;
            imdb: string;
        };
        image: {
            medium: string;
            original: string;
        };
        summary: string;
        updated: number;
        _links: {
            self: ILink;
            previousepisode: ILink;
        };
    }
}

export interface IShow {
    id: number;
    name: string;
    url: string;
    officialSite: string;
    image?: string;
    summary: string;
}

export async function searchShow(showName: string): Promise<IShow[]|null> {
    // http://api.tvmaze.com/search/shows?q=girls
    const params = new URLSearchParams();
    params.append('q', showName);

    const response = await fetch(`https://api.tvmaze.com/search/shows?${params.toString()}`);
    if (response.ok) {
        const result = await response.json() as IShowData[];
        return  result.map( (showData) => {
            return {
                id: showData.show.id,
                name: showData.show.name,
                url: showData.show.url,
                officialSite: showData.show.officialSite,
                image: showData.show.image ? showData.show.image.medium : undefined,
                summary: showData.show.summary
            }
        });
    }
    // there was some issue
    console.log('An error occurred', response.status, response.statusText);
    return null;

}