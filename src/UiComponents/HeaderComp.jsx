import React, { useState } from 'react';
import { Link } from 'react-router-dom';





function Header() {
    // Is hovered state over choosen header item
    const [isHoveredHome, setIsHoveredHome] = useState(false);
    const [isHoveredMangas, setIsHoveredMangas] = useState(false);
    const [isHoveredAbout, setIsHoveredAbout] = useState(false);

    const [changeHeaderHome, setChangeHeaderHome] = useState(false);
    const [changeHeaderMangas, setChangeHeaderMangas] = useState(false);
    const [changeHeaderAbout, setChangeHeaderAbout] = useState(false);

    function testing(event) {
        
        if(event.target.id === "homeHeader")
        {
             // change event classname!
            setChangeHeaderHome(true);
            setChangeHeaderAbout(false);
            setChangeHeaderMangas(false);

            // depending what is hovered open the right div!
            setIsHoveredHome(true);
            setIsHoveredMangas(false);
            setIsHoveredAbout(false);
        }
        else if (event.target.id === "mangasHeader")
        {
            // change event classname!
            setChangeHeaderHome(false);
            setChangeHeaderAbout(false);
            setChangeHeaderMangas(true);

             // depending what is hovered open the right div!
            setIsHoveredMangas(true);
            setIsHoveredHome(false)
            setIsHoveredAbout(false);
        }
        else if (event.target.id === "aboutHeader")
        {
            // change event classname!
            setChangeHeaderHome(false);
            setChangeHeaderAbout(true);
            setChangeHeaderMangas(false);

            // depending what is hovered open the right div!
            setIsHoveredAbout(true);
            setIsHoveredMangas(false);
            setIsHoveredHome(false)
        }
        else if(event.target.id === "headerContainer")
        {
            setIsHoveredAbout(false);
            setIsHoveredMangas(false);
            setIsHoveredHome(false)
        }

    }
    function testing2(event) {
       
        if(event.target.id === "homeHeader")
        {

            setIsHoveredHome(true);
            setIsHoveredMangas(false);
            setIsHoveredAbout(false);
        }
        else if (event.target.id === "mangasHeader")
        {
            setIsHoveredMangas(true);
            setIsHoveredHome(false)
            setIsHoveredAbout(false);
        }
        else if (event.target.id === "aboutHeader")
        {
            setIsHoveredAbout(true);
            setIsHoveredMangas(false);
            setIsHoveredHome(false)
        }
        else if(event.target.id === "headerContainer")
        {
            setIsHoveredAbout(false);
            setIsHoveredMangas(false);
            setIsHoveredHome(false)
        }
        
    }
    function extraHeaderDivEnter(event) {
        if(event.target.id === "test")
        {
            

            setIsHoveredHome(true)
            setIsHoveredAbout(false);
            setIsHoveredMangas(false);
        }
        if(event.target.id === "test2")
        {
            setIsHoveredMangas(true);
            setIsHoveredHome(false)
            setIsHoveredAbout(false);
        }
        if(event.target.id === "test3")
        {
            setIsHoveredAbout(true);
            setIsHoveredHome(false)
            setIsHoveredMangas(false);
        }
    }
    function extraHeaderDivLeave(event){
        if(event.target.id === "test")
        {
            setChangeHeaderHome(false);
            setChangeHeaderMangas(false);
            setChangeHeaderAbout(false);

            setIsHoveredHome(false)
            setIsHoveredAbout(false);
            setIsHoveredMangas(false);
        }
        if(event.target.id === "test2")
        {
            setChangeHeaderHome(false);
            setChangeHeaderMangas(false);
            setChangeHeaderAbout(false);

            setIsHoveredMangas(false);
            setIsHoveredHome(false)
            setIsHoveredAbout(false);
        }
        if(event.target.id === "test3")
        {
            setChangeHeaderHome(false);
            setChangeHeaderMangas(false);
            setChangeHeaderAbout(false);

            setIsHoveredAbout(false);
            setIsHoveredHome(false)
            setIsHoveredMangas(false);
        }
    }
    function handleClick(event) {
        if(event.target.id === "homeHeader")
        {
            window.location.href = '/home';
        }
        else if (event.target.id === "mangasHeader")
        {
            window.location.href = '/Mangas';
        }
        else if (event.target.id === "aboutHeader")
        {
          
        }
      
    }
    return ( <div style={{position:"sticky", top:"-1px", margin:"0"}}>
        <div id='headerContainer' onMouseEnter={testing} onMouseLeave={testing2} className='headerStyleItems'>

                {
                !changeHeaderHome ? ( <div id='homeHeader' onMouseEnter={testing}  className='headerStyleItemsDiv'>
                Home
                </div>)
                :
                (<div id='homeHeader' onClick={handleClick} onMouseEnter={testing}  className='headerStyleItemsChangeUp'>
                Home
                </div>)
                }

                {
                    !changeHeaderMangas ? 
                (<div id='mangasHeader' onMouseEnter={testing} onMouseLeave={testing2} className='headerStyleItemsDiv'>
                Mangas
                </div>)
                :
                (<div id='mangasHeader' onClick={handleClick}  onMouseEnter={testing} onMouseLeave={testing2} className='headerStyleItemsChangeUp'>
                Mangas
                </div>)
                }

                {
                    !changeHeaderAbout ?
                (<div id='aboutHeader' onMouseEnter={testing} onMouseLeave={testing2} className='headerStyleItemsDiv'>
                About
                </div>)
                :
                (<div id='aboutHeader' onClick={handleClick}  onMouseEnter={testing} onMouseLeave={testing2} className='headerStyleItemsChangeUp'>
                About
                </div>)
                }
               
                
                

                
        </div>
        {
            isHoveredHome ? 
            (
                <div style={{display:"flex", justifyContent:"center" ,backgroundColor:"beige", borderTop:"solid 0.5px"}} id='test' onMouseEnter={extraHeaderDivEnter} onMouseLeave={extraHeaderDivLeave}>
                    <div onMouseLeave={extraHeaderDivLeave} id='test' style={{display:"flex", flexDirection:"column", alignItems:"center", width:"400px"}}>
                        <Link  style={{textDecoration:"none", color:"black"}}><h2 className='underHeaderItems'>Latest News</h2></Link>
                        <Link style={{textDecoration:"none", color:"black"}}><h2 className='underHeaderItems'>Our Social Media</h2></Link>
                        <Link style={{textDecoration:"none", color:"black", marginBottom:"10px"}}><h2 className='underHeaderItems'>Contact us</h2> </Link>
                        
                    </div>
                     
                </div>
            ) 
            :isHoveredMangas ?
            (
                <div style={{display:"flex", justifyContent:"center",backgroundColor:"beige", borderTop:"solid 0.5px"}} onMouseEnter={extraHeaderDivEnter} onMouseLeave={extraHeaderDivLeave} id='test2'>
                    <div id='test2' onMouseLeave={extraHeaderDivLeave} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <h2 className='underHeaderItems'>Latest Mangas</h2>
                        <h2 className='underHeaderItems'>Our Social Media</h2> 
                    </div>
                </div>
            )
            : isHoveredAbout ?
            (
                <div style={{display:"flex", justifyContent:"center",backgroundColor:"beige", borderTop:"solid 0.5px"}} onMouseEnter={extraHeaderDivEnter} onMouseLeave={extraHeaderDivLeave} id='test3'> <div  id='test3' onMouseLeave={extraHeaderDivLeave}><h1>This is About page</h1>
                    </div> </div>
            )
            :
            (
                <div style={{display:"flex", justifyContent:"center"}} id='test4'></div>
            )
        }
       
    </div> );
}

export default Header;