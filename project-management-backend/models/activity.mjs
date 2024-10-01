import mongoose from mongoose;

const activitySchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    userOrganizationId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserOrganization', required: true }, 
    action: { type: String, required: true }, // Action type created,updated,deleted
    timestamp: {type: DataTransfer, default: Date.now},
});

module.exports = mongoose.model('Activity', activitySchema);