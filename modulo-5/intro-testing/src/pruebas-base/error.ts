type User = {
  uid: string;
  name: string;
}

export const createUser = (user: User) => {
  if (user.name === "") throw new Error("El nombre de usuario es obligatorio");

  return user
}