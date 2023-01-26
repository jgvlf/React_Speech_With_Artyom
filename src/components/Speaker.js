import React from "react";
import SoundSpeak from "../assets/img/speaker.svg";
import Artyom from "artyom.js";


export function Speaker({children, value}){
    
    function initializerSpeaker(){
        const artyom = new Artyom();
        console.log(value);
        setTimeout(()=>{
            artyom.initialize({
                lang: value,
                continuous: false,
                soundex: true,
                debug: true,
            }).then((result) => {
                console.log("Artyom has been succesfully initialized");
            }).catch((err) => {
                console.error("Artyom couldn't be initialized: ", err);
            });
            const selection = window.getSelection().toString().trim();
            speak(artyom, selection);
        }, 500);
    }
    
    function speak(speaker, value){
        console.log(speaker);
        console.log(value);
        speaker.say(value);
    }
    return(
        <>
            <div id="text">
                {children}
            </div>
            <div>
                <img src={SoundSpeak} alt="Clique para escutar" width={100} height={100}
                onClick={initializerSpeaker}>

                </img>
            </div>
        </>
    );
}