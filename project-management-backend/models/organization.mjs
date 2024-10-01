import mongoose, { mongo } from "mongoose";
import axios from 'axios';


const organizationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Organization Creator
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserOrganization' }] //List of users in hte Organization
});


export const getOrganizations = async () => {
    try {
      const response = await axios.get('/api/organizations');
      return response.data;
    } catch (error) {
      console.error('Error fetching organizations:', error);
      throw error;
    }
  };


module.exports = mongoose.model('Organization', organizationSchema);