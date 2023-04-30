'use client'

import { useState } from 'react'
import Stripe from 'stripe'
import { MinusCircle, PlusCircle, CircleNotch } from 'phosphor-react'
import Balancer from 'react-wrap-balancer'

interface PriceProps {
	productName: string,
	price: number,
	STRIPE_SECRET_KEY: string
}

export function Price({ productName, price, STRIPE_SECRET_KEY }: PriceProps) {
	const [productQuantity, setProductQuantity] = useState(1)
	const [productPrice, setProductPrice] = useState(price / 100)
	const [isLoading, setIsLoading] = useState(false)

	function increaseQuantityProduct() {
		setProductQuantity(state => state + 1)
	}

	function decreaseQuantityProduct() {
		setProductQuantity(state => state - 1)
	}

	async function handleCheckout() {
		setIsLoading(true)
		const stripe = new Stripe(STRIPE_SECRET_KEY, {
    	apiVersion: '2022-11-15'
  	})

  	const price = await stripe.prices.retrieve('price_1N2HFWCMjUMN8NDSKFMAHWeQ')

  	const session = await stripe.checkout.sessions.create({
  		payment_method_types: ['card'],
  		line_items: [
  			{
  				price: price.id,
  				quantity: productQuantity
  			}
  		],
  		mode: 'payment',
  		success_url: 'http://localhost:3000/success/',
  		cancel_url: 'http://localhost:3000/cancel/'
  	})

  	window.location.href = session.url!
	}

	return (
		<>
			<div className="flex flex-col justify-start w-full h-1/2 mt-4 gap-10">
        <h1 className="text-2xl text-center tracking-tight font-black text-zinc-800"><Balancer>{productName}</Balancer></h1>
        <div className="flex justify-evenly items-center w-full gap-5">
          <h3 className="text-xs"><span className="text-lg font-bold mr-1">R$</span>{(productPrice * productQuantity).toFixed(2)}</h3>
					<div className="flex justify-center items-center gap-5">
						{ productQuantity == 1 ? <button disabled><MinusCircle size={24} color="#9CA3AF" weight="bold" /></button> : <button onClick={decreaseQuantityProduct}><MinusCircle size={24} color="#EF4444" weight="bold" /></button> }
						<p>{productQuantity}</p>
						{ productQuantity == 10 ? <button disabled><PlusCircle size={24} color="#9CA3AF" weight="bold" /></button> : <button onClick={increaseQuantityProduct}><PlusCircle size={24} color="#10B981" weight="bold" /></button> }
					</div>
        </div>
        { isLoading ? <button className="bg-purple-500 flex justify-center items-center px-4 py-2 rounded justify-self-center text-center text-white font-semibold hover:bg-purple-600 transition" disabled><CircleNotch size={24} color="#EFEFEF" weight="bold" className="animate-spin" /></button> : <button className="bg-purple-500 px-4 py-2 rounded justify-self-center text-center text-white font-semibold hover:bg-purple-600 transition" onClick={handleCheckout}>Comprar</button> }
      </div>	
		</>
	)
}