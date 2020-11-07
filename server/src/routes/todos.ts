import express from 'express';
import Todo from '../models/Todo';
const router = express.Router();

router
  .get('/', async (req: express.Request, res: express.Response) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (err) {
      res.json([]);
      console.log(err);
    }
  })
  .post('/add', async (req: express.Request, res: express.Response) => {
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
  .post('/delete&:id', async (req: express.Request, res: express.Response) => {
    try {
      await Todo.findByIdAndDelete(req.params.id);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  })
  .post(
    '/toggle-complete&:id',
    async (req: express.Request, res: express.Response) => {
      try {
        await Todo.findOneAndUpdate(
          { _id: req.params.id },
          { completed: !req.body.completed }
        );
        res.sendStatus(200);
      } catch (err) {
        res.sendStatus(500);
        console.log(err);
      }
    }
  );

export default router;
