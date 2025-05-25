"use client"

import Link from 'next/link';
import styles from './pestsandcritters.module.css';

export default function PestsAndCritters(){
return (
 <div className={styles.find}>

    <h2>Get Rid of Those<br />Pests and Critters<span className="highlight">!</span></h2>

    <h3>Tired of dealing with pests and critters? Let our experienced team eliminate the problem quickly and safely—so you can enjoy a pest-free home or business with peace of mind.</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/contact`}>Contact Us</Link>
    </div>
 
    <img src='/img/critters.webp' alt='Image of mice' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.85)"}} className='shader'></div>
 </div>
)};