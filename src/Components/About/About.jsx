import React from 'react'

function About(){
  return (
    <div className='bg-[url(/src/Images/bg.png)] bg-cover bg-center w-full min-h-screen'>
      <div>
        <p className='text-2xl pt-50 text-justify ml-80 mr-70 font-bold leading-[2.5]'>Welcome to <span className='text-red-600 text-4xl'>QUIZTIFY!</span> , the ultimate destination for fun, challenging, and <span className='font-extrabold'>engaging quizzes!</span> Whether you're looking to test your knowledge, learn something new, or just have a <span className='text-red-600 font-extrabold'>good time</span> , we've got you covered.</p>
      </div>
    </div>
  )
}

export default About