type UserType = {
  name: string;
  surname: string;
  email: string;
  userPassword: string;
}

function modifyUser(initialValues: Partial<UserType>) {
    console.log(initialValues);
  // Оновлення користувача
}


modifyUser({ 
  email: 'user@mail.com', 
  userPassword: 'password123' 
});  