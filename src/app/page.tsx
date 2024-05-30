import React from "react";

import Link from "next/link";
import styles from "./page.module.scss";
import ImageModule from "../../components/images_section/images";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <p className={styles.headingText}> hey, I'm Alex 👋</p>
        <p className={styles.subheadingText}>student software engineer</p>
        <p className={styles.subheadingText}>real estate agent</p>
      </div>
      <div className={styles.body}>
        <p className={styles.bodyText}>
          I am a junior pursuing a degree in Computer Science at Brown
          University. This summer, I will be joining{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://www.blackrock.com/us/individual/about-us/about-blackrock?cid=ppc:blk_us:cnr_us_br_core_debate_na_exact_ol:google:brand_nonprod:ol&gad_source=1&gclid=CjwKCAjwr7ayBhAPEiwA6EIGxJWx3PUnyIfnBkTPO5nv7Zw2gibnUQoc_s3XV77a62t8KvbJvloNWBoCl9kQAvD_BwE&gclsrc=aw.ds"
          >
            BlackRock
          </Link>{" "}
          as a software engineer intern. Previously, I interned at a{" "}
          <Link
            target="_blank"
            className={styles.link}
            href="https://bostonfusion.com/"
          >
            defense-contractor
          </Link>{" "}
          as a deep learning research programmer and at a medical tech{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://bostonmds.com/"
          >
            startup
          </Link>{" "}
          as a data analyst.
        </p>
        <div className={styles.headshot}>
          <ImageModule imagePath="./assets/profile_pic_fun.jpg" />
        </div>

        <p className={styles.bodyText}>
          My main focus these days is two-fold{" "}
          <span className={styles.bolded}>{"(1)"}</span> technical recruiting
          for a full time position and{" "}
          <span className={styles.bolded}>{"(2)"}</span> learning to build a
          startup within the real estate realm as a complement to my experience
          as a licensed salesperson. I work in real estate outside of my
          technical career.
        </p>
        <div className={styles.bodyText}>
          When I have time to spare, I love to play{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://www.youtube.com/watch?v=pMJ0-1GGf5k&ab_channel=penabaza"
          >
            <div className={styles.tennis}>tennis</div>
          </Link>
          ,{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://www.maangchi.com/"
          >
            <div className={styles.cook}>cook</div>
          </Link>{" "}
          fancy meals, and{" "}
          <Link
            className={styles.link}
            target="_blank"
            href="https://www.youtube.com/watch?v=6OIsdQXNC24&ab_channel=GogginsMindset-FANACCOUNT"
          >
            <div className={styles.languages}>workout</div>
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
