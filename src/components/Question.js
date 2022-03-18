import React from 'react'
import './Question.css';
import {useNavigate} from 'react-router-dom'


export const Question = ({data}) => {
  const Navigate=useNavigate()  
  let options=[];
  let correctopts=[];
  let i=0;
  let j=0;
  let k=0;
  const random=(num)=>{
      return Math.floor(Math.random()*num);
  }
  const pushoptions=(data,randomnum)=>{
    options=[];
    j=0;
    k=0;
    while(j<4){
        if(j===randomnum){
            correctopts.push(data.correct_answer);
            options.push(data.correct_answer);
        }else{
            options.push(data.incorrect_answers[k++]);
        }
        j++;
    }
    j=0;
  }

  const handleSubmit=(e)=>{
      e.preventDefault();
      let score=0;
      const formdata=new FormData(e.target);
      let obj={
          answer:[]
      };
      formdata.forEach((value,index)=>{
          if(data[index].correct_answer===value){
              score++;
          }
          obj.answer.push({yourAns:value,correctAns:data[index].correct_answer});
      });
     // alert(`Your Score : ${correctAnswer}/10\nCorrect Answer are as follows... \n${correctopts.join('\n')}`);
      obj.score=score;
      return Navigate('/score',{
          state:obj
      });
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
            <ul>
                {data.map((data,index)=>{
                    return <li className='question-box' key={index}>
                    <h4>{++i}) {data.question} </h4>
                    {pushoptions(data,random(4))}
                    <div className='options'>
                        <fieldset id={index}>
                            <div>
                                <input type="radio" name={index} id={`${index}-option1`} value={options[j++]} required/>
                                <label htmlFor={`${index}-option1`}>{options[j-1]}</label>
                            </div>

                            <div>
                                <input type="radio" name={index} id={`${index}-option2`} value={options[j++]}/>
                                <label htmlFor={`${index}-option2`}>{options[j-1]}</label>
                            </div>

                            <div>
                                <input type="radio" name={index} id={`${index}-option3`} value={options[j++]}/>
                                <label htmlFor={`${index}-option3`}>{options[j-1]}</label>
                            </div>

                            <div>
                                <input type="radio" name={index} id={`${index}-option4`} value={options[j++]}/>
                                <label htmlFor={`${index}-option4`}>{options[j-1]}</label>
                            </div>
                        </fieldset>
                    </div>
                </li>
                })}
                
            </ul>
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}
