import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BusinessCategory from './pages/BusinessCategory';
import BusinessListing from './pages/BusinessListing';
import BusinessDetail from './pages/BusinessDetail';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <BusinessCategory /> }></Route>
              <Route path="/business-listing/:b_listing_id" element={ <BusinessListing /> }></Route>
              <Route path="/business-detail/:b_detail_id" element={ <BusinessDetail /> }></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
