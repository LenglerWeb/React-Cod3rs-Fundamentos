import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

 //import Primeiro from './components/Primeiro'
 //import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

ReactDOM.render(
    <div>
        <ComFilhos>
            <ul>
                <li>Daniele</li>
                <li>Nancy</li>
                <li>Amanda</li>
                <li>Wanda Lúcia</li>
            </ul>
        </ComFilhos>
        
         {/* <Primeiro />
         <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
         <ComParametro titulo="Opa" subtitulo="Epa" /> */}
    </div>,
    document.getElementById('root')
)