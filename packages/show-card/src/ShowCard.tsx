import React from 'react';
import { IShow } from '@rtrocca/search-show';
import { LinkButton } from '@rtrocca/link-button';
import './ShowCard.scss';

export const ShowCard: React.FC<{show: IShow}> = (props) => {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                { 
                    props.show.image ?
                        <div className="col-md-3 col-sm-3">
                            <img
                                src={props.show.image}
                                className="card-img show-cover"
                                alt={`${props.show.name}`}
                            />
                        </div> :
                        <div className="col-md-3" style={{backgroundColor: "#E0E0EA"}}>
                        </div>
                }
                <div className="col-md-9 col-sm-9">
                    <div className="card-body">
                        <h5 className="card-title">{props.show.name}</h5>
                        <p className="card-text" dangerouslySetInnerHTML={{__html: props.show.summary}}></p>
                        <div className="card-buttons">
                            { props.show.officialSite && <LinkButton label="Official Site" href={props.show.officialSite}/>}
                            { props.show.url && <LinkButton label="More Info..." href={props.show.url}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}