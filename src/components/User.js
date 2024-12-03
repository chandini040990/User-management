
function User({ user, removeUser }) {
    return (
        <>
            <div className="user-card">
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <button onClick={() => removeUser(user.id)}>Remove</button>
            </div>
        </>
    )

}

export default User;