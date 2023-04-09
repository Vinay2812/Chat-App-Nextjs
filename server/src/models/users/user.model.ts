import { Schema, model, Document } from "mongoose";

interface AuthProviderInterface {
  type: string;
  id: string;
}
export interface UserInterface extends Document {
  name: string;
  email: string;
  image: string;
  reference: AuthProviderInterface[];
}

const UserSchema = new Schema<UserInterface>(
  {
    name: String,
    email: String,
    image: String,
    reference: [Object],
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Users = model("users", UserSchema);
export default Users;
