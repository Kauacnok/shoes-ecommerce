export default function Loading() {
	return (
		<main className="flex items-center justify-center w-screen h-screen">
      <section className="flex flex-col p-4 justify-center items-center w-4/5 h-4/5 bg-gray-50 rounded shadow relative gap-10">
      	<div className="flex justify-center items-center gap-5">
      		<h1 className="bg-gray-200 rounded w-full text-center text-zinc-800 tracking-tight font-black"></h1>	
      		<p className="bg-gray-200 rounded-full p-8"></p>
      	</div>
        <p className="bg-gray-200 rounded"></p>
      </section>
    </main>
	)
}