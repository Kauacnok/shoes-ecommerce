export default function Loading() {
	return (
		<main className="flex items-center justify-center w-screen h-screen">
      <section className="flex flex-col p-4 justify-center items-center w-4/5 h-4/5 bg-gray-50 rounded shadow relative md:flex-row md:gap-10">
        <div className="absolute inset-x-1/2 top-[-24px] translate-x-[-50%] w-60 px-2 py-2 bg-orange-400 rounded shadow-inner">
          <h1 className="w-full px-4 py-3 text-center text-white tracking-tight font-black"></h1>
        </div>
        <div className="flex flex-col bg-contain justify-center items-center h-1/2 py-4 border-b-2 border-gray-300 md:h-4/5 md:w-1/2 md:border-b-0 md:border-r-2">
          <div className="bg-gray-200 rounded w-full h-full md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px]"></div>
        </div>
        <div className="flex flex-col justify-start w-full h-1/2 mt-4 gap-10 md:h-4/5 md:w-1/2 md:justify-center">
	        <h1 className="text-2xl bg-gray-200 px-6 py-6 rounded text-center tracking-tight font-black text-zinc-800 md:text-4xl"></h1>
	        <div className="flex justify-evenly items-center w-full gap-5 md:justify-between md:w-[90%]">
	          <h3 className="text-xs px-6 bg-gray-200 rounded"><span className="text-lg font-bold mr-1"></span></h3>
						<div className="flex justify-center items-center gap-5">
							<button disabled className="w-6 h-6 bg-gray-200 rounded-full"></button>
							<p className="w-6 h-6 bg-gray-200 rounded"></p>
							<button disabled className="w-6 h-6 bg-gray-200 rounded-full"></button>
						</div>
	        </div>
	        <button className="bg-purple-500 px-4 py-5 rounded justify-self-center text-center text-white font-semibold hover:bg-purple-600 transition md:w-1/2"></button>
	      </div>	
      </section>
    </main>
	)
}