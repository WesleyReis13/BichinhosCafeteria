import imagem1 from '../assets/brownie.jpg'
function BrowniePage() {
    return (<div>
    <h1>Brownie</h1>
   <div className='descProd'>
       <img src={imagem1} alt="" />
       <p className='descricao'>O brownie é uma sobremesa irresistível que encanta paladares ao redor do mundo com sua textura densa, sabor rico e indulgente e aroma reconfortante de chocolate. Originário dos Estados Unidos, o brownie é uma verdadeira delícia que conquistou seu lugar como uma das sobremesas mais amadas e reconhecíveis.</p>
   </div>
</div>
    )
}

export default BrowniePage;
