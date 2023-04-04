import './dashboard.css';
import loginImg from '../assets/imgs/login.webp'
import { Navigate } from "react-router-dom";
import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import Transactions from '../components/transactions';


function Dashboard() {
    const [currentMoney, setCurrentMoney] = useState("1500.90");
    const [cardData, setCardData] = useState({
        number: '159012385920',
        expiry: '11/2025',
        cvc: '000',
        name: 'Sara Carolina Gómez Delgado',
        focus: '',
    });

    return(
        <>
            {/* <div className='navbar'></div> */}
            <div className="split left">
                <div className="centered">
                    <h1 style={{color:'#f4f0f5', fontSize:'3rem'}}>Personal Card</h1>
                    <div>
                        <Cards 
                            number={cardData.number}
                            expiry={cardData.expiry}
                            cvc={cardData.cvc}
                            name={cardData.name}
                            focused={cardData.focus}
                        />   
                    </div>
                    <p style={{fontSize:'2rem', color:'#C7C9C9  '}}> ${currentMoney}</p>
                </div>
            </div>
            
            <div className="split right">
                <div className="centered container_">
                    <h1 style={{color:'#104B84'}}>Transactions</h1>
                    <Transactions hour={"12:55"} status={"done"} date={"01 APR 2023"} descr={"Domino's Pizza"} type={"-"} cant={"310.80"}/>
                    <Transactions status={"pending"} date={"02 APR 2023"} descr={"Rent"} type={"-"} cant={"4350"}/>
                    <Transactions status={"done"} date={"02 APR 2023"} descr={"Oxxo"} type={"-"} cant={"160"}/>
                    <Transactions status={"pending"} date={"03 APR 2023"} descr={"Candy"} type={"+"} cant={"10"}/>
                </div>
            </div>
        </>
    )
}

export default Dashboard;