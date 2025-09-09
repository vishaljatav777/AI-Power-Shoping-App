import User from "../model/usermodel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { gentoken, gentoken1 } from "../config/token.js";

export const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exiteuser = await User.findOne({ email });
    if (exiteuser) {
      return res.status(400).json({ messaage: "User already exits" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ messaage: "Enter valid Email" });
    }
    if (password.length < 8) {
      return res.status(400).json({ messaage: "Enter Strong password" });
    }
    let hashpassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashpassword });
    let token = await gentoken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json(user);
  } catch (error) {
    console.log("registration error:", error);
    return res
      .status(500)
      .json({ message: `registration error: ${error.message}` });
  }
};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ messaage: "User not found" });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ messaage: "Incorrect password" });
    }
    let token = await gentoken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({ messaage: "login succesful" });
  } catch (error) {
    console.log("login error:", error);
    return res.status(500).json({ message: `login error: ${error.message}` });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ messaage: "logout succesful" });
  } catch (error) {
    console.log("logout error:", error);
    return res.status(500).json({ message: `logout error: ${error.message}` });
  }
};


export const googlelogin = async (req,res) => {
  try {
    let { name, email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        name,email
      })
    }
    
    let token = await gentoken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({ messaage: "login succesful" });
  } catch (error) {
    console.log("google login error:", error);
    return res.status(500).json({ message: `google login error: ${error.message}` }); 
  }
}


export const adminLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      let token = await gentoken1(email);
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        maxAge: 1 * 24 * 60 * 60 * 1000,
      });
      return res.status(200).json(token);
    }
    return res.status(400).json({ message: "invalid credentials" });
  } catch (error) {
    console.log("admin login error:", error);
    return res.status(500).json({ message: `admin login error: ${error.message}` });
  }
};
