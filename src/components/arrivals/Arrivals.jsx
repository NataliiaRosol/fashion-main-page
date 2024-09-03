import ArrivalsCard from '../arrivals-card/ArrivalsCard.jsx'
import cat01Img from './../../img/categories/cat-01.jpg'
import cat02Img from './../../img/categories/cat-02.jpg'
import cat03Img from './../../img/categories/cat-03.jpg'
import './arrivals.css'

function Arrivals(){
  return(
    <section className="arrivals">
      <div className="container">
        <div className="arrivals-header">
          <h2 className="arrivals-header-title title">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals-cards">
          <ArrivalsCard title='Hoodies & Sweetshirt' img={cat01Img}/>
          <ArrivalsCard title='Coats & Parkas' img={cat02Img}/>
          <ArrivalsCard title='Tees & T-Shirt' img={cat03Img}/>
        </div>
      </div>
    </section>
  )
}
export default Arrivals