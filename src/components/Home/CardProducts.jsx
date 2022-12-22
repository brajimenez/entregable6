import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import getUserCart from "../../store/slice/cart.slice";
import getConfig from "../../utils/getConfig";
import "./styles/CardProduct.css";

const CardProducts = ({ product }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleBtnClick = (e) => {
    e.stopPropagation();

    const URL = "https://e-commerce-api.academlo.tech/api/v1/cart";
    const data = {
      id: product.id,
      quantity: 1,
    };

    axios
      .post(URL, data, getConfig())
      .then((res) => {
        dispatch(getUserCart());
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <article className="product" onClick={handleClick}>
      <header className="product__header">
        <img className="product__img" src={product.productImgs[0]} alt="" />
        <img className="product__img" src={product.productImgs[1]} alt="" />
      </header>
      <section className="product__body">
        <h3 className="product__name">{product.title}</h3>
        <article className="product__price-container">
          <span className="product__price-label">Price</span>
          <h4 className="product__price-number">{product.price}</h4>
        </article>
        <button className="product__btn" onClick={handleBtnClick}>
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      </section>
    </article>
  );
};

export default CardProducts;
