"use client"
import React from 'react'
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "../../styles/Busqueda.module.css";

const Page = () => {
  return <Layout
    makeHeader={() => <Header titulo="Administracion de bibliotecas" />}
    makeBody={
      () => <div>
        <title>Busqueda</title>
        <div className={styles.Contenedor}>
          <div className="Box1">
            <h1 >Busqueda</h1>
            <p className={styles.divisor}></p>
          </div>

          <div className="Box2">
            <form name="Formulario" className={styles.formulario}>
              <div name="SubConte" className={styles.SubConte}>
                <div className={styles.inputContainer}>
                  <input type="text" name="Ingresa la palabra clave" class={styles.input} required />
                  <label class={styles.placeholder}>Ingresa la palabra clave</label>
                </div>
                <div className={styles.inputContainer}>
                  <input type="text" name="Tipo de Recurso" class={styles.input} required />
                  <label class={styles.placeholder}>Tipo de Recurso</label>
                </div>
              </div>

              {/*Checkboxes*/}
              <div name="Busqueda" className={styles.Busqueda}>
                <p>Incluir en busqueda:</p>
                <div className={styles.Opciones}>
                  <label>
                    <input type="checkbox" className={styles.checkbox}></input>
                    <span>Titulo</span>
                  </label>
                  <label>
                    <input type="checkbox" className={styles.checkbox} ></input>
                    <span >Autor, Autores</span>
                  </label>
                  <label>
                    <input type="checkbox" className={styles.checkbox} ></input>
                    <span>Serie</span>
                  </label>
                  <label>
                    <input type="checkbox" className={styles.checkbox} ></input>
                    <span>ISBN</span>
                  </label>
                </div>
              </div>
              {/*Botones*/}
              <div className={styles.BoxBotones}>
                <button type="reset" className={styles.Botones}>Limpiar</button>
                <button type="submit" className={styles.Botones} onClick={() => router.push(buscarResultados)}>Buscar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page