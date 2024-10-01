import { verify } from 'jsonwebtoken';
import User from '../models/User';

//JWT authentication middleware
const authenticationJWT = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) return req.status(401).json({msg:'Authorization denied! No token!'});
    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        req.user =decoded; //Attach user payload from token to request
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is valid!' });
    }
};

export default { authenticationJWT };