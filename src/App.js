import './App.css';
import Choose from './components/Choose/Choose';
import GridSection from './components/GridSection/GridSection';
import HeroSection from './components/HeroSection/HeroSection';
import MainBodyTopText from './components/MainBodyTopText/MainBodyTopText';
import Members from './components/Members/Members';
import Navbar from './components/Navbar/Navbar';
import PeopleBox from './components/PeopleBox/PeopleBox';
import Faq from './components/FAQ/Faq';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="fullBody">
      <div className="TopTwoSection">
        <Navbar />
        <HeroSection />
      </div>
      <MainBodyTopText />
      <Choose />
      <GridSection />
      <PeopleBox />
      <Members />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;