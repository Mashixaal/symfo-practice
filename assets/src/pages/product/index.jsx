import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:8000/api/products";

const Product = () => {
  const [products, getProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      await axios
        .get(`${URL}`)
        .then((response) => {
          getProducts(response.data["hydra:member"]);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <h1>Hello Product !</h1>
      <hr style={{ marginTop: "5rem" }} />
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <label htmlFor="">Nome du produit</label>
        <input type="text" name="name" />
        <label htmlFor="">Description du produit :</label>
        <textarea name="description" rows="10"></textarea>
        <label htmlFor="price">Prix :</label>
        <input type="number" />
        <button type="button" onclick={() => submitForm()}>
          Envoyer
        </button>
      </form>
      <hr style={{ marginButtom: "5rem" }} />
      {products.map((product) => {
        const addProduct = () => {
          alert(`Produit ajouté : ${product.id}`);
        };

        const updateProduct = () => {
          alert(`produit mis à jour : ${product.id}`);
        };

        const delateProduct = () => {
          alert(`produit supprimé : ${product.id}`);
        };

        return (
          <div key={product.id}>
            <ul>
              <li>Nom du produit : {product.name}</li>
              <li>Descrription du produit : {description}</li>
              <li>Prix : {product.price} £</li>
            </ul>
            <button onClick={() => addProduct()}>Ajouter au panier</button>
            <button onclick={() => updateProduct()}> modifier le produit</button>
            <button onclick={() => updateProduct()}>Suprimer le produit</button>
          </div>
        );
      })}
    </>
  );
};

export default Product;
