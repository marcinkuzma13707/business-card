import './App.css';
import HeroCard from './HeroCard.tsx';
import Contact from './Contact.tsx';
import Content from './Content.tsx';
import Footer from './Footer.tsx';

function App() {

  return (
    <div className="app-frame">
    <div className="app">
      <HeroCard />
      <Contact />
      <Content />
      <Footer />
    </div>
  </div>
  )
}

export default App
