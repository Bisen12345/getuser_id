const express = require("express")
const app = express();



// Set up your users array
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
];

// GET "/api/users" endpoint
app.get('/api/users', (req, res) => {
    // Return the list of all users
    res.json(users);
});

// GET "/api/users/:id" endpoint
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    // Find the user with the specified ID
    const user = users.find(user => user.id === userId);

    if (!user) {
        // If user is not found, return a 404 status and an error message
        return res.status(404).json({ error: 'User not found' });
    }

    // Return the user object
    res.json(user);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
