import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:8000/api/clients"

const Client = () => {

 const [clients, getClients] = useState([])   

  const getAllClients = async () => {
    await axios
      .get(`${URL}`)
      .then((response) => {
        getClients(response.data["hydra:member"])
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllClients();
  }, []);

  return (
    <>
      <h1>Hello client !</h1>
      {clients.map((client) => {
        return (
            <div key={client.id}>
            <ul>
                <li>Votre nome complet est : {client.full_name}</li>
                <li>Votre mail est : {client.email}</li>
            </ul>
            </div>
        )
      })}
    </>
  );
};

export default Client;
