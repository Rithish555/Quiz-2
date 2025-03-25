import React,{useState,useEffect} from 'react'

function QuizQuestions({time}){
    let [dur,setdur] = useState(time)
    let [count,setcount] = useState(0)
    let arrq = JSON.parse(sessionStorage.getItem("questions"));
    let arrans = JSON.parse(sessionStorage.getItem("answers"));
    let arropt = JSON.parse(sessionStorage.getItem("options"));

    useEffect(()=>{
        let interval = setInterval(() => {
            setdur(t=>{
                        if(t===1){
                            clearInterval(interval);
                            return 0;
                        }
                        return t-1;
                    });
            }, 1000);
        return ()=>clearInterval(interval)
    },[])

    function next(){
        if(count>=0 && count< (arrq.length-1)){
            setcount(c=>c+1)
        }
        else setcount(0)
    }
    function prev(){
        if(count>0 && count< arrq.length){
            setcount(c=>c-1)
        }
        else setcount(arrq.length-1)
    }
    
    return (
        <div>
            {dur!=0 && <div className='w-full bg-[#000b] text-center font-extrabold text-sky-500 pt-25'>
                <p className='text-6xl'>{dur}</p>
            </div>}
            <div className='text-center text-4xl mt-20 font-bold text-teal-400 bg-[#000000b9] mx-70 p-5'>{arrq[count]}</div>
            <div className='mx-64'>
                <div className='flex justify-around mt-20'>
                    <div>
                        <input type="radio" />
                        <label htmlFor="opt1" className='text-2xl'>{arropt[count][0]}</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label htmlFor="opt1" className='text-2xl'>{arropt[count][1]}</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label htmlFor="opt1" className='text-2xl'>{arropt[count][2]}</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label htmlFor="opt1" className='text-2xl'>{arropt[count][3]}</label>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='text-2xl mt-35 mr-120' onClick={prev}>prev</button>
                <button className='text-2xl mt-35' onClick={next}>next</button>
            </div>

        </div>
  )
}

export default QuizQuestions