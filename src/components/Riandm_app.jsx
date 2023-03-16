import React, { useEffect, useState } from 'react';
import axios from "axios"
import Location from './Location';
import Residents from './Residents';

const Riandm_app = () => {

    const [rickLocation, setRickLocation] = useState("")

    useEffect (() => {
        let idLocation = Math.floor(Math.random() * 126) +1
        axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
        .then(res => setRickLocation(res.data))
    }, [])

    //console.log(rickLocation.residents)

    const [searchloc, setSearchLoc] = useState ("")

    const search = () => {
        if (searchloc <= 126){
            axios.get(`https://rickandmortyapi.com/api/location/${searchloc}`)
            .then(res => setRickLocation(res.data))
            setSearchLoc("")
        } else {
            alert("DATO NO VALIDO")
        }
    }

    return (
        <div >
            <div className='header_card'>
            <h1 className='title'>Rick and Morty Wiki</h1>

            <div className='search'>
            <input className='search__input' type="number" value={searchloc} onChange={(e) => setSearchLoc(e.target.value) } placeholder={" Search Id (1 - 126)"} /> 
            <button className='search__button' onClick={search} >Search</button>
            </div>
            <div className='location'>
            <Location rick={rickLocation} />
            </div>
            <h1>Residents</h1>
                <div className='residents'>
            {rickLocation.residents?.map((rick) => (
                <Residents url={rick} key={rick} />
                ))
            }
                </div>
            </div>
        </div>
    );
};

export default Riandm_app;