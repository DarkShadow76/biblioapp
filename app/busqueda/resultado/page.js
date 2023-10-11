"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Layout from "../../../components/Layout"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import datos from "../../../components/library.json";
import styles from "../../../styles/busquedaResultado.module.css";

const LibrosPorPagina = 3

const obtenerIniciales = (titulo) => {
  const palabrasIgnoradas = ['por', 'de', 'un', 'la'];
  const palabras = titulo.split(' ').filter(palabra => !palabrasIgnoradas.includes(palabra.toLowerCase()));
  if (palabras.length === 1) {
    return palabras[0].substring(0, 2).toUpperCase();
  } else {
    return (palabras[0][0] + palabras[1][0]).toUpperCase();
  }
};

const Page = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(Math.ceil(datos.length / LibrosPorPagina));
  const [busqueda, setBusqueda] = useState("");

  const datosFiltrados = datos.filter(item => {
    const palabrasBusqueda = busqueda.toLowerCase().split(' ');
    return palabrasBusqueda.every(palabra => item.titulo.toLowerCase().includes(palabra));
  });

  const librosEnPaginaActual = datosFiltrados.slice((paginaActual - 1) * LibrosPorPagina, paginaActual * LibrosPorPagina);

  const avanzarPagina = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const retrocederPagina = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const router = useRouter()
  let volverBusqueda = '/busqueda'
  let verReservasA = '/AlumnoP'
  useEffect(() => {
    setTotalPaginas(Math.ceil(datosFiltrados.length / LibrosPorPagina));
  }, [busqueda]);

  const Lista = librosEnPaginaActual.map((libro, Lindex) => (
    <div className={styles.libro} key={libro.ISBN13}>
      <div className={styles.libro_cabecera}>
        <div className={styles.circulo_iniciales}>
          {obtenerIniciales(libro.titulo)}
        </div>
        <h2>{libro.titulo}</h2>
      </div>
      <div className={styles.libro_imagen}>
        <img
          src={libro["imagen-portada-url"]}
          alt={`Portada de ${libro.titulo}`}
        />
      </div>
      <div className={styles.libro_detalle}>
        <p><b>ISBN:</b> {libro.ISBN}</p>
        <p><b>Autor:</b> {libro.autor}</p>
        <p><b>Editor:</b> {libro.editorial}</p>
      </div>
      <div className='AEAEAEA'>
        <div className={styles.buttonLibro} key={Lindex}>
          <Link href="/libros/[id]" as={"/libros/" + libro.ISBN13} passHref>
            <button id={styles.libroButton}>Reservar</button>
          </Link>
        </div>
      </div>
    </div>
  ));

  return <Layout
    makeHeader={() => <Header titulo="Administracion de bibliotecas" />}
    makeBody={
      () => <div className={styles.main_content}>
        <div className={styles.header}>
          <h1 className={styles.titulo}>Biblioteca</h1>
          <button id={styles.volverBuscar} onClick={() => router.push(volverBusqueda)}>Volver a buscar</button>
        </div>
        <div className={styles.divisor}></div>

        <div className={styles.debajoDividor}>
          <p className={styles.subTitulo}>Resultados de la búsqueda:</p>
          <button id={styles.verReservas} onClick={() => router.push(verReservasA)}>Ver mis reservas</button>
        </div>
        <div className={styles.listaLibros}>
          {librosEnPaginaActual.length > 0 ? Lista : <p>No se encontraron libros con esa búsqueda.</p>}
        </div>
        <div className={styles.paginasButton}>
          <button className={styles.paginasBotones} onClick={retrocederPagina} disabled={paginaActual === 1}>Anterior</button>
          <button className={styles.paginasBotones} onClick={avanzarPagina} disabled={paginaActual === totalPaginas}>Siguiente</button>
          <p>Página {paginaActual} de {totalPaginas}</p>
        </div>
      </div>
    }
    makeFooter={() => <Footer />}
  />
};

export default Page;