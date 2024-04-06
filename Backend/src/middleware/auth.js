const User = require('../api/models/User')
const { verifyKey } = require('../utils/jwt')

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace('Bearer ', '')
    const { id } = verifyKey(parsedToken)
    const user = await User.findById(id)

    if (user.rol === 'admin') {
      user.password = null
      req.user = user
      next()
    } else {
      return res
        .status(401)
        .json('Esta acción solo la pueden realizar los administradores')
    }
  } catch (error) {
    return res.status(400).json('No estás autorizado')
  }
}

module.exports = { isAdmin }
