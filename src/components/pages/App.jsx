import './App.css';
import ProductsContainer from '../organisms/ProductsContainer/ProductsContainer';
import Navbar from '../organisms/Navbar/Navbar'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <ProductsContainer/>
    </div>
  );
}

export default App;
