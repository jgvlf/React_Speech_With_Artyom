import Artyom from "artyom.js";
import React from "react";


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
            setTimeout(()=>{
                const selection = window.getSelection().toString().trim();
                speak(artyom, selection);
            }, 250);
        }, 250);
    }

    
    
    function speak(speaker, value){
        console.log(speaker);
        console.log(value);
        speaker.say(value,{
            onEnd:speaker.shutUp()
        });
    }

    document.addEventListener("mouseup", initializerSpeaker)

    return(
        <>
            <div id="text">
                {children}
            </div>
        </>
    );
}