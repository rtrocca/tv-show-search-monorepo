import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

interface ILinkButtonProps {
    label: string;
    href: string;
}

export const LinkButton: React.FC<ILinkButtonProps> = (props) => {
    return (
        <a
            href={props.href}
            className="btn btn-info"
            rel="noopener noreferrer"
            target="_blank" 
        > 
            <FontAwesomeIcon icon={faExternalLinkAlt}/>&nbsp;{props.label}</a>
    );
}