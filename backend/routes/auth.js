const express = require("express");
const User = require("../models/User");
const router = express.Router();
const {
  validator,
  registreRules,
  loginRules,
} = require("../middelwares/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../middelwares/isAuth");
//test

router.get("/test", (req, res) => {
  res.send("test ok ");
});

// url api/user/signup
// method post
// req.body

router.post("/signup", [registreRules, validator], async (req, res) => {
  
  const { firstname,lastname, email, password } = req.body;
  try {
    //check user exist
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      res.status(400).send({ errors: [{ msg: "email is already exist " }] });
    }

    const user = new User({
      firstname,
      lastname,
      email,
      password,
    });
    // hash password
    const salt = 10;
    const hashPassword = await bcrypt.hash(password, salt);
    user.password = hashPassword;
    await user.save();

    // token
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, process.env.magasinDB, { expiresIn: "1d" });
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
});

// url /api/user/signin
//method post
// req.body

router.post("/signin", [loginRules, validator], async (req, res) => {
  const { email, password } = req.body;
  try {
    //check user exist

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ errors: [{ msg: "user not found " }] });
    }
    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ errors: [{ msg: "user not found " }] });
    }

    //token
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, process.env.mysecret, {
      expiresIn: "1d",
    });
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
});

// url api/user/current
//method get
//req.headers
router.get("/current", isAuth, async (req, res) => {
  console.log(req.user);
  try {
    const user = await User.findById(req.user.id);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
});
//edit Profile


router.put('/editprofile' ,isAuth, async(req,res)=>{

  try {
    const userId=req.user.id 
    const user=await User.findByIdAndUpdate (userId,{$set:{...req.body}})
    res.send (user)
  } catch (error) {
    console.log(error)
  }
}) 





module.exports = router;