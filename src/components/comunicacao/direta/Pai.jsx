import React from 'react'
import Filho from './Filho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <div>
        {/* Três métodos de pegar o sobrenome do Pai */}
        <Filho {...props}>Eduardo</Filho>
        <Filho sobrenome={props.sobrenome}>Alexandre</Filho>
        <Filho sobrenome="Lengler">Fernando</Filho>
    </div>