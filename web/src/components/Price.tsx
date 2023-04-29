'use client'

import { useState } from 'react'
import { MinusCircle, PlusCircle } from 'phosphor-react'

interface PriceProps {
	price: number
}

export function Price({ price }: PriceProps) {
	const [productQuantity, setProductQuantity] = useState(1)
	const [productPrice, setProductPrice] = useState(price / 100)

	function increaseQuantityProduct() {
		setProductQuantity(state => state + 1)
	}

	function decreaseQuantityProduct() {
		setProductQuantity(state => state - 1)
	}

	return (
		<>
			<h3 className="text-xs"><span className="text-lg font-bold mr-1">R$</span>{(productPrice * productQuantity).toFixed(2)}</h3>
			<div className="flex justify-center items-center gap-5">
				{ productQuantity == 1 ? <button disabled><MinusCircle size={24} color="#9CA3AF" weight="bold" /></button> : <button onClick={decreaseQuantityProduct}><MinusCircle size={24} color="#EF4444" weight="bold" /></button> }
				<p>{productQuantity}</p>
				{ productQuantity == 10 ? <button disabled><PlusCircle size={24} color="#9CA3AF" weight="bold" /></button> : <button onClick={increaseQuantityProduct}><PlusCircle size={24} color="#10B981" weight="bold" /></button> }
			</div>
		</>
	)
}