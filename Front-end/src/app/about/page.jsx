import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Celestial Enchanters</h1>
          <h2 className={styles.imgDesc}>
          Catalysts of dreams, we sculpt futures with code and care.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            "We are a dedicated team with a strong passion for supporting the growth and prosperity of Micro, Small, and Medium Enterprises (MSMEs) in India. Our collective expertise spans various domains, including computer science and programming. We have a deep understanding of the unique challenges and opportunities that MSMEs encounter in today's rapidly evolving business landscape.
            <br /><br />

            Our mission is to empower MSMEs with innovative technological solutions and strategic insights. We believe that technology can be a powerful catalyst for enhancing the competitiveness and efficiency of small businesses. With our expertise in computer science and programming, we are committed to creating and implementing practical solutions that benefit MSMEs.
            <br /><br />

            Our team's diverse interests and skills complement our mission. We are driven by a shared enthusiasm for computer-related topics, and we are dedicated to leveraging our knowledge to help MSMEs thrive. We aspire to facilitate the adoption of cutting-edge technology, enabling MSMEs to achieve sustainable growth and success.
            <br /><br />

            Our ultimate vision is to bridge the gap between technology and small businesses, ensuring that MSMEs in India have access to the tools and resources they need to navigate the digital age effectively. We are excited to be part of this transformative journey and contribute to the advancement of MSMEs in our country."
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We are on a mission to empower Micro, Small, and Medium Enterprises (MSMEs) in India by providing them with tailored solutions and support. Our services and activities revolve around several key areas:
            <br /><br />

            <strong> Technology Integration </strong>: We help MSMEs harness the power of technology by offering guidance on digital transformation. This includes advising on the adoption of software, automation tools, and online platforms to streamline operations, improve productivity, and enhance customer engagement.
            <br /><br />

            <strong> Training and Workshops </strong>: We organize training sessions and workshops tailored to MSMEs to enhance their digital literacy. These sessions cover topics such as digital marketing, e-commerce, and cybersecurity, equipping small businesses with the knowledge to thrive in the digital era.
            <br /><br />

            <strong>Consulting and Strategy </strong>: We provide consulting services to MSMEs, offering strategic insights into market trends, competition analysis, and growth opportunities. Our goal is to help businesses make informed decisions and develop sustainable strategies for success.
            <br /><br />

            <strong> Access to Resources </strong>: We connect MSMEs with valuable resources such as funding opportunities, government schemes, and industry partnerships. Our aim is to facilitate access to the support networks and financial aid that can fuel business growth.
            <br /><br />

            <strong> Community Building </strong>: We believe in the power of a supportive community. We foster connections among MSMEs, allowing them to share experiences, best practices, and collaborate on projects. Building a strong network is key to resilience and success.
            <br /><br />

            <strong> Advocacy </strong>: We advocate for the interests of MSMEs, representing their concerns to policymakers and stakeholders. We work to create an enabling environment for small businesses to thrive and contribute to the nation's economic growth.
            <br /><br />

            <strong>'What we Do'</strong> revolves around empowering MSMEs through technology adoption, custom solutions, education, strategic guidance, resource access, community building, and advocacy. We are committed to supporting the growth and sustainability of India's vibrant small business sector."
            <br />
            <br />
          </p>
          <Button url="/contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
