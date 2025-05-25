"use client"
import { CSSProperties } from "react"
import styles from "./aboutus.module.css"
import Link from "next/link"
import Shader from "../../misc/Shader/Shader"

export default function AboutUs() {
  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
          <h4>About Us</h4>
            <h1>About Alert Termite<br /> <span className="underline">and Pest</span> CONTROL</h1>

            <p>With over 30 years of experience, Alert Termite and Pest CO. delivers trusted pest control services for homes and businesses. We handle everything from general pests to termites and critters with fair, honest, and professional care. Our mission is simple: to protect your property with safe, effective solutions and the reliability you deserve.</p>

            <Link className="main-link" href="/contact">Get a Quote</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/about.png" alt="image of a dead roach" className={styles.mainImg} />
            <Shader background="var(--primary-color)" opacity={.51} zIndex={100}/>
            <div className={styles.imgStyle}></div>
          </div>
        </div>
    </section>
  )
}
