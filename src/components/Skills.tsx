import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Expertise in Technologies</h2>
                <p className='text-gray-500 pt-2'>
                    I have a sound knowledge in web development, specializing in HTML, CSS, and Typescript. I&apos;m also good in Tailwing CSS for creative styling and design, with a passion for learing. I stay updated on the latest technologies to enhance my skills and contribute efficiently to projects.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">HTML&CSS</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
