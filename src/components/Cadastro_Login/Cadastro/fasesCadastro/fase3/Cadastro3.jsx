import styles from "./Cadastro3.module.css"
import { useState } from 'react';
import React from "react";

function Cadastro3({formData, setFormData}) {

   
    return (
        <div className={styles.container}>

            <div className={styles.formulario}>

            <div className={styles.subtitulo}>
                    Precisamos de um usuário para te identificar!
                </div>

                <form >
                    <input name="user" type="text" placeholder="NOME DE USUÁRIO" 
                    value={formData.user}
                    onChange={(event ) => 
                    setFormData({...formData, user:event.target.value})}/>

                    <input name="name" type="text" placeholder="NOME COMPLETO" 
                    value={formData.name}
                    onChange={(event ) => 
                    setFormData({...formData, name:event.target.value})}/>
                
           
        </form>

           </div >

        </div >
    )
}

export default Cadastro3;