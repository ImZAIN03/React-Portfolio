import React from 'react'

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-10 items-center">
      <div className="mb-10">
      <p className="text-white text-[23px]">Hey There, Welcome To My Site.</p>
      <p className="text-white text-[40px] font-bold">I am MUHAMMED ZAIN.</p>
      <p className="text-blue-400 text-[30px] font-bold">I am a Full-Stack Developer.</p>
      <div className="mt-4 flex gap-4">
        <button className="text-white text-[12px] px-3 pb-2 py-2
         rounded-full border-[3px] hover:border-white"><a href="https://github.com/ImZAIN03">SEE PORTFOLIO.</a></button>
        <button className="text-white text-[12px] px-3 pb-2 py-2
         rounded-full border-[3px] hover:border-white"><a href="https://www.linkedin.com/in/muhammed-zain2003/">CONTACT ME.</a></button>
        </div>
      </div>
    <div className="flex-justify-center ">
    <div className="h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-blue-500 to-gray-700">
        <img src="/src/assets/Mzain.jpg"
        className="h-full w-[250px] object-cover rounded-[20px]"    
        />
    </div>
    </div>
  </div>
  )
}

export default Hero