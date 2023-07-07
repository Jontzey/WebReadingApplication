import React, { useEffect, useState } from 'react';




function MangaNextBack(props) {

    const [currentManga, setCurrentManga] = useState([]);
    const [Chapters, setChapters] = useState([]);

    const lengthOfChapters = Chapters.length;
    const addOne = 1;

    const SafeChapters = lengthOfChapters + addOne;



    useEffect(() => {
        fetch(`http://localhost:4000/MangaLibrary/${props.Manga}`)
          .then((response) => response.json())
          .then((data) => {
            setCurrentManga(data);
            setChapters(data.Chapters)
          })
    },[])

    function handleClick1() {
        const currentId = props.id;
        const ChapterId = Number(currentId);
        
        const addOne = 1;
        const NewChapter = ChapterId + addOne;
        window.location.href = `/MangaLibrary/${props.Manga}/${NewChapter}`;
    }
    function handleClick2() {
        const currentId = props.id;
        const ChapterId = Number(currentId);
        
        const addOne = 1;
        const NewChapter = ChapterId - addOne;
        window.location.href = `/MangaLibrary/${props.Manga}/${NewChapter}`;
    }

    return ( <div style={{display:"flex", justifyContent:"center"}}>

    
                    <div style={{display:"flex",flexDirection:"row", alignItems:"center", position:"fixed", marginTop:"400px", width:"100%"}}>
                  
                     {
                        props.id > 1 &&
                        (
                        <div><button onClick={handleClick2} style={{height:"40px", width:"70px", backgroundColor:"lightgreen", marginLeft:"200px"}}>Prevoius</button></div>
                        )
                        
                    }      
                    {
                            Chapters.length > props.id &&
                            (
                            <div><button onClick={handleClick1} style={{height:"40px", width:"70px", backgroundColor:"lightgreen", marginLeft:"1400px", }}> Next </button></div>
                            )
                            
                    }
                    </div>
                   
                
               
         
        
    </div> );
}

export default MangaNextBack;