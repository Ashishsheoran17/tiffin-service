const express = require('express');
const Menu = require('../models/Menu');

const router = express.Router();

// Get All Menu Items
router.get('/', async (req, res) => {
  try {
    const menu = await Menu.find();
    res.json(menu);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add Menu Item
router.post('/', async (req, res) => {
  const { foodName, price } = req.body;

  try {
    const newItem = new Menu({ foodName, price });
    const menu = await newItem.save();
    res.json(menu);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
