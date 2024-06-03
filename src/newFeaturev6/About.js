import { Link, useActionData } from "react-router-dom";
import ScrollToBottom from "./ScrollToBottom";

const About = () => {
  const data = useActionData();
  console.log(data);
  return (
    <>
      <div>
        <ScrollToBottom />
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <h2>About GeeksforGeeks</h2>
        <h3>Company Profile and Brand:</h3>
        <p>
          GeeksforGeeks is a leading platform that provides computer science
          resources and coding challenges for programmers and technology
          enthusiasts, along with interview and exam preparations for upcoming
          aspirants. With a strong emphasis on enhancing coding skills and
          knowledge, it has become a trusted destination for over 12 million
          plus registered users worldwide. The platform offers a vast collection
          of tutorials, practice problems, interview tutorials, articles, and
          courses, covering various domains of computer science.
        </p>
        <p>
          Our exceptional mentors hailing from top colleges & organizations have
          the ability to guide you on a journey from the humble beginnings of
          coding to the pinnacle of expertise. Under their guidance watch your
          skills flourish as we lay the foundation and help you conquer the
          world of coding.
        </p>
        <p>
          Our brand is built on the pillars of expertise, accessibility, and
          community. We strive to empower individuals to enhance their
          programming skills, to bridge the gap between academia and industry,
          and provide a supportive community to the learners. GeeksforGeeks is
          committed to promoting technological advancement and providing
          opportunities for growth in the ever-evolving field of computer
          science.
        </p>

        <h3>Corporate History, Mission, Vision, and Motto:</h3>
        <h4>Corporate History:</h4>
        <p>
          GeeksforGeeks was founded in 2008 by Sandeep Jain with a vision to
          establish a comprehensive platform for computer science education and
          skill development. Over the years, the platform has experienced
          exponential growth, cementing its position as one of the most trusted
          and renowned names in the programming community.
        </p>

        <h4>Mission:</h4>
        <p>
          Our mission is to empower programmers and technology enthusiasts
          worldwide to excel in their coding skills and unleash their full
          potential. We want to bridge the gap between theory and practice,
          equipping individuals with skills and expertise required to tackle
          real-world challenges in the ever-evolving field of technology and get
          them prepared for their dream jobs.
        </p>

        <h4>Vision:</h4>
        <p>
          We envision a world where every programmer has unfettered access to
          top-tier learning resources, enabling them to continuously enhance
          their skills and flourish amidst the ever-evolving technology
          landscape. GeeksforGeeks aspires to be the definitive platform for
          programmers, empowering them to stay at the forefront of their careers
          and make a significant impact in the dynamic tech industry. With the
          time we have evolved and introduced other core fields preparation
          courses to support the young aspirants.
        </p>

        <h4>Motto:</h4>
        <p>
          “Learn, Practice, and Excel” – This motto encapsulates our unwavering
          dedication to continuous learning, hands-on practice, and the pursuit
          of excellence. We firmly believe that learning is an ongoing journey
          that spans a lifetime, and with persistent practice and unwavering
          dedication, individuals can truly excel in the vast realm of computer
          science.
        </p>

        <h3>Company Founders/Directors:</h3>
        <p>
          Our founder Sandeep Jain is a visionary entrepreneur and esteemed
          computer science expert. Fueled by his unwavering passion for coding
          and education, laid the very bedrock upon which GeeksforGeeks stands
          today, and his indomitable spirit has been instrumental in its
          remarkable growth and resounding success. As the steadfast driving
          force behind the company, Sandeep remains a beacon of guidance and
          inspiration, propelling the team to constantly challenging limits and
          craft transformative learning experiences.
        </p>
        <p>
          Our CTO, Shikhar Goel has an impeccable track record of developing
          revolutionary products, with their innovative solutions serving as a
          vital catalyst for the remarkable success of GeeksforGeeks. Shikhar,
          the mastermind behind the creation of this platform, has demonstrated
          a progressive approach and an unwavering commitment to excellence,
          propelling the company to become the premier destination for coding
          enthusiasts worldwide.
        </p>
      </div>
    </>
  );
};

export const Error = () => {
  return <h1>Error</h1>;
};
export const ErrorAbout = () => {
  return <h1>Error About</h1>;
};

export default About;
