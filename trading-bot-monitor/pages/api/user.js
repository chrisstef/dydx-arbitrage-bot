// pages/api/user.js

export default function handler(req, res) {
    // Assuming you have a function to fetch user data from your backend or database
    const userData = fetchUserData(); // Replace with your own logic
  
    res.status(200).json(userData);
  }
  