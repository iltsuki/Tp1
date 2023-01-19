// import React from 'react';
// import { useState, useRef } from 'react';

// const JeuDe = () => {
//     const [Face, setFace] = useState()
//     const imagesRef = useRef()
//     const handlclick = (e) => {
//         setFace(e.target.value)
//     }
//     const images = ["./images/face1.PNG", "./images/face2.PNG",
//         "./images/face3.PNG", "./images/face4.PNG",
//         "./images/face5.PNG", "./images/face6.PNG"
//     ]
//     const jouer = () => {
//         const fun = Math.floor(Math.random() * 6);
//         imagesRef.current.setAttribute("src", images[fun])
//     }

//     return (
//         <div>
//             <img src="images/Dé.PNG" />
//             <h1>Jeu de Dé...</h1>
//             <input type="number" min={1} max={6} onChange={handlclick} />
//             <h2>face:{Face} </h2>
//             <img src="images/vide.PNG" ref={imagesRef} />

//             <h2>nombre d'essais { } </h2>
//             <button onClick={jouer}>jouer</button>

//             <p>Bravo vous avez trouvez la face cachée.....</p>
//             <button onClick={() => this.initialiser()}>Initialiser</button>

//         </div>
//     )
// };

// export default JeuDe;

import React, { useState, useRef } from "react";
import "./index.css"

function JeuDe() {
    const images =
        ["./images/face1.PNG", "./images/face2.PNG",
            "./images/face3.PNG", "./images/face4.PNG",
            "./images/face5.PNG", "./images/face6.PNG"
        ];

    const [face, setFace] = useState("");
    const [compteur, setCompteur] = useState(0);
    const [sortie, setSortie] = useState(true);
    const [btn, setBtn ]= useState('')
    const imgRef = useRef();
    const inputRef = useRef();

    const handlechange = (e) => {
        setFace(Number(e.target.value));
        setBtn(e.target.value)
    };

    const handleclick = () => {
        const value = Math.floor(Math.random() * 6);
        setCompteur(compteur + 1);
        imgRef.current.setAttribute("src", images[value]);
        if (value + 1 === face) {
            setSortie(false)
        }
        inputRef.current.disabled = true
    };

    const initialiser = () => {
        setCompteur(0);
        setFace();
        setSortie(true);
        imgRef.current.setAttribute("src", "images/vide.PNG");
        
        inputRef.current.disabled = false;
        setBtn("")
    }
    return (
        <div className="div">
            <img className="img" src="images/Dé.PNG" alt="" style={{ width: "160px" }} />
            <h1>Jeu de Dé...</h1>
            <input type="number" ref={inputRef} max="6" min="1" onChange={handlechange} value = {btn}/>
            <h2>face : {face}</h2>
            <img className="img" src="images/vide.PNG" alt="" ref={imgRef} style={{ width: "60px" }} />
            <h2>nombre d'essais : {compteur}</h2>
            {sortie ? (
                <>
                    <button onClick={handleclick} disabled = {btn.length<1}>Jouer</button>
                </>
            ) : (
                <>
                    <h3>Bravo vous avez trouvez la face cachée..... </h3>
                    <button onClick={initialiser}>initialiser</button>
                </>
            )}
        </div>
    );
}

export default JeuDe;