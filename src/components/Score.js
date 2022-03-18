import React from 'react'
import "./Score.css"
import { Link, useLocation} from 'react-router-dom'

export const Score = () => {
    const location=useLocation();
    const obj=location.state;

    if(!obj){
        return(<Link to="/"><h1 style={{textAlign:"center"}}>Attempt the Quiz to view Score</h1></Link>)
    }
    return (
        <>
            <h1 style={{textAlign:"center"}}>Your Score : {obj.score}/10</h1>
            <h2>Detailed Analysis</h2>
            <table>
                <tr>
                    <th>Question Number</th>
                    <th>Your Answer</th>
                    <th>Correct Answer</th>
                </tr>
                {obj.answer.map((data,index)=>{
                    return <tr key={index}>
                        <td><h5>{index+1}</h5></td>
                        <td>{data.yourAns}</td>
                        <td>{data.correctAns}</td>
                    </tr>
                })}
            </table>
            <h3 style={{textAlign:"center"}}><Link to="/">Try Again</Link></h3>
        </>
    )
}
