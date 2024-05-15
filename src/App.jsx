import Card from "./components/Card";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import cardImage1 from "./assets/card_img_1.png";
import cardImage2 from "./assets/card_img_2.png";
import cardImage3 from "./assets/card_img_3.png";
import yocat from "./assets/cat_img1.jpg";
import cat2 from "./assets/cat_img2.jpg";
import cat3 from "./assets/cat_img3.jpg";
import cat4 from "./assets/cat_img4.jpg";
import cat5 from "./assets/cat_img5.jpg";
import cat6 from "./assets/cat_img6.jpg";
import Jokes from "./components/Jokes";

export default function App() {
  return (
    <main>
      <NavBar />
      {/* <Hero />
      <div className="cards">
        <Card img={cardImage1}  statRating="5.0" statValue="6" statCountry="USA" title="Life lessons with Katie Zaferes
" price="136 "/>
        <Card img={cardImage2}  statRating="5.0" statValue="30" statCountry="USA" title="Learn wedding photography
" price="125"/>
        <Card img={cardImage3}  statRating="4.8" statValue="2" statCountry="USA" title="Group Mountain Biking" price="50"/>
      </div>
      <div className="contacts">
        <Contact img={yocat} name="Mr. yo cat" phone ="(222)-330-440" email ="yocat@email.com"/>
        <Contact img={cat2} name="Mr. calm one" phone ="(222)-330-440" email ="cat2@email.com"/>
        <Contact img={cat3} name="Mr. new day" phone ="(222)-330-440" email ="cat3@email.com"/>
        <Contact img={cat4} name="Mr. sleepy" phone ="(222)-330-440" email ="cat4@email.com"/>
        <Contact img={cat5} name="Mr. just cute" phone ="(222)-330-440" email ="cat5@email.com"/>
        <Contact img={cat6}  name="Mr. gorgious one" phone ="(222)-330-440" email ="cat6@email.com"/>
      </div> */}
      <div className="jokes">
      <Jokes setup="My wife told me to stop acting like a flamingo" punchline="I had to put my foot down."/>
      <Jokes setup="My wife told me to stop acting like a flamingo" punchline="I had to put my foot down."/>
      <Jokes setup="My wife told me to stop acting like a flamingo" punchline="I had to put my foot down."/>
      <Jokes setup="My wife told me to stop acting like a flamingo" punchline="I had to put my foot down."/>
      <Jokes setup="My wife told me to stop acting like a flamingo" punchline="I had to put my foot down."/>
      </div>
    </main>
  );
}
