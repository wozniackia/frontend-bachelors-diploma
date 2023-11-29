function Login() {
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
			<div className="w-5/12 text-start my-3 text-xs">
				<span >Don't have an account? </span>
				<span className="cursor-pointer font-semibold">Sign Up</span>
			</div>
		</div>
	);
}

export default Login;
