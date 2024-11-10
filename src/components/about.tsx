import Image from 'next/image';
import '../style/hero.css';
import '../style/about.css';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

function About() {
  return (
    <div className='header-container'>
      <div className='header-boxes-con'>
        {/* left */}
        <div>
          <Image
            src={'/images/HeroSa.png'}
            alt='Profile Image'
            width={200}
            height={200}
            className='header-image'
          />
          <div className='social-icon'>
            <Link href={'https://www.instagram.com/sahirahmedsheikh'}>
              <FaInstagram className='s-icon1' />
            </Link>
            <Link href={'https://www.facebook.com/sahirahmedsheikh'}>
              <FaFacebook className='s-icon2' />
            </Link>
            <Link href={'https://www.linkedin.com/in/sahirahmedsheikh/'}>
              <FaLinkedin className='s-icon3' />
            </Link>
          </div>
        </div>
        {/* right */}
        <div className='hero-right-div'>
          <h1 className='title-hero'>About Me</h1>
          <p className='des-hero'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            voluptates optio accusamus vitae modi. Vero ullam suscipit
            reiciendis, iusto blanditiis qui explicabo debitis quod non
            natus.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloribus voluptates optio accusamus vitae modi. Vero ullam suscipit
            reiciendis, iusto blanditiis qui explicabo debitis quod non
            natus.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloribus voluptates optio accusamus vitae modi. Vero ullam suscipit
            reiciendis, iusto blanditiis qui explicabo debitis quod non natus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
