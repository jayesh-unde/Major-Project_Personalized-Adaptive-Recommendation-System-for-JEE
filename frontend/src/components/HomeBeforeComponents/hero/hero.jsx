import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../../../store/authSlice';
import { loginEmail } from '../../../http';
import styles from './hero.module.css';
import Image2 from '/images/Rectangle 10.png';
import Image1 from '/images/Rectangle 12.png';
import Image4 from '/images/Rectangle 13.png';
import Image3 from '/images/Rectangle 14.png';


const Hero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGuestLogin = async () => {
    try {
      const email = import.meta.env.VITE_GUEST_EMAIL;
      const password = import.meta.env.VITE_GUEST_PASSWORD;

      const { data } = await loginEmail({ email, password });

      if (data.auth) {
        dispatch(setAuth(data));
        navigate('/');
      } else {
        console.log('Failed to login as guest.');
      }
    } catch (error) {
      console.error('Error during guest login:', error);
    }
  };

  return (
    <div className={styles.hero}>
      <div className={styles.hero_left}>
        <div className={styles.topHeading}>Best Personalized and Adaptive Recommendation Platform</div>
        <div className={styles.Find_Perfect_Path}>Find Your Perfect Path</div>
        <div className={styles.content}>
          We tailor study plans based on individual strengths and weaknesses. You will get recommendations to enhance Learning.
        </div>
        <div className={styles.learn}>
          <button className={`${styles.basic} poppins-semibold`}>Get Started</button>
          <div className={`${styles.guestLogin} poppins-semibold`}>
            <button
              className={`${styles.navigate} ${styles.guestButton}`}
              onClick={handleGuestLogin}
            >
              🧑‍🎓 Login as Guest
            </button>
          </div>
        </div>
      </div>
      <div className={styles.hero_right}>
        <div className={styles.upperimage}>
          <img src={Image1} alt="image1" />
          <img src={Image2} alt="image2" />
        </div>
        <div className={styles.lowerimage}>
          <img src={Image3} alt="image3" />
          <img src={Image4} alt="image4" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
