import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BrowniePage from "./pages/BrowniePage";
import CafePage from './pages/CafePage';
import CappuccinoPage from './pages/CappuccinoPage';
import TortaDeLimaoPage from './pages/TortaDeLimaoPage';

function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/descricao/brownie" element={<BrowniePage />} />
                <Route path="/descricao/cafe" element={<CafePage />} />
                <Route path="/descricao/cappuccino" element={<CappuccinoPage />} />
                <Route path="/descricao/torta-de-limao" element={<TortaDeLimaoPage />} />
                </Routes>
            
            </BrowserRouter>
        </div>
    )
}

export default App