import React, { useState } from "react";
import "./style.css";
import info from "./data.json";
import ThemeChange from "./ThemeChange";

function MobileList() {
  const [name, setName] = useState(info);

  function Remove(id) {
    setName(name.filter((item) => item.id !== id));
  }
  return (
    <div>
      <div>
        {name.map((item) => (
          <div className="main" id={item.id}>
            <img className="image" src={item.image} alt={item.title} />
            <div>
              <h2>{item.title}</h2>
              <p>$ {item.price}</p>
              <button onClick={() => Remove(item.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <ThemeChange />
    </div>
  );
}

export default MobileList;
