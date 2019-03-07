import models from '../../models/index';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../../config';

const AuthController = {

    // fetchAllUsers(req, res){
    //     models.User.findAll().then(users => {
    //         return res.json({
    //             status: 'success',
    //             data: users
    //         }).status(200);
    //     })
    //     .catch(err => console.log(err));
    // },

    register(req, res){
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
         let hashedPassword = bcrypt.hashSync(newUser.password, 8);


         models.User.create({
             first_name: newUser.first_name,
             last_name: newUser.last_name,
             email: newUser.email,
             password: hashedPassword

         }).then(user => {
            const token = jwt.sign({ id: user.id}, config.secret, {
                expiresIn: 86400
            })
            return res.json({
                status: 'success',
                auth: 'true',
                token: token,
                data: user
             }).status(201);
         }).catch(err => console.log(err));
         
    },

    getSingleUser(req, res){
            
        models.User.findById(req.userId, {
            attributes: {
                exclude: ['password']
            }
        }).then(users => {
            return res.json({
                status: 'success',
                data: users
                }).status(200);
        }).catch(err => console.log(err));
        
    },

    login(req, res){
        let oldUser = req.body;
        models.User.findOne({ where :{ email: oldUser.email }}).then(user => {
            if (!user) return res.status(404).send('No user found.');
            let passwordIsValid = bcrypt.compareSync(oldUser.password, user.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
            const token = jwt.sign({ id: user._id }, config.secret, {
              expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        }).catch(err => {
            return res.status(500).send('Error on the server.');
        });
    },
    
    logout(req, res){
        res.status(200).send({ auth: false, token: null });
    },

    // updateAUser(req, res){
    //     const id = req.params.id;
    //     const newUser = req.body;
    //     models.User.findById(id).then(users => {
    //         users.update({
    //             first_name: newUser.first_name,
    //             last_name: newUser.last_name,
    //             email: newUser.email,
    //             password: newUser.password
    //         }).then(user => {
    //             return res.json({
    //                 status: 'success',
    //                 data: user
    //              }).status(201);
    //         });
    //     }).catch(err => console.log(err));
    // },

    // deleteAUser(req, res){
    //     const id = req.params.id;
    //     models.User.findById(id).then(users => {
    //         users.destroy().then(() => {
    //             return res.json({
    //                 status: 'success',
    //                 data: 'Deleted Successfully'
    //              }).status(201);
    //         });
    //     }).catch(err => console.log(err));
    // }
}

export default AuthController;