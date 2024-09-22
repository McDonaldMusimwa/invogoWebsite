import ButtonCustom from '../components/ButtonCustom'
import styles from './Home.module.css'
import mobileappPic from '../public/images/invogo.jpg';
import bannar from '../data/data';
import BannerItem from '../components/Home/BannerItem';

function Home() {
  return (<>

    <div className={styles.HomeContainer}>

      <div>
        <span className={styles.HeroTopText}>SOLUTION BEYOND EXPECTATION</span>
        <span className={styles.HeroLargeText}>Innovative <span className={styles.HeroLargeTextCustom}>Mobile App Deveped</span> by Small Business for Small Business</span>
        <p>Invogo is a disruptive mobile application developed for streamlining the ease of doing buiness for tradesman.Wether you are a plumber,electrician or what ever business you run we make invoiving and accouting very easy for you. </p>

        <div className={styles.CustomButton}><ButtonCustom>Get Started</ButtonCustom></div>
      </div>
      <div>
        <span className={styles.marketing2}>
          <img src='https://img.icons8.com/?size=100&id=QMLc3m7lIG14&format=png&color=228BE6' height={20} width={20} alt='thumpsup' />
          100% client driven</span>
        <img src={mobileappPic} alt='invogoapp' height={400} width={400} />
        <span className={styles.marketing}>10+ free invoices a</span>
      </div>

    </div>
    <div className={styles.HomeBottomBanner}>

      {bannar.map((item) => {
        return (<BannerItem text={item.message} image={item.image} key={item.key} />)
      })}
    </div>
  </>)
}

export default Home