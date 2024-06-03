import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

function CarrinhoPage() {
    const { cartItems, removeItemFromCart, getTotalPrice, applyDiscount } = useContext(CartContext);
    const [couponCode, setCouponCode] = useState('');

    const handleApplyCoupon = () => {
        applyDiscount(couponCode);
    };

    return (
        <div>
            <h2>Carrinho de Compras</h2>
            <ul>
                {cartItems && cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - R${item.totalPrice.toFixed(2)} - Quantidade: {item.quantity}
                            <button onClick={() => removeItemFromCart(item.id)}>Excluir</button>
                        </li>
                    ))
                ) : (
                    <li>Nenhum item no carrinho</li>
                )}
            </ul>
            <div>
                <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Digite o código do cupom"
                />
                <button onClick={handleApplyCoupon}>Aplicar Cupom</button>
            </div>
            <h3>Valor Total: R${getTotalPrice().toFixed(2)}</h3>
        </div>
    );
}

export default CarrinhoPage;
