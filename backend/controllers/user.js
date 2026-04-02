import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const Login = asyncHandler(async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(401).json({ message:"Invalid credentials", success:false })
        }
        const user = await User.findOne({email})
        if (!user) {
            return res.status(401).json({ message:"No account for this Email", success:false })
        }
        const isMatch = await bcryptjs.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message:"Invalid pass or email", success:false })
        }
        const tokenData = { id: user._id }
        const token = jwt.sign(tokenData, "jhcbebgfrgbfrbgfygb", { expiresIn:"1d" })
        return res
            .status(200)
            .cookie("token", token, {
                httpOnly: true,
                secure: true,        // ✅ required for HTTPS on mobile
                sameSite: "none",    // ✅ required for mobile browsers
                maxAge: 24 * 60 * 60 * 1000
            })
            .json({ message:`Welcome back ${user.fullName}`, success:true, user: user })
    } catch (error) {
        console.log(error);
    }
})

export const Logout = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .cookie("token", "", {
            httpOnly: true,
            secure: true,        // ✅ required for HTTPS on mobile
            sameSite: "none",    // ✅ required for mobile browsers
            expires: new Date(0)
        })
        .json({ message:"User Logged out successfully", success:true })
})

export const Register = asyncHandler(async (req, res) => {
    try {
        const {fullName, email, password} = req.body;
        if (!fullName || !email || !password) {
            return res.status(401).json({ message: "Invalid Data", success: false })
        }
        const user = await User.findOne({email})
        if (user) {
            return res.status(401).json({ message: "Email has been already used", success: false })
        }
        const hashedPassword = await bcryptjs.hash(password, 6)
        await User.create({ fullName, email, password: hashedPassword });
        return res.status(200).json({ message:"Account Created Successfully", success:true })
    } catch (error) {
        console.log(error);
    }
})
