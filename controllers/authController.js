import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";


export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, postalcode } = req.body
        //validations
        if (!name) {
            return res.send({ message: 'Name is Required' })
        }
        if (!email) {
            return res.send({ message: 'Email is Required' })
        }
        if (!password) {
            return res.send({ message: 'Password is Required' })
        }
        if (!phone) {
            return res.send({ message: 'Phone is Required' })
        }
        if (!address) {
            return res.send({ message: 'Address is Required' })
        }
        if (!postalcode) {
            return res.send({ message: 'Postal Code is Required' })
        }

        //existing user

        const existingUser = await userModel.findOne({ email }) //checking email a artibute that confirm that it already exist or not

        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already Registered Please Login"
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)

        //to save the user
        const user = await new userModel({ name, email, password: hashedPassword, phone, address, postalcode }).save();

        res.status(201).send({
            success: true,
            message: "User Rgistered Sucessfully",
            user

        });
    } catch (error) {

        console.log(error);
        res.status(500).send({
            success: false,
            message: "Registration Failed", error

        });
    };


};
//manages the login of user on the website
export const loginController = async (req, res) => {
    try { //validation
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid Email or Password"

            });


        }
        //check user exist
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not Registred"
            })
        }
        //check if password match

        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password"
            })
        }

        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.status(200).send({
            success: true,
            message: "Login Successfull",
            user: {
                Name: user.name,
                Email: user.email,
                Phone: user.phone,
                Address: user.address,
                Postalcode: user.postalcode

            },
            token
        });




    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login Please Try Again",
            error

        })
    }
};

//middleware

export const testController = (req, res) => {
    console.log("Protected Route");

}