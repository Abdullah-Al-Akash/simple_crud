import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useLoaderData } from 'react-router-dom';

const EditUser = () => {
    const user = useLoaderData();

    // Update User Information:
    const handleUpdateUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };

        // Update API:
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert(`${user.name} updated successfully`);

                }
            })
    }
    return (
        <div>
            <h3>Edit Information of {user.name}</h3>
            <form onSubmit={handleUpdateUser} className='p-4 bg-dark rounded mt-4'>
                <Form.Control size="lg" type="text" name="name" placeholder="Enter Your Name" defaultValue={user.name} required />
                <br />
                <Form.Control size="lg" type="email" name="email" placeholder="Enter Your Email" defaultValue={user.email} required />
                <br />
                <div className="d-grid gap-2">
                    <Button type="submit" variant="danger" size="lg">
                        Update
                    </Button>
                </div>
            </form>
            <div className='d-flex justify-content-end'>
                <Link to="http://localhost:5173/user">
                    <Button className='mt-5' variant="dark">Back to Users Information </Button>
                </Link>
            </div>
        </div>
    );
};

export default EditUser;