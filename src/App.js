import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Report from './components/Report';
import Accord from './components/Accord';
import Hero from './components/Hero';
import Integrations from './components/Integrations';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Accord />
      <Report />
      <Integrations />
      <Footer />
    </div>
  );
}

export default App;
