"use client"
import Link from "next/link"
import styles from "./reviews.module.css"
import reviewData from "@/app/(mainsite)/data/reviewData"
import Review from "./Review"
import Shader from "../../misc/Shader/Shader"

export default function Reviews() {

    const reviewElems = reviewData.map((data, i)=>{
        return <Review {...data} key={i} />
    })

  return (
    <section className={styles.section}>
      <h2>Don’t just listen to us, hear it from our happy clients<span className="highlight">!</span></h2>
        <div className={styles.reviewsWrapper}>
            {reviewElems}
        </div>
        <div className="center" style={{gap: "2rem"}}>
          <Link href="/contact" className="main-link">Contact Us</Link>
          <Link target="_blank" href="https://www.facebook.com/hector.cantu.524" className="main-link">Leave Review</Link>
        </div>

        <Shader opacity={.79} background="var(--secondary-color)" />
        <img src="/img/reviews2.webp" alt="image of a house" className="bg-img" />
    </section>
  )
}
