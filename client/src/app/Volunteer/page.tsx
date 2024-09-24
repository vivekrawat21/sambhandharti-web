import React from 'react'
import VolunteerForm from  '@/components/VolunteerForm'

const page = () => {
  return (
    <div className="max-w flex flex-col justify-center  mt-5 p-4">
     <h1 className=" m-auto lg:mt-0 font-bold text-xl sm:text-4xl mb-4 text-violet-500">
         Join Us for a Cause
        </h1>
   <VolunteerForm />
   </div>
  )
}

export default page