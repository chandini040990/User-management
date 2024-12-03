import User from "./User"

function UserList({ users, removeUser }) {

    return (
        <div className="user-list">
            {users.map((user) => (
                <User key={user.id} user={user} removeUser={removeUser} />
            ))}
        </div>
    )

}

export default UserList;