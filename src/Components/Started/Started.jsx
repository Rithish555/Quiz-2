import React,{useState,useEffect, use} from 'react'
import { useParams } from 'react-router-dom'
import QuizQuestions from '../QuizQuestions/QuizQuestions';

function Started(){
  const {numofq,catnum,difurl,dur} = useParams();
  const numq = Number(numofq)
  const category = Number(catnum)
  const duration = Number(dur)
  const [starttimer,setstarttimer] = useState(null)
  const [time,settime] = useState(duration)
  let interval;
  const apiUrl = `https://opentdb.com/api.php?amount=${numq}&category=${category}&difficulty=${difurl}&type=multiple`
  
  function start(){
    setstarttimer(5)
    interval = setInterval(()=>setstarttimer(t=>{
      if(t===1){
        clearInterval(interval)
        return 0;
      }
      return t-1;
    }),1000)
  }
  async function getq() {
    let a = await fetch(apiUrl)
    let b = await a.json()
    console.log(b)
    let arrq =[]
    let arrans = []
    let arropt = []
    for(let i=0;i<numq;i++){
      arrq[i] = b.results[i].question;
      arrans[i]= b.results[i].correct_answer;
      arropt[i] = [...(b.results[i].incorrect_answers),arrans[i]];
      sessionStorage.setItem("questions",JSON.stringify(arrq));
      sessionStorage.setItem("answers",JSON.stringify(arrans));
      sessionStorage.setItem("options",JSON.stringify(arropt));
    }
    
  }
  
  return (
    <div className='bg-[url(/src/Images/bg.png)] bg-cover bg-center w-full '>
      {starttimer==null && <p className='pt-50 text-center text-8xl font-bold'>Can we <span className='text-red-600'>Start?</span></p>}
      {starttimer==null && <button className='ml-150 text-3xl mt-20 bg-black text-teal-400 font-extrabold p-3 rounded-xl cursor-pointer hover:scale-110' onClick={()=>{start();getq();}}>Start</button>}
      {starttimer!=null && starttimer>=1 && <p className='pt-50 text-9xl ml-70'>Quiz Starts In <br></br><span className='text-red-600 font-extrabold ml-80 mt-5'>{starttimer}</span></p> }
      {starttimer==0 && starttimer!=null && <QuizQuestions time={duration}/>}
    </div>
  )
}

export default Started