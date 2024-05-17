import Jokes from "./JokeFile.js";
import JokeComponent from "./components/Jokes.jsx";
import cats from "./cats_data.js";
import Contact from "./components/Contact.jsx";
import Items from "./data.js";
import Card from "./components/Card.jsx";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
  const items = Items.map((item) => (
    <Card
      key={item.id}
      {...item}
    />
  ));
  const cats_data = cats.map((cat) => (
    <Contact img={cat.img} phone={cat.phone} email={cat.email} />
  ));
  const jokes = Jokes.map( joke =>
    <JokeComponent setup={joke.setup} puchline= {joke.punchline}/>
  )
  return (
    <main>
      <NavBar/>
      {/* <Hero /> */}
      <section className="cards">{items}</section>;
      {/* <section className="cards">{cats_data}</section> */}
      {/* {jokes} */}
    </main>
  );
}