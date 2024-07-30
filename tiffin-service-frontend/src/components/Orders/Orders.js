import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

const Orders = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get('/api/orders', {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setOrders(res.data);
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="orders">
      <h2>My Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <span>{order.date}</span>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  <span>{item.foodName}</span> - <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
            <span>{order.review ? `Review: ${order.review}` : <a href={`/orders/${order._id}/review`}>Add Review</a>}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
