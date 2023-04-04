import './details.css';
import loginImg from '../assets/imgs/login.webp'
import { Navigate } from "react-router-dom";
import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdPendingActions} from 'react-icons/md'
import { useLocation } from "react-router-dom";
import {FcMoneyTransfer} from 'react-icons/fc'


function Details() {
    const location = useLocation();
    let data = location.state
    console.log(data);
    return(
        <>
            {/* <div className="split left">
                <div className="centered">
                    <h1 style={{color:'#f4f0f5', fontSize:'3rem'}}>Details</h1>
                </div>
            </div>
            
            <div className="split right"> */}
            <div className='navbar'>
                <h1 className='centered' style={{margin:0, color:'white'}}>Details</h1>
            </div>
                <div className="centered container_" style={{width:'40vh', height:'60vh',padding:'2rem', }}>
                    
                    <div className='centered'>
                        <FcMoneyTransfer size={60} style={{margin:0 }}/>
                        <h2 style={{fontSize:'2rem', color:'#104B84'}}>USD ${data?.cant}</h2>
                        <p style={{color: 'grey', fontSize:'0.7rem', margin:0}}>{data?.date}</p>
                        <hr/>
                        <p style={{color: 'grey', fontSize:'0.7rem'}}>{data?.descr}</p>
                        <div className='div'>
                            <p style={{color: 'grey'}}> 
                                {data?.status == "done" && (
                                    <>
                                        <AiFillCheckCircle size={20} style={{color:'green', width:'2rem'}}/>
                                        {/* Done */}
                                    </>
                                )}
                                {data?.status == "pending" && (
                                    <>
                                        <MdPendingActions style={{color:'#DFC91D'}}/>
                                        {/* Pending  */}
                                    </> 
                                )}
                                
                            </p>
                        </div>
                    </div>
                </div>  
            {/* </div> */}
        </>
    )

}
export default Details;