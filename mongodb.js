// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true, }, (error, client) =>{
    if(error){
        return console.log("Unable to connect to database!")
    }

    console.log("Connected")
    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description:"Clean the house"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').deleteMany({
    //     age:27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updatePromisse = db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // })

    // updatePromisse.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })



    // const updatePromisse = db.collection('users').updateOne({
    //     _id: new ObjectID('5ed4466681dc4e3834b7569b')
    // }, {
    //     $set: {
    //         name: 'Yasmim'
    //     }
    // })

    // updatePromisse.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5ed44d360c1e6725688346d1")}, (error, tasks) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(tasks)
    // })

    // db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('users').findOne({_id: new ObjectID("5ed44ad8a1397a179037419e")}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').findOne({name: 'Jen'}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').insertOne({
    //     name: 'Matheus',
    //     age: 26
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Clean the house',
    //         completed:true
    //     },
    //     {
    //         description:'Renew inspection',
    //         completed:false
    //     },
    //     {
    //         description:'Plot plants',
    //         completed:false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('unable to insert tasks')
    //     }
    //     console.log(result.ops)
    // })
})