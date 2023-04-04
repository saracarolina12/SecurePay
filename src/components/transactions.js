import './transactions.css';
import loginImg from '../assets/imgs/login.webp'
import { Navigate, Route, Link} from "react-router-dom";
import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdPendingActions} from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { logMessage } from '../Logger';


function Transactions({date, descr, status, type, cant}) {
    const navigate = useNavigate();

    const goTo = () =>{
        console.log("click", date);
        logMessage("Clicked on " + " " + date + " " + descr + " " + status + " " + type + " " + cant)
        navigate("/details", {
            state: {
                date: date,
                descr: descr,
                status: status,
                type: type,
                cant: cant,
            }
        });
    }

    
    return (
        <>
            <button className='container' onClick={goTo}>
                <div className='date div'>
                    <p className='number'>{date}</p>
                </div>

                <div className='div'>
                    <p>{descr}</p>
                </div>
                
                <div className='div'>
                    {status == "done" && (
                        <AiFillCheckCircle style={{color:'green'}}/>
                    )}
                    {status == "pending" && (
                        <MdPendingActions style={{color:'#DFC91D'}}/>
                    )}
                </div>

                <div className='div'>
                    {type == '-' ? <p className='cant' style={{color:'red'}}>{type}${cant}</p>
                        :
                        <p className='cant' style={{color:'green'}}>{type}${cant}</p>
                    }
                </div>
            </button>
        </>
    )
}

export default Transactions;

