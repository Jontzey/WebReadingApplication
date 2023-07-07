import React from 'react';
import ReactPlayer from 'react-player';




function Home() {
    return (<div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <h1>Welcome to a Manga Lovers project!</h1>
        <h2>This is just a project for me as a developer to learn more about coding and aswell to make design</h2>
        <h3>Feel free to explore my simple project and give me tips and more so I can grow and get experience</h3>
        <img style={{width:"400px", borderRadius:"20px"}} src="https://media1.giphy.com/media/fhAwk4DnqNgw8/giphy.gif?cid=ecf05e47glb0uq05bxc4qje8r3b18yaol39wotjuzit5ztnn&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt='Error, img not found'/>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <h2>
            For now let me guide you following things are working
            </h2> 
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", gap:"3px"}}>
                <h3 style={{margin:"0"}}><li>Home =>
                as you see this page has content with simple text</li></h3>
                <h3 style={{margin:"0"}}><li>Mangas => pressing Mangas in header will navigate you to the url with current mangas and give you options to choose manga aswell chapters in it</li></h3>
                <h3 style={{margin:"0"}}> <li>About => Not finished but there will be text about the project and as well what packages may have been downloaded</li></h3>
               
            </div>
            
        </div>
        
        
    </div>  );
}

export default Home;