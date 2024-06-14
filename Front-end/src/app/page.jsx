import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./MSME-Logo.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
        Revolutionizing MSMEs with Ethereal Tech Alchemy
        </h1>
        <p className={styles.desc}>
        Elevating small businesses through technology, guidance, and unwavering support
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
