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
  .post('/', async (req, res) => {
    try {
      const todo = new Todo({
        name: 'test-name',
        description: 'test-description',
      });
      todo.save();
      res.sendStatus(200);
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
