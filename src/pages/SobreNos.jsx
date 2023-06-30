
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Header from "../components/sobreNos/Header/Header";
import Entrada from "../components/sobreNos/Entrada/Entrada";
import PriConteudo from "../components/sobreNos/PriConteudo/PriConteudo"
import SegConteudo from "../components/sobreNos/SegConteudo/SegConteudo"
import NossaEquipe from "../components/sobreNos/NossaEquipe/NossaEquipe"
import Footer from "../components/landingpage/footer/Footer";

function SobreNos() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <div >
            <Header />
            <Entrada />
            <PriConteudo />
            <SegConteudo />
            <NossaEquipe />
            <Footer />
        </div>
    );
}

export default SobreNos;
