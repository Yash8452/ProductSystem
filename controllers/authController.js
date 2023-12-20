import userModel from '../models/userModel.js';
export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name) {
            return res.send({ message: 'Name is required' });
        }
        if (!email) {
            return res.send({ message: 'Email is required' });
        }
        if (!password) {
            return res.send({ message: 'Password is required' });
        }

        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });

        // If user already exists
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already registered, try login',
            });
        }

        // Creating a new user instance
        const newUser = new userModel({ name, email, password });

        // Saving the user to the database
        const user = await newUser.save();

        res.status(201).send({
            success: true,
            message: 'User registered successfully',
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in registration',
        });
    }
};

//Post login

export const loginController = async (req, res) => {
    try {
        const { name, password } = req.body
        //validation
        if (!name || !password) {
            return res.status(500).send({
                success: false,
                message: 'Invalid email or password',
            })
        }
        // Check if the user already exists
        const user = await userModel.findOne({ name });

        if (!user) {
            return res.status(500).send({
                success: false,
                message: 'User doesnt exisits please register',
            })
        }

        // const match = await comparePassword(password, user.password)

        if (!(password === user.password)) {
            return res.status(500).send({
                success: false,
                message: 'invalid password',
            })
        }
    
        res.status(200).send({
            success: true,
            message: 'login successfully',
            user:{
                name:user.name,
                email:user.email,
            }
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in login',
        })
    }
}

// export const testController = (req,res)=>{
//     res.status(200).send({
//         success: true,
//         message: 'test contoller',
//     })
// }