import styles from "./Cadastro2.module.css"
import { useState } from 'react';
import React from "react";

function Cadastro2({ formData, setFormData }) {


    return (
        <div className={styles.container}>

            <div className={styles.formulario}>

                <div className={styles.subtitulo}>
                    Queremos saber a sua idade!
                </div>
                <form >

                    <input name="date" type="date"
                        value={formData.date}
                        onChange={(event) =>
                            setFormData({ ...formData, date: event.target.value })} />

                </form>

            </div >
        </div >
    )
}

export default Cadastro2;