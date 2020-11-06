import express from 'express';
import Todo from '../models/Todo';
const router = express.Router();

router.get('/', (req, res) => {
  Todo.find().then((todos) => {
    res.json(todos);
  });
});

export default router;
