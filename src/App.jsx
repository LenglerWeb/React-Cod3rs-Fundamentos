import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default (props) => (
    <div className="App">
        <Card titulo="#06 - Condicional v2">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>

        <Card titulo="#05 - Condicional v1">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#04 - Repetição">
            <Repeticao />
        </Card>
        <Card titulo="#03 - Componente Com Filhas">
            <ComFilhos>
                <ul>
                    <li>Daniele</li>
                    <li>Nancy</li>
                    <li>Amanda</li>
                    
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente Com Parametro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>

        



        {/* <ComFilhos>
            <ul>
                <li>Daniele</li>
                <li>Nancy</li>
                <li>Amanda</li>
                <li>Wanda Lúcia</li>
            </ul>
        </ComFilhos> */}

         {/* <Primeiro />
         <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
         <ComParametro titulo="Opa" subtitulo="Epa" /> */}
    </div>
)