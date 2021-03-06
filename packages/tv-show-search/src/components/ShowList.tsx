import React from 'react';
import { IShow } from '@rtrocca/search-show';
import { LoadingUI } from '@rtrocca/loading-ui';
import { ShowCard } from '@rtrocca/show-card';
import "@rtrocca/show-card/dist/show-card.css";
interface IShowListProps {
    shows: IShow[];
    isLoading: boolean;
}

export const ShowList: React.FC<IShowListProps> = (props: IShowListProps) => {
    if (props.isLoading) {
        return <LoadingUI/>
    }
    return (
        <div>
            {props.shows.map( (show: IShow) => <ShowCard key={show.id} show={show} />)}
        </div>
    );
}