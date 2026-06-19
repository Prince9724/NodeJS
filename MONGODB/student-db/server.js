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
    const db = await clientDb();
    const result = await db.collection("student").find().toArray();
    console.log("students ", result);
}

const updatedb = async () =>{
    const db = await clientDb();
    const result = await db.collection("student").updateOne(
        {_id: new ObjectId("6a33ec79da269ffa0f1c4472")}
        ,{$set:{name:"Prince",
            course:"Full Stack Web Development"
        }}
)

}
 
const findone = async()=>{
    const db = await clientDb();
    const result =  await db.collection("student").findOne({name:"Prince"});
    console.log(result)
}

// studentdb();
// getuser();
// updatedb();
// findone();// ye mangodb ko bolega ki student naam ki collection dhundo aur usme se prince naame ka oura data laao 




