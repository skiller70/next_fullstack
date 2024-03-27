
import { model, models, Schema } from "mongoose";

const user = new Schema({
  name: String,
  age: Number,
  userId: String,
});

export const USER = models.USER || model("USER", user);

