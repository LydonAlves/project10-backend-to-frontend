const { generateKey } = require('../../utils/jwt')
const User = require('../models/User')
const bcrypt = require('bcrypt')

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getAllUsers = async (req, res, next) => {
  try {
    console.log('functioning')
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getAllUsersFromEvent = async (req, res, next) => {
  try {
    const ids = req.body.ids
    const usersAttending = await User.find({ _id: { $in: ids } })

    return res.status(200).json(usersAttending)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const register = async (req, res, next) => {
  try {
    const userDuplicated = await User.findOne({ userName: req.body.userName })

    if (userDuplicated) {
      return res
        .status(409)
        .json('User already exists, choose a different name.')
    }

    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      telephone: req.body.telephone,
      city: req.body.city
    })

    const user = await newUser.save()
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const login = async (req, res, next) => {
  try {
    const { userName, password } = req.body
    const user = await User.findOne({ userName })

    if (!user) {
      return res.status(400).json('User or password are incorrect')
    }

    if (bcrypt.compareSync(password, user.password)) {
      const token = generateKey(user._id)
      return res.status(200).json({ token, user })
    }

    return res.status(400).json('User or password are incorrect')
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  getAllUsers,
  getAllUsersFromEvent,
  register,
  login,
  getUserById
}
