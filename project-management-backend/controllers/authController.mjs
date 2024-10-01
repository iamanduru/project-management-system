import User, { findOne } from '../models/User.mjs';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.mjs';

// Register
export async function register(req, res) {
  const { email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Login
export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Logout
export async function logout(req, res) {
  // For stateless JWT authentication, logout can just be handled on the client-side
  res.json({ message: 'Logged out successfully' });
}
