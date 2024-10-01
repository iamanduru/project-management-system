import mongoose from mongoose;

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, //Project Owner
    organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true}, //Organization the project belongs to 
    description: String,
    createdAt: { type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);