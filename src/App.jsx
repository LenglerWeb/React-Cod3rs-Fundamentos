import './App.css'
import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import ComFilhos from './components/basics/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basics/Repeticao'
import Condicional from './components/basics/Condicional'
import CondicionalComIf from './components/basics/CondicionalComIf'

export default (props) => (
    <div className="App">
        <Card titulo="#06 - Condicional v2" color="#FA6900">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>

        <Card titulo="#05 - Condicional v1" color="#F38630">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#04 - Repetição" color="#E0E4CC">
            <Repeticao />
        </Card>

        <Card titulo="#03 - Componente Com Filhas" color="#A7DBDB">
            <ComFilhos>
                <ul>
                    <li>Daniele</li>
                    <li>Nancy</li>
                    <li>Amanda</li>
                    
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente Com Parametro" color="#69D2E7">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#69D2E7">
            <Primeiro />
        </Card>

    </div>
);