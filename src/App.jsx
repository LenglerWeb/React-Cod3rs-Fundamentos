/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import ComFilhos from './components/basics/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basics/Repeticao'
import Condicional from './components/basics/Condicional'
import CondicionalComIf from './components/basics/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        
        <div className="Cards">

        <Card titulo="#11 - Mega-Sena" color="#011f4b">
            <Mega qtdeNumeros={8}></Mega>
        </Card>

        <Card titulo="#10 - Contador" color="#D96459">
            <Contador></Contador>
        </Card>

        <Card titulo="#09 - Input" color="#588C73">
            <Input></Input>
        </Card>

        <Card titulo="#08 - Comunicação Indireta" color="#E94C6F">
            <Super></Super>
        </Card>

        <Card titulo="#07 - Comunicação Direta" color="#28ABE3">
            <Pai sobrenome="Lengler"></Pai>
        </Card>

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
    </div>
);