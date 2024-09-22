import React from 'react'
import { CardDemo } from '@/components/ui/missionCard'
const page = () => {
  const missionData = [{
    id:1,
    title: "Taking Responsibility",
    description: "To enable people to take responsibility for the situation of the deprived Indian child and so motivate them to",
    img: "",
    gif: "",
  },
  {
    id:2,
    title: "Mobilising People",
    description: "To make people discover their potential for action and change",
    img: "",
    gif: "",
  },
  {
    id:3,
    title: "Inspiring Collective Action",
    description: "To enable peoples’ collectives and movements encompassing diverse segments, to pledge their",
    img: "",
    gif: "",
  }


  ]
  return (
    <div className='container mx-auto px-4 my-16 md:px-8 lg:px-16 h-[70vh] '> 



<div className='max-w-[1320px] pt-4 flex flex-col md:flex-row mx-auto'>
  <div className='basis-[45%] px-5'>
    <p className='text-justify pt-14 text-lg text-gray-600 dark:text-gray-300'>
      <span className="text-violet-500 font-bold px-2">Sambharndaharti</span>Foundation, a non-government organization established in 2018, is dedicated to improving the well-being of all living beings. Our holistic approach encompasses humans, animals, and the environment, reflected in our innovative programs for the underprivileged, animal welfare, and environmental conservation.
      We provide comprehensive support to the homeless, including medical care and educational opportunities, while also bringing joy to orphanages through essential supplies and recreational activities. Our commitment extends to rescuing and feeding stray dogs and engaging in tree planting initiatives for environmental sustainability.
      Officially registered under Section 8 of the Companies Act, 2013, Sambharndaharti Foundation holds 12AA and 80G certificates from the Income Tax Department, ensuring transparency in our operations. We collaborate with the United Nations on their Global Compact Program and are registered with the Ministry of Corporate Affairs, actively engaging in corporate social responsibility (CSR) initiatives.
    </p>
  </div>
  <div className='basis-[45%] px-5 flex flex-col'>
    <h1 className='ml-4 sm:ml-10 mt-10 lg:mt-0 font-bold text-xl sm:text-4xl text-center text-violet-500'>About Us</h1>
    <div className='w-full'>
      <img
        src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg="
        alt=""
        width={600}
          height={600}
          
        className=' rounded-lg shadow-lgw-[80%] h-auto mx-auto py-6' // Adjust width and maintain aspect ratio
      />
    </div>
  </div>
</div>




      <div className='py-16 flex flex-col items-center'> 
        <h2 className='ml-4 sm:ml-10 mt-10 lg:mt-0 font-bold text-xl sm:text-4xl mb-4 text-center text-violet-500'>Concern About Our Mission  </h2>
        <div className="flex flex-row px-12 gap-6 py-6 ">
          {missionData.map((mission, index) => (
          <CardDemo   key= {index} title={mission.title} description={mission.description}/>
            ))}

          
          
        </div>
      </div>
    </div>
  )
}

export default page