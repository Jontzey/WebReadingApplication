import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MangaNextBack from '../UiComponents/MangaNextBack';



function MangaImage() {

    let [Chapter, setChapter] = useState({});
    let [Manga, setManga] = useState([]);
    const {id,id2} = useParams();


    useEffect(() => {
        fetch(`http://localhost:4000/MangaLibrary/${id}`)
          .then((response) => response.json())
          .then((data) => 
          {
            setManga(data);
            const chapter = data.Chapters.find((c) => c.Chapter === parseInt(id2));
            setChapter(chapter);

            console.table(chapter);

          })
      }, [id]);

    return ( <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", backgroundColor:"black"}}>
            <MangaNextBack
            id={id2}
            Manga={id}
            />
            <img style={{maxWidth:"800px"}} src={Chapter.img} alt="" />
    </div> );
}

export default MangaImage;