'use strict';

let users = [
  {id: 1, name: 'Chris'},
  {id: 2, name: 'Lucy'},
  {id: 3, name: 'Joo'},
];

exports.show = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.filter(user => user.id === userId)[0];
  if (!user) return res.status(404).send('No user');
  res.json(user);
};

exports.index = (req, res) => {
  res.json(users);
};

exports.create = (req, res) => {
  req.body.name = req.body.name.trim();
  if (!req.body.name) return res.status(400).send('name is requied');

  const newUserId = users.reduce((result, user) => {
    return user.id > result ? user.id : result;
  }, 0) + 1;

  let newUser = {
    id: newUserId,
    name: req.body.name
  };

  users.push(newUser);
  res.json(newUser);
};

exports.update = (req, res) => {
  req.body.name = req.body.name.trim();
  if (!req.body.name) return res.status(400).send('name is requied');

  const userId = parseInt(req.params.id, 10);
  const user = users.filter(user => user.id === userId)[0];

  if (!user) return res.status(404).send('No user');

  user.name = req.body.name;
  res.json(user);
};

exports.destroy = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  users = users.filter(user => user.id !== userId);
  res.json(users);
};
