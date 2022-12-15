import NavBar from './components/NavBar'
import MyProjects from './components/MyProjects'
import About from './components/About'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <MyProjects />
    </div>
  );
}

export default App;
