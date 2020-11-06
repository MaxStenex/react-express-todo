import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TodoSchema = new Schema({});

export default mongoose.model('todo', TodoSchema);
