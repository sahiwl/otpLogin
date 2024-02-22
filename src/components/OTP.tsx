// import useNavigate from 'react-router-dom'

export default function OTP(){
    return <>
    <div className="bg-gray-700 h-screen w-screen flex justify-center items-center ">
        <div className="h-1/2 w-1/2 bg-red-200 flex justify-center  outline grid grid-rows-4">Login via OTP
            <div className="bg-blue-200 w-80 flex justify-center items-center grid grid-cols-4">
                <div className="bg-pink-300 h-1/2 w-1/2 outline">abab</div>
                <div className="bg-pink-300 h-1/2 w-1/2 outline">abab</div>
                <div className="bg-pink-300 h-1/2 w-1/2 outline">abab</div>
                <div className="bg-pink-300 h-1/2 w-1/2 outline">abab</div>
            </div>
            <div className="bg-green-200 flex justify-center items-center">
                <button className="text-gray-300 bg-gray-900 border border-gray-300 rounded-xl font-medium text-sm px-5 py-2.5 me-2 mb-2">Login</button>
            </div>
            <div className="bg-yellow-200"></div>

        </div>
    </div>

    </>

}
