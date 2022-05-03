export const getUsers = () => {
  const users = [];

  for (let i = 1; i <= 100; i++) {
    users.push({ id: i, name: `User ${i}`, clicks: 0 });
  }
  return users;
};
