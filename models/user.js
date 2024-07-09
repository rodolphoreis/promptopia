import { Schema, model, models } from "mongoose";

const UserSchema = newSchema({
  email: {
    type: String,
    unique: [true, "Email já existente!"],
    required: [true, "Email é obrigatório!"],
  },
  userName: {
    type: String,
    required: [true, "Nome é obrigatório!"],
    match: [
      /^(?=.{8,20}$)(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Nome invalido!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
