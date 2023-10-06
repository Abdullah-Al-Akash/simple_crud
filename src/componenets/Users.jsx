import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedData = useLoaderData();
    const [usersData, setUsersData] = useState(loadedData);


    // Delete Operation:
    const handleDelete = user => {
        const id = user._id;
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert(`${user.name} deleted successfully`);
                    const remainingData = usersData.filter(user => user._id !== id);
                    setUsersData(remainingData);
                }
            })
    }
    return (
        <div>
            <h3>Users Collection</h3>
            <div className="mt-5">
                {
                    usersData?.map(user => <div className="p-3 bg-dark text-white m-3 rounded" key={user._id}>
                        <h6 className="text-warning">{user.name}😍</h6>
                        <h6>{user.email}✅</h6>
                        <Button onClick={() => handleDelete(user)} variant="danger mt-2" size="sm">Delete User</Button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;