import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Stepper from "../components/Stepper/Stepper";
import "../css/products.css";
import { useFavoritesStore } from "../store/favoritesStore";

export default function ProductCard({ id, name, image}) {
  const [counter, setCounter] = useState(0);
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorite = favorites.includes(id, name, image);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      console.log("remove the ", id);
      removeFavorite(id);
    } else {
      console.log("add the ", id);
      addFavorite(id);
    }
  };
  let price = 10*counter;
  return (
    <section className="products">
      <div className="elements">
        <img src={image} alt="imagen logo" />
        <div>
          <div className="titlle-products">
            <h1>{name}</h1>
            <div className="pr">
              <Icon
                className="icono"
                icon={isFavorite ? "ph:heart-fill" : "ph:heart"}
                onClick={handleToggleFavorite}
                color="#62C471"
                size={35}
                underlaycolor="transparent"
              ></Icon>
            </div>
          </div>
          <p>GBP £{price}</p>
          <div className="product-amount">
            <Stepper counter={counter} setCounter={setCounter} />
            <Form.Select
              aria-label="Default select example"
              placeholder="Choose the quantity"
            >
              <option value="1">Each</option>
              <option value="2">Box</option>
              <option value="3">Kg</option>
            </Form.Select>
          </div>
        </div>
      </div>
      <div className="promo">
        <h4>Promo price</h4>
        <h5>£20.9 Bag</h5>
        <Form.Check aria-label="option 1" />
      </div>
    </section>
  );
}
