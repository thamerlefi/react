
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import { store } from './store';




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
        </Routes>
      </div>
    </Provider>
    
    
  );
}

export default App;
