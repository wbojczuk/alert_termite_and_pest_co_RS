"use client"

import Link from 'next/link';
import styles from './takecareofit.module.css';

export default function TakeCareOfIt(){
return (
 <div className={styles.find}>

    <h2>Let Us Take Care of it today<span className="highlight">!</span></h2>

    <h3>Whether you're dealing with ants, termites, rodents, or other unwanted pests, Alert Termite and Pest CO. is here to help—fast. With over 30 years of trusted experience, we offer prompt, professional, and effective solutions to keep your home or business pest-free. Don’t let the problem get worse—reach out today and let our reliable team handle it with care and expertise.</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/contact`}>Contact Us</Link>
    </div>
 
    <img src='/img/takecareofit.webp' alt='Image of work truck' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.80)"}} className='shader'></div>
 </div>
)};