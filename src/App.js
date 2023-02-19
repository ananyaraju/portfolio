import NavBar from './components/NavBar'
import MyProjects from './components/MyProjects'
import About from './components/About'
import Scroll from './components/Scroll'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Scroll />
      <NavBar />
      <About />
      <MyProjects />
    </>
  );
}

export default App;
