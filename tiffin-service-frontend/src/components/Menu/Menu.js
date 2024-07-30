import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await axios.get('/api/menu');
      setMenu(res.data);
    };

    fetchMenu();
  }, []);

  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        {menu.map((item) => (
          <li key={item._id}>
            <span>{item.foodName}</span> - <span>₹{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
