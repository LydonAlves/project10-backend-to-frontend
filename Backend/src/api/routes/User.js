const {
  getAllUsers,
  register,
  login,
  getAllUsersFromEvent,
  getUserById
} = require('../controllers/User')

const usersRouter = require('express').Router()

usersRouter.get('/:id', getUserById)
usersRouter.get('/', isAdmin, getAllUsers)
usersRouter.get('/', getAllUsers)
usersRouter.post('/usersAttending', getAllUsersFromEvent)
usersRouter.post('/register', register)
usersRouter.post('/login', login)

module.exports = usersRouter
