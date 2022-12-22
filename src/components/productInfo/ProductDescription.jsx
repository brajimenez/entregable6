import React, { useState } from "react";

const ProductDescription = ({ product }) => {
  const [counter, setCounter] = useState(1);
  console.log(product);

  const handleMinus = () => {
    if (counter - 1 > 0) {
      return setCounter(counter - 1);
    }
  };

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  return (
    <article>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <section>
        <span>Price</span>
        <h3>{product?.price}</h3>
      </section>
      <section>
        <h3>Quantity</h3>
        <div>
          <div onClick={handleMinus}>-</div>
          <div>{counter}</div>
          <div onClick={handlePlus}>+</div>
        </div>
      </section>
      <button>Add to Cart</button>
      <i className="fa-solid fa-cart-plus"></i>
    </article>
  );
};

export default ProductDescription;
