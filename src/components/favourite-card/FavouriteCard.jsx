import './FavouriteCard.css'
import arrow from './../../img/icons/arrow.svg'


function FavouriteCard({title, img}){
  return(
    <div className='favourite-card'>
      <a href="#!" className='favourite-card-link'></a>
      <img src={img} alt="" className='favourite-img' />

      <div className="favourite-card-body">
        <div className="favourite-card-text">
          <h3 className='favourite-item-title'>{title}</h3>
          <p className='favourite-item-text'>Explore Now!</p>
        </div>

        <div className='favourite-card-icon'>
            <img src={arrow} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default FavouriteCard