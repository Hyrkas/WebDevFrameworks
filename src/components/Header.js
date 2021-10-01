import React from 'react'
import styles from './Header.module.css';
import logo from '/home/aikka/excercise1/src/components/HS.png';



export default function Header () {
    return (

    <div>
    
     

     <div className={styles.container}> 
         <img src={logo}  alt= "kuva" />
           <div>Uutiset</div>
           <div>Lehdet</div>
           <div style={{backgroundColor: 'white', color: 'black', borderRadius: '5px', paddingLeft: '1mm', paddingRight: '1mm'}}>Tilaa</div>
           <div>Kirjaudu</div>
           <div>Hae</div>
           <div>Valikko</div>
     </div>
     



        </div>
        
       
       
        
        
       
        
       


       
    )
}