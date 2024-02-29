import { useNavigate } from "react-router-dom"


export const LoginPage = () => {
    const me = "</sahil>"
    const navigate = useNavigate();
    console.log("rendering loginpage")
    return <div className="bg-gray-700 h-screen w-screen flex       justify-center items-center grid grid-rows-5">
                <div className="h-1/2 flex justify-center outline  pt-8 row-span-4 grid grid-rows-4 rounded-xl" style={{width: "30rem"}}>
                        <div className="bg-gray-700 text-4xl text-center font-semibold  w-80 mb-4 text-bold ">Login via OTP </div>
                        <div className="grid mb-4 ">
                            <input className="bg-gray-700 rounded-xl outline hover:outline-offset" type="tel" placeholder='Enter your number' />
                        </div>
                        <div className="flex justify-center mb-4">
                            <button className='bg-gray-700 text-2xl font-medium h-full w-full outline rounded-lg' onClick={() => {
                                navigate("/otp")
                            }}> Send OTP </button>
                        </div>
                </div>
                <div className="flex justify-center">
                    <div className="font-semibold">made by<a href="https://github.com/sahiwl" className="text-sky-600 font-semibold" > {me} 🐱‍👤</a>  </div>
                </div>
            </div>
            
}