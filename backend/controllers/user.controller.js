import models from '../models/index';

const UserController = {

    fetchAllUsers(req, res){
        models.User.findAll().then(users => {
            return res.json({
                status: 'success',
                data: users
            }).status(200);
        })
        .catch(err => console.log(err));
    },

    addAUser(req, res){
        /*
            Expect json of format
            {
                first_name: DataTypes.STRING,
                last_name: DataTypes.STRING,
                email: DataTypes.STRING,
                password: DataTypes.STRING
            }
         */

         const newUser = req.body;
         models.User.create({
             first_name: newUser.first_name,
             last_name: newUser.last_name,
             email: newUser.email,
             password: newUser.password

         }).then(users => {
            return res.json({
                status: 'success',
                data: users
             }).status(201);
         }).catch(err => console.log(err));
         
    },

    getSingleUser(req, res){
        const id = req.params.id;
        models.User.findById(id).then(users => {
            return res.json({
                status: 'success',
                data: users
             }).status(200);
        }).catch(err => console.log(err));
    },

    updateAUser(req, res){
        const id = req.params.id;
        const newUser = req.body;
        models.User.findById(id).then(users => {
            users.update({
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                email: newUser.email,
                password: newUser.password
            }).then(user => {
                return res.json({
                    status: 'success',
                    data: user
                 }).status(201);
            });
        }).catch(err => console.log(err));
    },

    deleteAUser(req, res){
        const id = req.params.id;
        models.User.findById(id).then(users => {
            users.destroy().then(() => {
                return res.json({
                    status: 'success',
                    data: 'Deleted Successfully'
                 }).status(201);
            });
        }).catch(err => console.log(err));
    }
}

export default UserController;