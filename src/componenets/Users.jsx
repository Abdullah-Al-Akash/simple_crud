import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const usersData = useLoaderData()
    console.log(usersData);
    return (
        <div>
            <h3>Users Collection</h3>
            <div className="mt-5">
                {
                    usersData.map(user => <div className="p-3 bg-dark text-white m-3 rounded" key={user._id}>
                        <h6 className="text-warning">{user.name}😍</h6>
                        <h6>{user.email}✅</h6>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;