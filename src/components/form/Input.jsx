import React, { useState } from 'react'

export default (props) => {
    const [nome, setNome]= useState('Eduardo')
    return (
        <>
            <input type="text" value={nome} 
                onChange={e => setNome(e.target.value)} />
        </>
    );
};