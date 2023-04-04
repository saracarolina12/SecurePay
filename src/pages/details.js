import './details.css';
import loginImg from '../assets/imgs/login.webp'
import { Navigate } from "react-router-dom";
import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

import { useLocation } from "react-router-dom";


function Details() {
    const location = useLocation();
    let data = location.state
    console.log(data);
    return(
        <>
            <div className="split left">
                <div className="centered">
                    <h1 style={{color:'#f4f0f5', fontSize:'3rem'}}>Details</h1>
                </div>
            </div>
            
            <div className="split right">
                <div className="centered container_">
                    
                    <div className='tittle'>
                        <h2>${data?.cant}</h2>
                        <p>{data?.date}</p>
                        <p>{data?.descr}</p>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Details;