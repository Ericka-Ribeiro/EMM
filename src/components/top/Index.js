import React from 'react'
import Style from './Style.module.css'
import Img from '../img/background.png'
import Logo from '../img/Logo-Softex-PE_PNG.png'
import Sol from '../img/sol22.png'
const Init = () => {
    return (
    <>
        <div className={Style.cabecalho}>  
            <h1>Recife / Pernambuco</h1>
        </div>
        <div className={Style.header}>  
            <div className={Style.informacoes}>  
                <h1>AGORA</h1>
                <div className={Style.Temperatura}>
                    <div>
                        <h1>Ericka</h1>
                        <h1>Ericka</h1>
                    </div>
                    <img src={Sol}></img>
                </div>
                
            </div>
            <div className={Style.container4}>  
                <h1>Informações</h1>
            </div>
        </div>
        <div className={Style.cardVisual}>
            <div className={Style.card}>
                <h1>VELOCIDADE DO VENTO</h1>
                <p>Subtítulo</p>
            </div>
            <div className={Style.card}>
                <h1>DISTÂNCIA PARA AEROPORTO</h1>
                <p>Subtítulo</p>
            </div>
            <div className={Style.card}>
                <h1>NASCER DO SOL</h1>
                <p>05:00</p>
            </div>
            <div className={Style.card}>
                <h1>PÔR DO SOL</h1>
                <p>17:00</p>
            </div>
        </div>
        <div className={Style.footer}>
            <div className={Style.footerImages}>
                <img src={Logo}></img>
                <img src={Logo}></img>
                <img src={Logo}></img>
            </div>
            <h2>e-mail do ser humano</h2>
        </div>
    </>
  )
}
export default Init
