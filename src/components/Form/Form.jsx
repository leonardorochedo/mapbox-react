import React, { useState } from 'react';

import Zoom from 'react-reveal/Zoom';

import logo from '../../assets/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'

import './Form.css'
import { Map } from '../Map/Map';

export function Form() {

    const [address, setAddress] = useState('')

    function consultAPI() {
        console.log("Busca na API!")
    }

    function keyPress(e) {
        if (e.key == "Enter") {
            consultAPI()
        }
    }

    return (
        <div className='container'>
            <Zoom>
                <header>
                    <a href="home.persisinternet.com.br" target="_blank"><img src={logo} alt="Logo da Persis" /></a>
                </header>
                <div className="form">
                    <p>Descubra qual o melhor período seu agendamento!</p>
                    <div className="form-actions">
                        <input type="text" placeholder='Digite o endereço' onChange={(e) => setAddress(e.target.value)} onKeyUp={(e) => keyPress(e)} />
                        <button onClick={consultAPI}><AiOutlineSearch size={20} /></button>
                    </div>
                </div>
                <div className="result">
                    <Map />
                </div>
            </Zoom>
        </div>
    )
}