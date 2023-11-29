import { useState } from "react";

function Login() {
	const [lang, setLang] = useState(false);
 	return (
		<div className="flex flex-col justify-center items-center h-screen w-screen overflow-x-hidden">
			<div className="text-5xl font-semibold basis-[80px] flex justify-center items-center">
				<span className="base-color">Kids</span>
				<span className="text-black">App</span>
			</div>

			<div className="w-5/12 flex flex-col gap-0">
				<label htmlFor="select" className="block mb-2 text-sm font-medium text-gray-900 ">Login to your account</label>
				<input className="flex-grow p-3 rounded-tr-lg rounded-tl-lg outline-none text-sm border border-solid border-gray-400" type="text" placeholder="Username" />
				<input className="flex-grow p-3 rounded-br-lg rounded-bl-lg outline-none text-sm border border-solid border-gray-400" type="text" placeholder="Password" />
			</div>

			<button className="w-5/12 p-2.5 my-3 text-white text-xs font-semibold shadow base-bg rounded-lg border cursor-pointer hover:shadow-lg">Login</button>
			<hr className="w-5/12 my-5 h-[1px] border-b border-gray-400" />

			<div className="w-5/12 flex flex-col gap-1">
				<div className="flex gap-1 h-10 justify-center items-center rounded shadow bg-white border cursor-pointer">
					<img src="/images/facebook.png" className="w-6 h-6 mx-4 cursor-pointer text-black" alt="" />
					<div className="text-sm font-medium text-gray-900 flex-grow text-center">Continue with Facebook</div>
				</div>
				<div className="flex gap-1 h-10 justify-center items-center rounded shadow bg-white border cursor-pointer">
					<img src="/images/google.png" className="w-6 h-6 mx-4 cursor-pointer text-black" alt="" />
					<div className="text-sm font-medium text-gray-900 flex-grow text-center">Continue with Google</div>
				</div>
				<div className="flex gap-1 h-10 justify-center items-center rounded shadow bg-white border cursor-pointer">
					<img src="/images/apple.png" className="w-6 h-6 mx-4 cursor-pointer text-black" alt="" />
					<div className="text-sm font-medium text-gray-900 flex-grow text-center">Continue with Apple</div>
				</div>
			</div>
			<div className="w-5/12 text-start my-3 text-xs">
				<span >Don't have an account?</span>
				<span className="cursor-pointer font-semibold">Sign Up</span>
			</div>

			<div className="flex flex-row justify-center pt-4 bg-gray-100 ">
				<div className="flex-none p-2 relative">
					<button onClick={()=>setLang(!lang)} className="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-blue-600">
						<img src="/images/english.png" className="w-6 h-6 mx-2 cursor-pointer select-none" alt=""/>
						{
							lang ?
							<svg id="arrow-up" className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg> :  
							<svg id="arrow-down" className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
						}
					</button>
					{
						lang &&
						<div id="options" className="absolute w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
							<a href="/login" className="flex px-2 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
								<img src="/images/english.png" className="w-6 h-6 mx-2 cursor-pointer select-none" alt="" />
								<span>English</span>
							</a>
							<a href="/login" className="flex px-2 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
								<img src="/images/poland.png" className="w-6 h-6 mx-2 cursor-pointer select-none" alt="" />
								<span>Polish</span>
							</a>
							<a href="/login" className="flex px-2 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
								<img src="/images/france.png" className="w-6 h-6 mx-2 cursor-pointer select-none" alt="" />
								<span>French</span>
							</a>
						</div>
					}
				</div>
			</div>
		</div>
	);
}

export default Login;
