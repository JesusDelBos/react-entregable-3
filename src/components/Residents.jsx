import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Residents = ({url}) => {

    const [resident, setResident] = useState({})
    
    useEffect(() => {
        axios.get( url )
        .then(res => setResident(res.data))
    }, {})

    //console.log(resident)
let statusArray = []
   const bgStatus = () =>{
        if (resident.status === "Alive"){
            statusArray.push("green", "alive")
        }else if (resident.status === "Dead"){
            statusArray.push("red", "dead")
        }else {
            statusArray.push("grey", "unknown")
        }
        return statusArray
    }

    bgStatus()
    return (
        <div className='resident__card'>
            
          <div>
            <img src={resident.image} alt="" />
          </div>
          <div>
            <h3>{resident.name}</h3>
            <div className='info__status'>
                <div className='status' style={{backgroundColor: statusArray[0] }} ></div><p>{statusArray[1]}</p>
            </div>
            <p><strong>Species: </strong>{resident.species}</p>
            <p><strong>Origin: </strong>{resident.origin?.name}</p>
            <p><strong>Episodes: </strong>{resident.episode?.length}</p>
          </div>
        </div>
    );
};

export default Residents;