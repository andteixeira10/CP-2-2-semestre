import React from 'react';
import './App.css';
import './RegistroLogin.css';
import './EmpCan.css';
import './termos.css';
import './sobrenos.css';
import './match.css';
import './vagas.css';
import './fluxograma.css';
import './chat.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import PaginaInicial from './components/PaginaInicial/PaginaInicial';
import Login from "./components/Login/Login";
import Registro from "./components/Registro/Registro";
import AreaCandidato from "./components/AreaCandidato/AreaCandidato";
import AreaContratante from "./components/AreaContratante/AreaContratante";
import PerfilCandidato from "./components/PerfilCandidato/PerfilCandidato";
import PerfilContratante from "./components/PerfilContratante/PerfilContratante";
import VagasCandidato from "./components/VagasCandidato/VagasCandidato";
import VagasContratante from "./components/VagasContratante/VagasContratante";
import TermosEcondicoes from "./components/TermosEcondicoes/TermosEcondicoes";
import EsqueciMinhaSenha from "./components/EsqueciMinhaSenha/EsqueciMinhaSenha";
import SobreNos from "./components/SobreNos/SobreNos";
import Suporte from './components/Suporte/Suporte';
import Fluxograma from './components/Fluxograma/Fluxograma';
import Chat from './components/Chat/Chat';
import EmpCan from './components/EmpCan/EmpCan';
import Match from './components/Match/Match';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PaginaInicial/>}/> 
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Cadastro" element={<Registro/>}/>
        <Route exact path="/AreaCandidato" element={<AreaCandidato/>}/>
        <Route exact path="/AreaContratante" element={<AreaContratante/>}/>
        <Route exact path="/PerfilCandidato" element={<PerfilCandidato/>}/>
        <Route exact path="/PerfilContratante" element={<PerfilContratante/>}/>
        <Route exact path="/VagasCandidato" element={<VagasCandidato/>}/>
        <Route exact path="/VagasContratante" element={<VagasContratante/>}/>
        <Route exact path="/TermosEcondicoes" element={<TermosEcondicoes/>}/>
        <Route exact path="/SobreNos" element={<SobreNos/>}/>
        <Route exact path="/EsqueciMinhaSenha" element={<EsqueciMinhaSenha/>}/>
        <Route exact path="/Suporte" element={<Suporte/>}/>
        <Route exact path="/Fluxograma" element={<Fluxograma/>}/>
        <Route exact path="/Chat" element={<Chat/>}/>
        <Route exact path="/EmpCan" element={<EmpCan/>}/>
        <Route exact path="/Match" element={<Match/>}/>
      </Routes>
    </BrowserRouter>
  );
}
