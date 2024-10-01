import express from express;
const { registerUser, loginUser } = require('../controllers/authController.mjs');

const router = express.Router();

// Register a new user
router.post('/project-management-frontend/src/components/Auth/RegisterUser.jsx', registerUser);

// Login user and return JWT token
router.post('/project-management-frontend/src/components/Auth/LoginUser.jsx', loginUser);

module.exports = router;