import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  name: { type: String, required: true, trim:true },
  prompt: { type: String, required: true, trim:true },
  photo: { type: String, required: true, trim:true },
}, 
{
    timestamps : true
});

const Post = mongoose.model('Post', postSchema);

export default Post;
