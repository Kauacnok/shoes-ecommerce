import Image from 'next/image'
import Stripe from 'stripe'

import { Price } from '../components/Price'

export default async function Home() {
  const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!
  const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15'
  })

  const product = await stripe.products.retrieve('prod_Nnt1wE3iI1kkJM')
  const price = await stripe.prices.retrieve('price_1N2HFWCMjUMN8NDSKFMAHWeQ')
  
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <section className="flex flex-col p-4 justify-center items-center w-4/5 h-4/5 bg-gray-50 rounded shadow relative">
        <div className="absolute inset-x-1/2 top-[-24px] translate-x-[-50%] w-60 px-2 py-2 bg-orange-400 rounded shadow-inner">
          <h1 className="w-full text-center text-white tracking-tight font-black">OFERTA EXCLUSIVA</h1>
        </div>
        <div className="flex flex-col justify-center items-center h-1/2 py-4 border-b-2 border-gray-300">
          <Image src={`${product.images[0]}`} alt="Imagem mostrando o tênis branco com símbolo da nike chamado de Nike Shoes Air Force 1" width={100} height={100} className="w-full h-full" />
        </div>
        <Price productName={product.name!} price={price.unit_amount!} STRIPE_SECRET_KEY={STRIPE_SECRET_KEY} />
      </section>
    </main>
  )
}
