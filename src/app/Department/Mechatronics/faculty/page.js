import BackDepartment from '@/components/BackDepartment';
import FacultyList from '@/components/facultycomponents/FacultyList';
import React from 'react'

// import pdf from '@/components/pdf.pdf
const Home=() =>{
  return (
   <>
    <div className="flex flex-col p-10 max-sm:p-4">
      <div className="flex flex-col  mb-4">
        <div>
            <p className="text-red-900 text-xl lg:text-2xl font-bold">
                FACULTY
            </p>
        </div>
        <div className="mt-2">
            <p className="text-gray-500 text-sm lg:text-base font-semibold">
            MECHATRONICS
            </p>
        </div>
        <div>
          <BackDepartment navigate={'/AllDepartment/Mechatronics'}/>
        </div>
      </div>  
      <FacultyList url={"/AllDepartment/Mechatronics/faculty"} branch={"mae"}/>
    </div>
   </>
  )
}
export default Home;