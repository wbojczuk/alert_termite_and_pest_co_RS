import Link from 'next/link';
import styles from './aboutcontent.module.css';

export default function AboutContent(){
return (
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h4>Who We Are</h4>
        <h2>About Us</h2>
        <p>Alert Termite and Pest CO. has proudly served the Lower Valley for over 30 years, offering trusted pest control solutions in Brownsville, Harlingen, Laguna Vista, Los Fresnos, and South Padre Island. With a focus on fairness, honesty, and professionalism, we’ve helped more than 250 satisfied clients keep their homes and businesses free from fleas, ticks, roaches, spiders, mice, rats, and termites. We believe in doing the job right the first time—with clear communication, safe practices, and dependable service. Our mission is simple: to keep insects and critters at bay, under control, so you can enjoy a cleaner, safer space year-round.</p>
        <Link className='main-link' href={"/contact"}>Get a Quote</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/aboutcontent.webp" alt="image of the work truck" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};