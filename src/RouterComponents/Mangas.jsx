import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Mangas() {

    const [Mangas, setMangas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/MangaLibrary").then((response) => response.json()).then((data) => setMangas(data))
    }, [])

 
    return ( <div style={{height:"100vh", display:"flex", flexDirection:"column", alignItems:"center"}}>
        {
            Mangas.map((m) => (
                <Link key={m.id} to={{pathname:`/MangaLibrary/${m.id}`}} >
                <div className='MangaSelection'>
                    <img style={{width:"100px", height:"150px"}}  src={m.MangaCover}/>
                    <h3>{m.MangaName}</h3>
                </div>
                </Link>
                
            ))
        }
    </div> );
}

export default Mangas;