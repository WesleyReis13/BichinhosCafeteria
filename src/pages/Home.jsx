import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Imagem1 from '../assets/brownie.jpg';
import Imagem2 from '../assets/cafe.jpg';
import Imagem3 from '../assets/cappuccino.jpg';
import Imagem4 from '../assets/tortaDeLimao.jpg';
import { CartContext } from '../CartContext';

function Home() {
    const { addToCart, isInCart } = useContext(CartContext);
    const [quantities, setQuantities] = useState({
        brownie: 1,
        cafe: 1,
        cappuccino: 1,
        tortaDeLimao: 1,
    });

    const navigate = useNavigate();

    const handleQuantityChange = (product, value) => {
        setQuantities({
            ...quantities,
            [product]: value,
        });
    };

    const products = [
        { id: 'brownie', name: 'Brownie', price: 5.00, image: Imagem1 },
        { id: 'cafe', name: 'Café', price: 3.00, image: Imagem2 },
        { id: 'cappuccino', name: 'Cappuccino', price: 4.50, image: Imagem3 },
        { id: 'tortaDeLimao', name: 'Torta de Limão', price: 6.00, image: Imagem4 },
    ];

    const handleAddToCart = (product) => {
        const quantity = quantities[product.id];
        addToCart({ ...product, quantity, totalPrice: product.price * quantity });
        alert('Produto Adicionado ao carrinho!');
    };

    const handleBuyNow = (product) => {
        if (!isInCart(product.id)) {
            handleAddToCart(product);
        }
        navigate('/carrinho');
    };

    return (
        <div id='container'>
            <h1>Bichinhos Cafeteria</h1>
            <div id='produtos'>
                {products.map(product => (
                    <div key={product.id} className="produto">
                        <img src={product.image} alt={product.name} />
                        <a href={`/descricao/${product.id}`}>{product.name}</a>
                        <p>R${product.price.toFixed(2)}</p>
                        <div className='precoProd'>
                            <label htmlFor="quantity">Quantidade:</label>
                            <select
                                id="quantity"
                                name="quantity"
                                value={quantities[product.id]}
                                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
                            <button onClick={() => handleBuyNow(product)}>Comprar Agora</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
