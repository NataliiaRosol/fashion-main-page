import './voucher.css'
import appImg from './../../img/images/vouchers-img.png'
import appStoreImg from './../../img/icons/app-store.png'
import googlePlayImg from './../../img/icons/google-play.png'


export default function Voucher(){
  return(
    <section className='voucher'>
      <div className="container">
        <div className="voucher-content">
          <div className="voucher-details">
            <div className="voucher-title">DOWNLOAD APP & GET THE VOUCHER!</div>
            <div className="voucher-text">Get 30% off for first transaction using Rondovision mobile app for now.</div>

            <div className="app-links">
              <img src={appStoreImg} alt="" />
              <img src={googlePlayImg} alt="" />
            </div>
          </div>
          
          <div className="voucher-img">
            <img src={appImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}