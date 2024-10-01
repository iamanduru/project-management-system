import Organization from '../models/organization';
import UserOrganization from '../models/userOrganization';

exports.createOrganization = async (req, res) => {
    try {
        const organization = new Organization({
            name: req.body.name,
            createdBy: req.user.userId,
        });
        await organization.save();
        res.json(organization);
    } catch (err) {
        res.status(500).send('Server Error!');
    }
};

exports.addUserToOrganization = async (req, res) => {
    const { userId, role } = req.body;

    try {
        const userOrg = new UserOrganization({
            userId,
            organizationId: req.params.orgId,
            role,
        });
        await userOrg.save();
        res.json(userOrg);
    } catch (erro) {
        res.status(500).send('Server Error!');
    }
};