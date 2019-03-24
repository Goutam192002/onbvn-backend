import User from './model';

const create = async (req, res) => {
    const {
        name,
        username,
        mobile_number,
        email,
        password
    } = req.body;
    const User = new User({ name, username, mobile_number, email, password });

    try{
        return res.status(201).json(await User.save());
    } catch(error) {
        return res.status(error.status).json({
            error: true,
            message: 'Something went wrong..Please try again later'
        });
    }
};

const getAll = async (req, res) => {
    try {
        return res.status(200).json( await User.find({}));
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
        }).select('username name mobile_number email'))
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
