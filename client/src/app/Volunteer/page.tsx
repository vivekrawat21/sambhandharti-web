import React from 'react'
import VolunteerForm from  '../../components/VolunteerForm'

const page = () => {
  return (
    <div className="flex flex-col justify-center  m p-4 mt-2 ">
     <h1 className=" m-auto lg:mt-0  font-bold text-xl sm:text-4xl mb-5 text-violet-500">
         Join Us for a Cause
        </h1>
   <VolunteerForm />
   </div>
  )
}

export default page
