import FavouriteCard from '../favourite-card/FavouriteCard'
import promo01 from './../../img/images/promo-01.jpg'
import promo02 from './../../img/images/promo-02.jpg'
import './favourite.css'

function Favourite(){

  return(
    <section className='favourite'>
      <div className="container">
        <div className="favourite-header">
          <h2 className="arrivals-header-title title">Young’s Favourite</h2>
        </div>
        <div className="favourite-cards">
          <FavouriteCard title='Trending on instagram' img={promo01}/>
          <FavouriteCard title='All Under $40' img={promo02}/>
        </div>
      </div>
    </section>
  )
}

export default Favourite