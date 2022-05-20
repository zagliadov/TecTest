require('dotenv').config();
const express = require('express');


module.exports.test = async (req, res) => {
  console.log('Hello')
  res.json('hello');
}