import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>
                A Third year Enginering student who is well versed in Problem Solving and deeply learning Web Development.
                <br />
                Currently looking for new opportunities in industry and willing to work on challenging and diverse projects with the latest technologies and searching for an internship in MERN-stack web Development.
            </p>
            <br />
            <p className='text-xl '>
                The technology i am familiar is <strong>React Js , Node Js ,Express Js , Html , Css  ,Javascript , Bootstrap.</strong>
                <br />
                Currently Learning React Js Library and Backend deeply.
            </p>
        </div>
    </div>
  )
}

export default About