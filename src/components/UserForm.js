import { useState } from "react";

function UserForm({ addUser }) {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) return;

        const newUser = {
            id: Date.now(),
            name,
            email
        };

        addUser(newUser);
        setName('');
        setEmail('');
    }

    return (
        <>
            <form className="user-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter the Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter the Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="Submit">Add user</button>
            </form>
        </>
    )
}

export default UserForm;