import React from "react";
import Card from "../../molecules/Card/Card";
import "./ProductsContainer.css"


const ProductsContainer = () => {
 
        const productosInfo = [
          {
            id: 1,
            img: "https://placeimg.com/300/100",
            name: "Nombre 1",
            description: `Descripción producto 1`,
            price: 299,
            category: "Descuentos",
          },
          {
            id: 2,
            img: "https://placeimg.com/200/100",
            name: "Nombre 2",
            description: `Descripción producto 2`,
            price: 399,
          },
          {
            id: 3,
            img: "https://placeimg.com/400/100",
            name: "Nombre 3",
            description: `Descripción producto 3`,
            price: 499,
          },
          {
            id: 4,
            img: "https://placeimg.com/500/100",
            name: "Nombre 4",
            description: `Descripción producto 4`,
            price: 599,
          },
          {
            id: 5,
            img: "https://placeimg.com/600/100",
            name: "Nombre 5",
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
    return (
        <div className="container">
            <div className="content">
                {productosInfo.map((product)=> (
                    <Card
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    img={product.img}
                    />
                ))}                
            </div>
        </div>
    )
};

export default ProductsContainer;
