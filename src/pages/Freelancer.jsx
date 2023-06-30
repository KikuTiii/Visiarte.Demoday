
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Header from "../components/sobreNos/Header/Header";
import Entrada from "../components/Freelancer/Entrada/Entrada";
import Categorias from "../components/Freelancer/Categorias/Categorias";
import Footer from "../components/landingpage/footer/Footer";
import Comunidade from "../components/Freelancer/Comunidade/Comunidade";
import Usuarios from "../components/Freelancer/Usuarios/Usuarios"

function Freelancer() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <div >
            <Header />
            <Entrada />
           <Categorias />
           <Comunidade />
           <Usuarios />
            <Footer />
        </div>
    );
}

export default Freelancer;
