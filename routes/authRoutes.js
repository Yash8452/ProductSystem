import express  from "express";
import { loginController, registerController } from "../controllers/authController.js";
//router object

const router = express.Router()

//Routes
//Registeration route
router.post('/register',registerController)
//Login Route
router.post('/login',loginController)
//
router.get("/user-auth", (req, res) => {
    res.status(200).send({ ok: true });
  });



export default router