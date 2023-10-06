import { Button, Form } from 'react-bootstrap'
import './App.css'

function App() {

  const handleAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('User Created Successfully!');
          form.reset();
        }
      })
  }

  return (
    <>
      <h1>Simple CRUD</h1>

      <form onSubmit={handleAddUser} className='p-4 bg-dark rounded mt-4'>
        <Form.Control size="lg" type="text" name="name" placeholder="Enter Your Name" required />
        <br />
        <Form.Control size="lg" type="email" name="email" placeholder="Enter Your Email" required />
        <br />
        <div className="d-grid gap-2">
          <Button type="submit" variant="danger" size="lg">
            Submit
          </Button>
        </div>
      </form>
    </>
  )
}

export default App
