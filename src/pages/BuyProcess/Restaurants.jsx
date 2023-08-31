import React, { useEffect, useState } from "react";
import css from "../../css/restaurants.css";
import axios from "axios";
import { Icon } from "@iconify/react";


export default function Restaurants() {
  const urlImg = "http://5.161.211.8:88/storage/";
  const endpoint = "http://5.161.211.8:88/api/users/all";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    try {
      const response = await axios.get(endpoint);
      setUsers(response.data.users); // Accedemos al array de usuarios dentro del objeto response.data
      console.log(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="restaurants">
      <h1 className="tittle-restaurants">Choose your restaurant</h1>
      <a className="bttn-categ" href="/suppliers">
      <div className="text-categ">
            <h2>
              Foodpoint
            </h2>
            <p>Address restaurant</p>
          </div>
          <img src="https://static.vecteezy.com/system/resources/previews/024/558/690/original/3d-avatar-chef-man-illustration-png.png"/>
      </a>
      <a className="bttn-categ" href="/suppliers">
      <div className="text-categ">
            <h2>
              Foodpoint
            </h2>
            <p>Address restaurant</p>
          </div>
          <img src="https://static.vecteezy.com/system/resources/previews/024/558/690/original/3d-avatar-chef-man-illustration-png.png"/>
      </a>
      <a className="bttn-categ" href="/suppliers">
      <div className="text-categ">
            <h2>
              Foodpoint
            </h2>
            <p>Address restaurant</p>
          </div>
          <img src="https://static.vecteezy.com/system/resources/previews/024/558/690/original/3d-avatar-chef-man-illustration-png.png"/>
      </a>

      {/*users.map((user) => (
        <a className="bttn-categ" href="/suppliers">
          <div className="text-categ" key={user.email}>
            <h2>
              {user.names} {user.surnames}
            </h2>
            <p>Address restaurant</p>
          </div>
          <img src={urlImg + user.avatar} />
        </a>
      ))*/}
      <a className="bttn btn-primary" href="addRestaurants"id="bttn-restaurant">
        <Icon className="icon-plus" icon="simple-line-icons:plus" />
        Add restaurant
      </a>
    </section>
  );
}
