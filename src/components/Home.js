import React, { useEffect, useState } from 'react'
import { Question } from './Question';

export const Home = () => {
    const [data, setdata] = useState();
    useEffect(() => {
        const fetchdata=async()=>{
            try{
                const res=await fetch('https://opentdb.com/api.php?amount=10&&type=multiple');
                const json=await res.json();
                if(json.results){
                    setdata(json.results);
                }
            }
            catch(error){
                console.log(error);
            }
        }
        fetchdata();
    }, [])
    
    if(!data){
        return(
            <h2>Loading....</h2>
        )
    }else{
        return (
            <>  
                <h1 style={{textAlign:"center"}}>Test Your Knowledge</h1>
                <Question data={data}/>
            </>
            )
    }
}
