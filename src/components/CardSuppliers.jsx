import React from "react";
import { useState, useEffect } from "react";
import img_suppliers from "../img/img_suppliers.png";
import logo__foodpoint from "../img/logo__foodpoint.svg";
import themenu_logo from "../img/themenu_logo.png"
import eurofrutta_logo from "../img/eurofrutta_logo.svg";
import fieldtofork_logo from "../img/fieldtofork_logo.svg";
import hgwalter_logo from "../img/hgwalter_logo.svg"
import hand_logo from "../img/hand_logo.svg"
export default function Suppliers(props) {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch("http://5.161.211.8:88/api/providers/" + "all")
      .then((response) => response.json())
      .then(({ providers }) => setSuppliers(providers));
  }, []);

  return (
    <section className="suppliers">
      {/*
            <div>
            <ul>
            {suppliers.map (providers => <p key={providers.id}>{providers.name}</p>)}
            </ul>
            </div>*/}
      <a className="bttn-categ" id="suppliers-categ" href="/products">
        <img src={logo__foodpoint} alt="Logo del proveedor" />
        <img
          src={img_suppliers}
          alt="logo-restaurant"
          className="img-suppliers"
        ></img>
      </a>
      <a className="bttn-categ" id="suppliers-categ" href="/products">
        <img src={themenu_logo} alt="Logo del proveedor" />
        <img
          src={img_suppliers}
          alt="logo-restaurant"
          className="img-suppliers"
        ></img>
      </a>
      <a className="bttn-categ" id="suppliers-categ" href="/products">
        <img src={eurofrutta_logo} alt="Logo del proveedor" />
        <img
          src={img_suppliers}
          alt="logo-restaurant"
          className="img-suppliers"
        ></img>
      </a>
      <a className="bttn-categ" id="suppliers-categ" href="/products">
        <img src={fieldtofork_logo} id="fieldToFork" alt="Logo del proveedor" />
        <img
          src={img_suppliers}
          alt="logo-restaurant"
          className="img-suppliers"
        ></img>
      </a>
      <a className="bttn-categ" id="suppliers-categ" href="/products">
        <img src={hgwalter_logo} alt="Logo del proveedor" />
        <img
          src={img_suppliers}
          alt="logo-restaurant"
          className="img-suppliers"
        ></img>
      </a>
      <a className="bttn-categ" id="suppliers-categ" href="/products">
        <img src={hand_logo} id="fieldToFork" alt="Logo del proveedor" />
        <img
          src={img_suppliers}
          alt="logo-restaurant"
          className="img-suppliers"
        ></img>
      </a>
    <div className="espacio"></div>
      {/*<a className="bttn-categ" id='suppliers-categ' href='/products'>
            {suppliers.filter(sup => sup.id === props.prove).map(filteredPerson => (
             <h2 className='text-supplier'>
            {filteredPerson.name}
            </h2>))}
                <img src={img_suppliers} alt="logo-restaurant" className='img-suppliers'></img>
            </a>*/}
    </section>
  );
}
