import './footer.css'
import facebookImg from './../../img/socials/fb.svg'
import instagramImg from './../../img/socials/inst.svg'
import twitterImg from './../../img/socials/tw.svg'
import linkinImg from './../../img/socials/in.svg'


export default function Footer(){

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <h3 className="social-header">FASHION</h3>
            <p className="social-text">Complete your style with awesome clothes from us.</p>
            <div className="social-links">
              <a href="" className="social-links-item">
                <img src={facebookImg} alt="" />
              </a>
              <a href="" className="social-links-item">
                <img src={instagramImg} alt="" />
              </a>
              <a href="" className="social-links-item">
                <img src={twitterImg} alt="" />
              </a>
              <a href="" className="social-links-item">
                <img src={linkinImg} alt="" />
              </a>
            </div>
            
          </div>
          <div className="footer-links">
            <ul className='footer-links-item'>
              <li className="link-title">Company</li>
              <li className="link-item">About</li>
              <li className="link-item">Contact us</li>
              <li className="link-item">Support</li>
              <li className="link-item">Careers</li>
            </ul>
            <ul className='footer-links-item'>
              <li className="link-title">Quick Link</li>
              <li className="link-item">Share Location</li>
              <li className="link-item">Orders Tracking</li>
              <li className="link-item">Size Guide</li>
              <li className="link-item">FAQs</li>
            </ul>
            <ul className='footer-links-item'>
              <li className="link-title">Legal</li>
              <li className="link-item">Terms & conditions</li>
              <li className="link-item">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}