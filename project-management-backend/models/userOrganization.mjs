import mongoose from mongoose;

const userOrganizationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true},
    role: { type: String, enum:['admin', 'editor', 'viewer', 'data-entry'], required: true },
});

module.exports = mongoose.model('UserOrganization', userOrganizationSchema);