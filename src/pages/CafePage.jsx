import React from 'react';
import { Link } from 'react-router-dom';
import imagemCafe from '../assets/cafe.jpg';

function CafePage() {
    return (
        <div>
            <h1>Café</h1>
            <div className='descProd'>
                <img src={imagemCafe} alt="" />
                <p className='descricao'>O café é uma bebida aromática e estimulante que se destaca como uma das mais apreciadas em todo o mundo. Originário das regiões tropicais da África, Ásia e América Latina, o café é uma parte fundamental da cultura e da rotina diária de milhões de pessoas ao redor do globo.</p>
            </div>
        </div>
    );
}

export default CafePage;
