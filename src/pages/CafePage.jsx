import imagem1 from '../assets/cafe.jpg'
function CafePage() {
    return (
        <div>
        <h1>Café</h1>
       <div className='descProd'>
           <img src={imagem1} alt="" />
           <p className='descricao'>O café é uma bebida aromática e estimulante que se destaca como uma das mais apreciadas em todo o mundo. Originário das regiões tropicais da África, Ásia e América Latina, o café é uma parte fundamental da cultura e da rotina diária de milhões de pessoas ao redor do globo.</p>
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

export default CafePage;