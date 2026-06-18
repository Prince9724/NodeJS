import {MongoClient , ObjectId}from 'mongodb'

const url = "mongodb://127.0.0.1:27017"
const dbname = "students-db"

const client = new MongoClient(url);

const clientDb =async()=>{
    await client.connect();
    console.log("database connected succesfully !! ");
    return client.db(dbname);
}

const studentdb = async()=>{
    const db = await clientDb();
    const result = await db.collection("student").insertMany([
        {
            name:"prince ",
            age:"19",
            course:"full stack development "
        },
        {
            name:"prince ",
            age:"19",
            course:"full stack development "
        }
    ])
    console.log("students ",result)

}
const getuser = async()=>{
    
}
// studentdb();