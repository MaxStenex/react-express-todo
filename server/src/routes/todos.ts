import express from 'express';
import Todo from '../models/Todo';
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (err) {
      res.json([]);
      console.log(err);
    }
  })
  .post('/add', async (req, res) => {
    try {
      const { name, description } = req.body;
      const todo = new Todo({
        name: name,
        description: description,
      });
      todo.save();
      res.json(todo);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  })
  .put('/:id', async (req, res) => {
    try {
      // const todo = await Todo.findById(req.params.id);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

export default router;
