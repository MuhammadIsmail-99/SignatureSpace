import Header from '../Header/header.jsx';
// import SearchBar from '../Searchbar/search-bar'; // Uncomment if needed
import Navbar from '../navbar/navbar.jsx';
import SimpleAreasCarousel from '../property-areas/property-areas-card.jsx';
// import VacationRentals from '../top-rentals/card.jsx';

function Home() {
  return (
    <>
      {/* Uncomment the following line if you want to use SearchBar */}
      {/* <SearchBar />  */}
      <Header />
      <Navbar />
      <SimpleAreasCarousel />
      {/* <VacationRentals /> */}
      {/* Add other components or content here as needed */}
    </>
  );
}
export default Home;