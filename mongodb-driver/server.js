import {MongoClient} from "mongodb"//mongoclient ko mangodb ke ander se import kiya hua hai 

const url ="mongodb://127.0.0.1:27017"//mongodb ka connect url hai jisko url naame ki variable me stor kiya 
const db_name = "studentdb"//
const client = new MongoClient(url);//client naame ki variale bna ke url ko mongodbClient ke ander store kiuya hua hai 
const connectdb = async()=>{
    await client.connect();
    console.log("mongodb connected succesfully !!")
    return client.db(db_name)//jo db naame ka variable bnaaya hai vo 
}
const addStudenet =async()=>{
    const db = await connectdb();
    const result =await db.collection("student").insertOne({
        id:1,
        name:"aman gupta",
        cource:"c-language"
    })
}