import React from 'react';

const Location = ({rick}) => {
    return (
        <div className='card__location'>
            <h1>{rick.name}</h1>
            <div className='card__location--info'>
            <p> <strong>Name: </strong> {rick.name}</p>
            <p> <strong>Type: </strong> {rick.type}</p>
            <p> <strong>Dimension: </strong> {rick.dimension}</p>
            <p> <strong>Población: </strong> {rick.residents?.length}</p>
            </div>
        </div>
    );
};

export default Location;