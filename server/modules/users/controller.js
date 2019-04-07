import User from './model';
import * as bcrypt from "bcrypt";
bcrypt.hashAsync = util.promisify(bcrypt.hash);

const create = async (req, res) => {
    let {
        name,
        username,
        mobileNumber,
        email,
        password,
        profilePicture,
        aadharUID
    } = req.body;
    try {
        password = await bcrypt.hashAsync(password, 8);
        const User = new User({ name, username, mobileNumber, email, password, profilePicture, aadharUID });
        return res.status(201).json(await User.save());
    } catch (error) {
        return res.status(500).json({ message: 'Could not create user...Please try again later'})
    }
};

const getAll = async (req, res) => {
    try {
        return res.status(200).json( await User.find({}).select('name username mobileNumber email profilePicture'));
    } catch (error) {
        return res.status(error.status).json({
            error: true,
            message: 'Something went wrong..Please try again later'
        });
    }
};

const findUser = async (req, res) => {
    try {
        return res.status(200).json(await User.findOne({
            username: req.params.username
        }).select('username name mobileNumber email profilePicture'))
    } catch (error) {
        return res.status(error.status).json({
            error: true,
            message: 'Something went wrong...Please try again later'
        });
    }
};

const updateUser = async (req, res) => {
    let username = req.params.username;
    let user = req.body;
    try {
        res.status(200).json(await User.findOneAndUpdate({
            username: username
        }, user).select('username name mobile_number email'))
    } catch (error) {
        res.status(error.status).json({
            error: true,
            message: 'Something went wrong...Please try again'
        })
    }
};

const deleteUser = async (req, res) => {
    let username = req.params.username;
    try {
        res.status(200).json(await User.findOneAndDelete({
            username: username
        }))
    } catch (error) {
        res.status(error.status(200).json({
            error: true,
            message: 'Something went wrong...Please try again later'
        }))
    }
};

export {
    create,
    getAll,
    findUser,
    updateUser,
    deleteUser
}
