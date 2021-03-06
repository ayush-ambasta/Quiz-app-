import React, { useEffect } from 'react'
import "./Score.css"
import { Link, useLocation} from 'react-router-dom'

export const Score = () => {
    const location=useLocation();
    const obj=location.state;

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    if(!obj){
        return(<Link to="/"><h1 style={{textAlign:"center"}}>Attempt the Quiz to view Score</h1></Link>)
    }
    return (
        <>
            <h1 style={{textAlign:"center"}}>Your Score : {obj.score}/10</h1>
            <h2>Detailed Analysis</h2>
            <table>
                <tbody>
                <tr>
                    <th>Question Number</th>
                    <th>Your Answer</th>
                    <th>Correct Answer</th>
                </tr>
                </tbody>
                {obj.answer.map((data,index)=>{
                    return <tbody key={index}>
                        <tr>
                        <td><h5>{index+1}</h5></td>
                        <td>{data.yourAns}</td>
                        <td>{data.correctAns}</td>
                    </tr>
                    </tbody>
                })}
            </table>
            <h3 style={{textAlign:"center"}}><Link to="/">Try Again</Link></h3>
        </>
    )
}
