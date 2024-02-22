export const LoginPage = ()=>{

    return <div className="bg-gray-700 h-screen w-screen flex justify-center items-center">  
          <div className="h-2/4 w-2/4 flex justify-center outline  pt-8 grid grid-rows-5 rounded-xl">
            {/* <div className="bg-blue-200">asd</div> */}
            <div className="bg-gray-700 text-3xl text-center font-semibold  w-80 mb-4 text-bold ">Login via OTP </div>
            <div className="grid mb-4 ">
              <input className="bg-gray-700 rounded-xl outline hover:outline-offset" type="number" placeholder='Enter your number'/>
            </div>
            <div className="flex justify-center mb-4">
            <button className='bg-gray-700 text-2xl font-medium h-full w-full outline rounded-lg'> Send OTP </button>
            </div>
            {/* <div className="bg-green-400">idk</div> */}
            {/* <div className="bg-yellow-200">lastdiv</div> */}
          </div>
      </div>
}