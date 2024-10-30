import React from 'react'
import VolunteerForm from  '../../components/VolunteerForm'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 mt-2 ">
    <h1 className="text-3xl lg:text-3xl xl:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Join us for a{" "}
              <span className="text-orange-600 dark:text-orange-400">
                Good Cause
              </span>
            </h1>
   <VolunteerForm />
   </div>
  )
}

export default page
