function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <br />
      <b>{user.email}</b>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "1004",
      email: "1004@gmail.com",
    },
    {
      id: 2,
      username: "lee",
      email: "lee@example.com",
    },
    {
      id: 3,
      username: "nany",
      email: "nany@example.com",
    },
  ];

  return (
    <div>
      {/* <b>이름: {users[0].username}</b>
        <br />
        <b>연락처: {users[0].email}</b> */}
      <User user={users[0]} />
      {users.map((v) => (
        <User user={v} />
      ))}
    </div>
  );
}

export default UserList;
