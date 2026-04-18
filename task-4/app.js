const { MongoClient, ObjectId } = require("mongodb")

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)
const dbName = "task4"

async function addUser() {
    try {
        await client.connect()
        console.log("Connected to MongoDB")

        const db = client.db(dbName)
        const users = db.collection("users")

        // 1️⃣ insertOne (2 users)
        const user1 = await users.insertOne({
            name: "sagda",
            age: 20,
            city: "giza"
        })

        const user2 = await users.insertOne({
            name: "lana",
            age: 25,
            city: "cairo"
        })

        console.log("Inserted IDs:", user1.insertedId, user2.insertedId)

       // await addManyUsers(users)

        //await findAge27(users)

       // await limitUsers(users)
       // await findUsers(users, "69d11eab74e0c1c33153c380")
        await countUsers(users)
        await updateUser(users,"69d11eab74e0c1c33153c380" )
        await updateManyUsers(users)
        await deleteUser(users, "69d11eab74e0c1c33153c380")
        await deleteManyUsers(users)

    } catch (err) {
        console.log(err)
    }
}

addUser()

//////////////////////////////////////////////////////

async function addManyUsers(users) {
    const result = await users.insertMany([
        { name: "samy", age: 7, city: "cairo" },
        { name: "sara", age: 24, city: "giza" },
        { name: "yaya", age: 22, city: "alex" },
        { name: "lolo", age: 20, city: "mansoura" },
        { name: "sagda", age: 70, city: "tanta" },

        { name: "mina", age: 22, city: "cairo" },
        { name: "kerolos", age: 24, city: "giza" },
        { name: "lala", age: 29, city: "alex" },
        { name: "shimoo", age: 31, city: "sohag" },
        { name: "roro", age: 35, city: "aswan" }
    ])

    console.log("Inserted count:", result.insertedCount)
}

//////////////////////////////////////////////////////

// 3️⃣ find
async function findAge27(users) {
    const data = await users.find({ age: 27 }).toArray()
    console.log("Users age 27:", data)
}

// 4️⃣ limit
async function limitUsers(users) {
    const data = await users.find({ age: 27 }).limit(3).toArray()
    console.log("First 3 users age 27:", data)
}

// 5️⃣ findOne
async function findUsers(users, id) {
    const user = await users.findOne({ _id: new ObjectId(id) })

    if (user) console.log("User found:", user)
    else console.log("User not found")
}

async function countUsers(users) {
    const count = await users.countDocuments({ age: 27 })
    console.log("Count age 27:", count)
}

// 7️⃣ updateOne
async function updateUser(users, id) {
    const result = await users.updateOne(
        { _id: new ObjectId(id) },
        {
            $set: { name: "shosho" },
            $inc: { age: 1 }
        }
    )
    console.log("Modified:", result.modifiedCount)
}

// 8️⃣ updateMany
async function updateManyUsers(users) {
    const result = await users.updateMany(
        {},
        { $inc: { age: 5 } }
    )
    console.log("Modified many:", result.modifiedCount)
}

// 9️⃣ deleteOne
async function deleteUser(users, id) {
    const result = await users.deleteOne({
        _id: new ObjectId(id)
    })
    console.log("Deleted one:", result.deletedCount)
}

// 🔟 deleteMany
async function deleteManyUsers(users) {
    const result = await users.deleteMany({
        age: { $gt: 30 }
    })
    console.log("Deleted many:", result.deletedCount)
}