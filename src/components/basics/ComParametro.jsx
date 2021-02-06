import React from 'react'

// props é SOMENTE LEITURA!!!!!
// Não é permitido alterações em constantes. Exemplo: props.titulo = "Outro Título"
// isso irá gerar um erro no projeto
export default props =>
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
        {/*<p>{1 +2 }</p>
        <p>{Array(10).fill(0)}</p>*/}
    </>