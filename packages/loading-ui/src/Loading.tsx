import React from 'react';
import img from './Loading.gif';
export const LoadingUI: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                flexDirection: "column",
                marginTop: "2em"
            }}
        >
            <img src={img} alt="Loading spinner"/>
            <span style={{ 
                marginTop: "1em"
            }}
            >
                Loading...
            </span>
        </div>
    );
}