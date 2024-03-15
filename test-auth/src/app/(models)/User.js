import mongoose, { Schema, models, mongo } from "mongoose";
//https://mongoosejs.com/docs/models.html
//https://mongoosejs.com/docs/guide.html

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const User = models.User || mongoose.model("User", userSchema);

export default User;
