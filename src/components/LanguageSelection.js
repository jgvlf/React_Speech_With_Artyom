import React, { useState } from "react";
import { Speaker } from "./Speaker";

export function LanguageSelection(){
    const [value, setValue] = useState("pt-PT");

    function getTagValue(){
        var element = document.getElementById("language");
        var result = element.value;
        setValue(result);
}
const words = ["Olá", "Manual Virtual", "Parafusadeira", "Furadeira", "Esmiril", "Motor de parabrisa"]
const [word, setWord] = useState(words[0])

function selectWord(){
    setWord(words[Math.floor(Math.random()*words.length)])
}
    return(
        <>
            <Speaker value={value} text={word}>
                <h1>Ich Will</h1>
                <h1>Bem Vindo ao Manual Virtual da Bosch.</h1>
                <ul>
                    <li>Informações Técnicas.</li>
                    <li>Informações importantes antes do uso.</li>
                    <li>Montagem.</li>
                    <li>Modo de utilização.</li>
                    <li>Modo de utilização.</li>
                </ul>
                <div>
                    <h2>
                        Technical Informations.
                    </h2>
                    <p>
                        The search for a motive is on after 7 killed in Northern California, the state’s third mass shooting in three days.
                    </p>
                    <p>
                        A professional tools, BOSCH standard.
                    </p>
                </div>
                <div>
                    <h2>
                        Asamblea.
                    </h2>
                    <p>
                        Nuevo Servicio 012 de Información y Atención al Ciudadano El Servicio 012 de la Comunidad de Madrid incorpora nuevos canales de atención, y lanza una nueva plataforma que ofrece servicios de información personalizada.
                    </p>
                    <p>
                        Usar responsablemente.
                    </p>
                </div>
            </Speaker>
            <button onClick={selectWord}>Press Me</button>
            <button onClick={()=>{setWord("")}}>Reset</button>
            <select name="language" id="language" defaultValue={"pt-PT"} onChange={getTagValue}>
                <option value="pt-PT">Português (Brasil)</option>
                <option value="es-ES">Espanhol (Espanha)</option>
                <option value="en-US">Inglês (EUA)</option>
                <option value="de-DE">Alemão (Alemanha)</option>
            </select>
        </>
        )
}