import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from "./data"
import './index.css';


export default function App() {

  const cards = data.map(item => {
      return (
        <Card 
         key={item.id}
         item={item}
      //   img = {item.coverImg}
       //  rating= {item.stats.rating}
       //  reviewCount={item.stats.reviewCount}
        // location={item.location}
         //title={item.title}
         //price={item.price}  
         //openSpots = {item.openSpots}       
          />
      )
  })
  return (
   <div className="App-container">
       <div className="App">
         < Navbar />
          <Hero />
         <section className="cards-list">
          {cards}
         </section>
      </div>
   </div>
 );
}

 