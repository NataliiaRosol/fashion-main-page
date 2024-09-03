import Brands from './components/brands/Brands.jsx'
import Header from './components/header/Header.jsx'
import Promo from './components/promo/Promo.jsx'
import Arrivals from './components/arrivals/Arrivals.jsx'
import Sale from './components/sale/Sale.jsx'
import Favourite from './components/favourite/Favourite.jsx'
import Voucher from './components/voucher/Voucher.jsx'
import Contacts from './components/contacts/Contacts.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <Brands/>
      <Arrivals/>
      <Sale/>
      <Favourite/>
      <Voucher/>
      <Contacts/>
    </div>
  )
}

export default App
