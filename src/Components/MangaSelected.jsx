import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MangaImage from './MangaImage';



function MangaSelected() {

    const {id} = useParams();
    const [CurrentManga, setCurrentManga] = useState({});
    const [getChapters, setChapters] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:4000/MangaLibrary/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setCurrentManga(data);
            setChapters(data.Chapters)
          })
          
      }, []);
    
    return (<div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginTop:"10px"}}>
            <img src={CurrentManga.MangaCover}/>
            <h3>{CurrentManga.MangaName}</h3>
            {
                getChapters.map((c) =>(
                    
                    <Link key={c.id} Chapter={c.Chapter} to={{pathname:`/MangaLibrary/${id}/${c.id}`}}>
                    

                    <div className='ChaptersContainer'>
                        <h3>Chapter</h3>
                        <h3>-{c.Chapter}</h3>
                    </div>
                    </Link>
                    
                ))
            }
            
            
        </div>
        
    </div>  );
}

export default MangaSelected;