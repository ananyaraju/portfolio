import NavBar from './components/NavBar'
import MyProjects from './components/MyProjects'
import About from './components/About'
import Scroll from './components/Scroll'
import Footer from './components/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Scroll />
      <NavBar />
      <About />
      <MyProjects />
      <Footer />
    </>
  );
}

export default App;
