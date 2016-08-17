'use strict';

const router = require('express').Router();
const controller = require('./user.controller');

router.get('/:id', controller.show);
router.get('/', controller.index);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
