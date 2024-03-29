import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

 const Hero = () => {
  return (
     <div className={css.container}>    
         {/* left side */}
         <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>

            <div className={css.text2}>
                <span>Tendy Collection</span>
                <span>Seedily say has suitable disposal and boy. Exercise joy man children rejected. </span>
            </div>
         </div>



         {/*middle side hero img b*/}
         <div className={css.wrapper}>
              <div className={css.blueCircle}></div>
              <img src={HeroImg} alt="..." width={600} />
              <div className={css.cart2}>
                <RiShoppingBagFill/>

                <div className={css.signup}>
                    <span>Best Signup Offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
             </div>
         </div>
         {/* right side */}
         <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className={css.customers}>
                <span>100k</span>
                <span>Monthly Traffic</span>
            </div>
         </div>
     </div>
 )
}
 export default Hero