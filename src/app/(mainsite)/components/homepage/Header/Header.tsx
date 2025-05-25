"use client"
import Shader from "../../misc/Shader/Shader"
import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>
        <h1>Alert Termite and <br />Pes<span className="underline">t CONT</span>ROL</h1>

        <p>With over 30 years of experience, Alert Termite and Pest CO. provides honest, reliable, and professional pest control services you can trust. From general pests to termites and critters, we keep your home or business safe and pest-free.</p>
        

        <Link href="/contact" className="main-link">Get a Quote</Link>

        <img src="/img/header-bg.webp" alt="" className="bg-img" />
        <Shader opacity={.75} />

    </header>
  )
}
