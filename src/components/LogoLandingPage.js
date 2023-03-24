import Image from 'next/image';
import styles from '../styles/LogoLandingPage.module.css';

const LogoLandingPage = (props) => {
  return (
    <div className={styles.landingPageLogo}>
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
      />
    </div>
  );
};

export default LogoLandingPage;
