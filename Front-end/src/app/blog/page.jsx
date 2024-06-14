import React from 'react';
import img1 from './img1.jpeg';
import styles from './page.module.css';

function Blog() {
  return (
    <div>
      <h1>MSME Related News Blogs</h1>
      <br />
      <br />
      <div className={styles.blogs}>

        {/* Blog 1 */}
        <div className={styles.container}>
          <h2 className={styles.title}>Government Announces New MSME Support Program</h2>
          <p className={styles.desc}>
            In a recent development, the government has unveiled a comprehensive support program for MSMEs. This initiative aims to provide financial assistance, training, and technology adoption support to small and medium-sized enterprises.
          </p>
        </div>

        {/* Blog 2 */}
        <div className={styles.container}>
          {/* <img src={img1} alt="" width={400} height={250} className={styles.image} /> */}

          <h2 className={styles.title}>Impact of Digitalization on MSMEs</h2>
          <p className={styles.desc}>
            The digital transformation wave is sweeping across MSMEs. Learn how small businesses are leveraging technology to streamline operations, reach new markets, and stay competitive in the digital age.
          </p>
        </div>

        {/* Blog 3 */}
        <div className={styles.container}>
          <h2 className={styles.title}>Challenges Faced by MSMEs During the Pandemic</h2>
          <p className={styles.desc}>
            The COVID-19 pandemic posed significant challenges for MSMEs worldwide. Explore the hurdles these businesses faced and how they adapted to survive and thrive in a post-pandemic world.
          </p>
        </div>

        <div className={styles.container}>
          <h2 className={styles.title}>Unlocking MSME Growth Potential: A Comprehensive Guide</h2>
          <p className={styles.desc}>
            In this extensive guide, we delve deep into strategies for unlocking the growth potential of MSMEs. From market research and product development to funding options and scaling strategies, we cover it all. If you're looking to take your small business to the next level, this guide is a must-read.
          </p>
        </div>

        <div className={styles.container}>
          <h2 className={styles.title}>Navigating Regulatory Challenges: A Legal Perspective for MSMEs</h2>
          <p className={styles.desc}>
            MSMEs often face regulatory hurdles that can impede their growth. In this blog, we provide valuable insights into navigating the legal landscape as a small business. From compliance with tax laws to intellectual property protection, learn how to ensure your business operates smoothly within the legal framework.
          </p>
        </div>

        <div className={styles.container}>
          <h2 className={styles.title}>Digital Marketing Mastery for MSMEs</h2>
          <p className={styles.desc}>
            Digital marketing is a game-changer for MSMEs looking to expand their reach. This blog is your go-to resource for mastering digital marketing strategies tailored to small businesses. From social media advertising and email marketing to content creation and SEO optimization, we break down the steps to success in the digital realm.
          </p>
        </div>

        <div className={styles.container}>
          <h2 className={styles.title}>Sustainable Practices for MSMEs: A Path to Long-Term Success</h2>
          <p className={styles.desc}>
            Sustainability is not just a trend; it's a business imperative. In this blog, we explore sustainable practices that can drive long-term success for your MSME. Discover eco-friendly product options, energy-efficient operations, and responsible supply chain management. Join the movement towards a greener and more prosperous future.
          </p>
        </div>

        {/* Add more blogs as needed */}
      </div>
    </div>
  );
}

export default Blog;
