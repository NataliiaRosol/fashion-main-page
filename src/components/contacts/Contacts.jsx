import './contacts.css'


export default function Contacts(){
  return(
    <section className="contacts">
      <div className="container ">
        <div className="contacts-content">
          <h3 className="contacts-title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h3>
          <p className="contacts-text">Type your email down below and be young wild generation</p>

          <form action="" className='contacts-form'>
            <input type="email" className="contacts-input" placeholder="Add your email here" />
            <button className="contacts-btn">SEND</button>
          </form>
        </div>
      </div>
    </section>
  )
}