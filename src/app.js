const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(cors())

// const multer = require('multer')
// const upload = multer({
//     dest: 'images'
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// app.listen(port, () => {
//     console.log('Server is up on port' + port)
// })

module.exports = app

// const main = async () => {
//     const user = await User.findById('5ee1891edee3601b840f6276')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()