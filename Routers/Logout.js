import express from 'express';

const logout = express.Router();

logout.get('/logout', (req, res) => {
  // Clear the token cookie by setting an expired date
  res.cookie('token', '', { expires: new Date(0), sameSite: 'none', secure: true }).status(200).json('Logged out successfully');
});

export default logout;
