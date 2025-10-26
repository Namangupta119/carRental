import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt"
import Car from "../models/Car.js";
// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password || password.length < 8) {
      return res.status(400).json({ success: false, message: "Fill all the fields properly" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    const token = generateToken(user._id.toString());
    return res.status(201).json({ success: true, token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// Login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid Credentials" });
    }

    const token = generateToken(user._id.toString());
    return res.status(200).json({ success: true, token });

  } catch (error) {
    console.error("Login Error:", error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};


//Get user data using token
export const getUserData = async (req, res)=>{
    try {
        const {user} = req;
        res.json({success:true, user})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: "Server error" });
    }
}


//get all cars for the frontend
export const getCars = async (req, res)=>{
  try {
    const cars = await Car.find({isAvaliable: true})
    res.json({success: true, cars});
  } catch (error) {
    res.json({success: false, message: error.message});
  }
}