import React from 'react'

//============================================ Importando CSS como styles ============================================
import styles from "./css/ComponentModelo.css" // [1] - mude o diretório do css do component.
//====================================================================================================================

function ComponentModelo() { //[2] - mude o nome do component para ser exportado.
  return (
    <div>
        <h1>Component teste!!</h1>
    </div>
  )
}

export default ComponentModelo //[3] - O nome do export deve ter o mesmo no passo 2!!