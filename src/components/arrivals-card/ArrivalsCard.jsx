import styles from './ArrivalsCard.module.css'

import arrow from './../../img/icons/arrow.svg'

const Card = (props) => {
  
  const {title, img} = props;

  return (
    <div className={styles.card}>
      <a href="#!" className={styles['card-link']}></a>
      <img src={img} alt="" className={styles['card-img']}/>

      <div className={styles['card-body']}>
        <div className={styles['card-text']}>
          <h3 className={styles['card-item-title']}>{title}</h3>
          <p className={styles['card-item-text']}>Explore Now!</p>
        </div>

        <div className={styles['card-icon']}>
          <img src={arrow} alt="" />
        </div>
      </div>
      
    </div>  
  );
}
 
export default Card;