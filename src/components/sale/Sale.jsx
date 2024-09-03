import saleImg from './../../img/images/promo-img.jpg'
import './sale.css'

const Sale = () => {
  return (
    <section className="sale">
      {/* <div className="container"> */}
        <div className="sale-content">
          <div className="sale-img">
            <img src={saleImg} alt="" />
          </div>

          <div className='sale-text'>
            <div className="sale-title">
              <span className='highlight'><span>PAYDAY </span></span>
              SALE NOW
            </div>
            <div className="sale-voucher">Spend minimal $100 get 30% off
            voucher code for your next purchase</div>
            <div className="sale-terms">
              <span>1 June - 10 June 2021</span>
              <p>*Terms & Conditions apply</p>
            </div>
            <div className="sale-btn-wrapper">
              <a href="#!" className='sale-btn'>Shop Now</a>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}

export default Sale
  