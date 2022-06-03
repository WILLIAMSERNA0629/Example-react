import React, { useState } from "react";
import Card from "../../molecules/Card/Card";
import CardProducts from "../../molecules/CardProducts/CardProducts";
import "./ProductsContainer.css"


const ProductsContainer = (e) => {

  const productosInfo = [

    {
      id: 1,
      img: "https://placeimg.com/300/100",
      name: "zapatos",
      description: `Descripción producto 1`,
      price: 299,
      category: "Descuentos",
    },
    {
      id: 2,
      img: "https://placeimg.com/200/100",
      name: "mujer",
      description: `Descripción producto 2`,
      price: 399,
    },
    {
      id: 3,
      img: "https://placeimg.com/400/100",
      name: "mascotas",
      description: `Descripción producto 3`,
      price: 499,
    },
    {
      id: 4,
      img: "https://placeimg.com/500/100",
      name: "hombre",
      description: `Descripción producto 4`,
      price: 599,
    },
    {
      id: 5,
      img: "https://placeimg.com/600/100",
      name: "bebes",
      description: `Descripción producto 5`,
      price: 699,
    },
    {
      id: 6,
      img: "https://placeimg.com/700/100",
      name: "Nombre 6",
      description: `Descripción producto 6`,
      price: 799,
    },
    {
      id: 7,
      img: "https://placeimg.com/800/100",
      name: "Nombre 7",
      description: `Descripción producto 7`,
      price: 899,
    },
    {
      id: 8,
      img: "https://placeimg.com/900/100",
      name: "Nombre 8",
      description: `Descripción producto 7`,
      price: 999,
    },
    {
      id: 9,
      img: "https://placeimg.com/700/100",
      name: "Nombre 9",
      description: `Descripción producto 9`,
      price: 1099,
    },
    {
      id: 10,
      img: "https://placeimg.com/200/100",
      name: "Nombre 10",
      description: `Descripción producto 10`,
      price: 1199,
    },
    {
      id: 11,
      img: "https://placeimg.com/500/100",
      name: "Nombre 11",
      description: `Descripción producto 11`,
      price: 1299,
    },
    {
      id: 12,
      img: "https://placeimg.com/400/100",
      name: "Nombre 12",
      description: `Descripción producto 12`,
      price: 1399,
    },



  ];
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const filterProducts = () => {
    const products = productosInfo.filter((producto) => {
      return producto.name.toLowerCase().includes(inputValue.toLowerCase());
    })
    return products
  }

  return (
    <div className="container">
      <input className="input" onChange={(e) => handleChange(e)} />
      <div className="content">
        {filterProducts().map((product) => (
          <CardProducts
            key={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
            image={product.img}
          />
        ))}
      </div>
    </div>
  )
};

export default ProductsContainer;
