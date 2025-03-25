import React from 'react'

function Home(){
  return (
    <div className='bg-[url(/src/Images/bg.png)] bg-cover bg-center w-full min-h-screen'>
      <div>
        <p className='text-center text-7xl pt-55 font-extrabold tracking-wider'>WELCOME</p>
        <p className='text-center text-5xl mt-5 font-bold'>TO <span className='text-red-600 '>THE</span></p>
        <p className='text-center text-5xl mt-5 font-bold italic'>Quiz</p>
      </div>
    </div>
  )
}

export default Home