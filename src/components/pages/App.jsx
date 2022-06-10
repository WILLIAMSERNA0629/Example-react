import "./App.css";
import ProductsContainer from "../organisms/ProductsContainer/ProductsContainer";
import { getProducts } from "../services/services";
import { useEffect, useState } from "react";

function App() {
  // console.log(getProducts())
  const [product, setProduct] = useState([]);

  const getData = async () => {
    let data = [];
    try {
      data = await getProducts();
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <ProductsContainer
      data={product}
      />
    </div>
  );
}

export default App;
