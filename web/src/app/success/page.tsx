'use client'

import Link from 'next/link'
import { CheckCircle } from 'phosphor-react'

export default function Success() {
	return (
		<main className="flex items-center justify-center w-screen h-screen">
      <section className="flex flex-col p-4 justify-center items-center w-4/5 h-4/5 bg-gray-50 rounded shadow relative gap-10">
      	<div className="flex justify-center items-center gap-5">
      		<h1 className="w-full text-center text-zinc-800 tracking-tight font-black">Pagamento realizado com sucesso</h1>	
      		<CheckCircle size={32} color="#10B981" weight="bold" />
      	</div>
        <p className="underline"><Link href="/">Clique aqui para voltar para a página inicial</Link></p>
      </section>
    </main>
	)
}