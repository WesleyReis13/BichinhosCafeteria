import imagem1 from '../assets/cappuccino.jpg'
function CappuccinoPage() {
    return (
        <div>
        <h1>Cappucino</h1>
       <div className='descProd'>
           <img src={imagem1} alt="" />
           <p className='descricao'>O cappuccino é uma bebida quente e reconfortante que se tornou um clássico nas cafeterias de todo o mundo. Originária da Itália, essa deliciosa mistura de café espresso, leite vaporizado e espuma de leite conquistou paladares ao redor do globo.</p>
       </div>
       <div className='precoProd'>
           <h2>R$ 0,00</h2>
           <label for="quantity">Quantidade:</label>
           <input type="number" id="quantity" name="quantity" min="1" value="1"></input>
           <button>Adicionar ao Carrinho</button>
           <button>Comprar Agora</button>
       </div>
   </div>
    );
}

export default CappuccinoPage;