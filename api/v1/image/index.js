'use strict';

const router = require('express').Router();

let images = [
  {id: 1, url: 'http://blog.jeonghwan.net/assets/imgs/me-150x150.png'},
  {id: 2, url: 'http://blog.jeonghwan.net/assets/imgs/me-150x150.png'},
  {id: 3, url: 'http://blog.jeonghwan.net/assets/imgs/me-150x150.png'},
];

router.get('/', (req, res) => {
  res.json(images)
});

module.exports = router;
