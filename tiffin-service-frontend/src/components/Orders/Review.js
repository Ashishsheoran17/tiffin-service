import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Review = (props) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const { id } = useParams();
  const [review, setReview] = useState('');

  const onChange = (e) => setReview(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/orders/${id}/review`, { review }, {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    props.history.push('/orders');
  };

  return (
    <div className="form-container">
      <h1>
        Add <span className="text-primary">Review</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea name="review" value={review} onChange={onChange} required></textarea>
        </div>
        <input type="submit" value="Submit Review" className="btn btn-primary btn-block" />
      </form>
    </div>
  );
};

export default Review;
