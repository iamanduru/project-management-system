import express from express;
const router = express.Router();

//Creating an organization
router.post('/project-management-frontend/src/components/Organisations/OrganizationsList.jsx', createOrganization);

//Add user to organization
router.post('/', addUserToOrganization);

module.exports = router;