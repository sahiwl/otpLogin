// import useNavigate from 'react-router-dom'

export default function OTP(){
    console.log("rendering otp page")
    return <>
    <div className="bg-gray-700 h-screen w-screen flex justify-center items-center">
        <div className="h-1/2 w-1/2 flex justify-center  outline grid grid-rows-3 text-center pt-2 rounded-xl"> 
        <div className=" h-20 flex justify-center items-center font-semibold text-4xl"> Login via OTP</div>
            <div className=" w-80 flex justify-center items-center grid grid-cols-4 ">
                <div className="h-1/3 w-1/2 outline rounded-sm"></div>
                <div className=" h-1/3 w-1/2 outline rounded-sm"></div>
                <div className=" h-1/3 w-1/2 outline rounded-sm"></div>
                <div className=" h-1/3 w-1/2 outline rounded-sm"></div>
            </div>
            <div className="flex justify-center items-center">
                <button className="text-gray-300 bg-gray-900 border border-gray-400 rounded-xl font-medium text-sm px-5 py-2.5 me-2 mb-2">Login</button>
            </div>
        </div>
    </div>

    </>

}
