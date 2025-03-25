import React,{createContext} from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Quiz(){

  let [numofq,setnumofq] = useState(10)
  let [category,setcategory] = useState("General Knowledge")
  let [catnum,setcatnum] = useState(9)
  let [difficulty,setdifficulty] = useState("Medium")
  let [difurl,setdifurl] = useState("medium")
  let [dur,setdur] = useState(20)

  const navigate = useNavigate();
  function numchange(e){
    setnumofq(e.target.value)
  }
  function durchange(e){
    setdur(e.target.value)
  }
  function catchange(e){
    setcategory(e.target.value)

    if(category = "General Knowledge"){
      setcatnum(9)
    }
    if( category = "Sports"){
      setcatnum(21)
    }
    if( category = "Flims"){
      setcatnum(11)
    }
    if( category = "Science:Gadgets"){
      setcatnum(31)
    }
    if( category = "Japanese Anime & Manga"){
      setcatnum(30)
    }
  }
  function difchange(e){
    setdifficulty(e.target.value)

    if(difficulty = "Easy"){
      setdifurl("easy")
    }
    if(difficulty = "Medium"){
      setdifurl("medium")
    }
    if(difficulty = "Hard"){
      setdifurl("hard")
    }
  }
  function started(){
    return(
      navigate(`/started/${numofq}/${catnum}/${difurl}/${dur}`)
    )
  }
  return (

    <div className='bg-[url(/src/Images/bg.png)] bg-cover bg-center w-full min-h-screen'>
      <h1 className='text-3xl pt-30 text-center font-bold'>Select Your <span className='text-red-600 font-extrabold'>Preferences </span></h1>

      <div className='ml-110'>

        <div className='mt-25 font-bold text-xl'>
          <label htmlFor="numq">Number Of Questions : {numofq}</label>
          <input className='ml-10' type="range" min='10' max='30' onChange={numchange} />
        </div>

        <div className='mt-10 font-bold text-xl'>
          <label htmlFor="durs">Duration : {dur}s</label>
          <input className='ml-32.5' type="range" min='20' max='600' step='20' onChange={durchange} />
        </div>

        <div className='mt-10 font-bold text-xl'>
          <label htmlFor="numq">Category :</label>
          <select className="bg-amber-300 rounded-md ml-5 p-1 w-70" name="cat" id="categ" onChange={catchange}>
            <option value="gk" selected>General Knowledge</option>
            <option value="sports">Sports</option>
            <option value="film">Films</option>
            <option value="science">Science:Gadgets</option>
            <option value="manga">Japanese Anime & Manga</option>
          </select>
        </div>

        <div className='mt-10 font-bold text-xl'>
          <label htmlFor="numq">Difficulty :</label>
          <select className="bg-amber-300 rounded-md ml-5 p-1 w-70" name="cat" id="categ" onChange={difchange}>
            <option value="e">Easy</option>
            <option value="m" selected>Medium</option>
            <option value="h">Hard</option>
          </select>
        </div>
        <button className='bg-red-600 text-sky-500 rounded-xl p-2 w-20 font-bold ml-45 mt-15 cursor-pointer text-2xl hover:scale-110' onClick={started}>Start</button>
      </div>
    </div>
  )
}

export default Quiz