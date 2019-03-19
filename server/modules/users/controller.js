//now we imported the model we created for schema ---
//       ___________________________________________|
//       |
//       v

import Users from './model';

export const createOnbvnReg = async (req, res) => {
    const {full_name,user_name,mobile_number,e_mail,pass_word} = req.body;
    const newOnbvnReg = new Users({full_name,user_name,mobile_number,e_mail,pass_word});

    try{
         return res.status(201).json({user: await newOnbvnReg.save()});
    } catch(error) {
        return res.status(error.status).json({error: true, message: 'Error with onbvn'});
    }
};

export const getAllUsers = async (req, res) => {
    try {
         return res.status(200).json({users: await Users.find({})});
    } catch (error) {
        return res.status(error.status).json({error: true, messages: 'Error with onbvn'});
    }
};

export const findUsername = async (req, res) => {
    try {
        return res.status(200).json({user: await Users.findOne({user_name: req.params.user_name}).select('user_name pass_word')})
    } catch (error) {
        return res.status(error.status).json({error: true, messages: 'Error with onbvn'});
    }
};
