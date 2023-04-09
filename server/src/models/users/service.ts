import Users, { UserInterface } from "./user.model";

export async function getUsers(
  query: any,
  projection: object = {
    _id: false,
    __v: false,
  }
) {
  const users = await Users.find(query, projection);
  return users;
}

export async function getOneUser(
  query: any,
  projection: object = {
    _id: false,
    __v: false,
  }
) {
  const user = await Users.findOne(query, projection);
  return user;
}

export async function createUser(query: UserInterface){
    let user = new Users(query);
    await user.save();
}
