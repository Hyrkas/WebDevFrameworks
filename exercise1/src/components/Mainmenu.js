import React from 'react'
import style from '/home/aikka/excercise1/src/components/Mainmenu.module.css'
import mese from '/home/aikka/excercise1/src/components/Mercedes-Benz_C_W206-7.jpg'



export default function Mainmenu () {
    return (
    <div
        className={style.background}>
               <div className={style.uutinen}> 
                     <img className={style.image} src={mese}/> 
                     <p className={style.paragraph}> <span>Autot|</span>  Mercedes-Benz julkaisi uuden C-sarjalaisen hybridin.</p> 
                     <a> Mercedes-Benz C-sarjan sedan ja farmari uudistuvat.
                         Odotetun, viidennen sukupolven ennakkomyynti on käynnistynyt! Luvassa on auto, joka 
                         mullistaa käsityksiä luokkansa turvallisuudesta ja mukavuudesta. Mukavuus,
                         liitettävyys, hallinta: monet jännittävät ja uudet kohokodat odottavat sinua! </a>
                         <div className={style.s}>Autot 16:48</div>
                        <p className={style.paragraph}> <span>Mielenosoitukset|</span>  Koronatoimia vastustava noin tuhannen 
                         ihmisen mielenosoitus siirtyy Eduskuntatalolta Esplanadin puistoon. </p>
                    <a>Noin tuhat ihmistä kokoontui mielenosoitukseen, jonka
                        poliisille ilmoitettu nimi on "Valinnanvapauden puolesta". </a>
                        <div className={style.s}>Kaupunki 16:17</div>
               </div>  
               
    </div>
    ) }