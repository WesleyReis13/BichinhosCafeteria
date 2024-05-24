import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function CarrinhoPage() {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h2>Seu Carrinho</h2>
            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.quantity} x R${item.price.toFixed(2)} = R${item.totalPrice.toFixed(2)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CarrinhoPage;
