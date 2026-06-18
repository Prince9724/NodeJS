import {MongoClient} from "mongodb"//mongoclient ko mangodb ke ander se import kiya hua hai 

const url ="mongodb://127.0.0.1:27017"//mongodb ka connect url hai jisko url naame ki variable me stor kiya 
const db_name = "studentdb"//
const client = new MongoClient(url);//client naame ki variale bna ke url ko mongodbClient ke ander store kiuya hua hai 
const connectdb = async()=>{
    await client.connect();
    console.log("mongodb connected succesfully !!")
    //database ke ander jo bhi perform krna vo perform krne ke liye ye ek object de rha hai 
    return client.db(db_name)//jo db naame ka variable bnaaya hai vo cleint db jo hmko de rha hai vo return kiya hai 
    // aur client db data base ka refrence de rha hai aur ye sab kab hoga jab connectdb unction ko call krenge tab 
    // aur function ko add student ke ander call kiya hai 
}
const addStudenet =async()=>{
    const db = await connectdb();//jaise hi connectdb ko call kiya hai uski saari vailue db naame ki variable me aa gyi 
    //aur isi variable se database ke ander insert aur update delete select ka kaam krenge 
    // db jis varible me connect db ka data ya object store hai aur aur db ke adnder ek collection bn gya jiska naame 
    // sudent hai aur is student ke ander ek docment dd ho jaayeg insetOne naame ke function ke call hone se 
    //aur vo document ke ander key value pair me data add ho jaayegi 
    const result =await db.collection("student").insertOne({
        id:1,
        name:"aman gupta",
        cource:"c-language"
    })
    //aur jo bhi massega aayega vo result naame ki variable me store ho gya 
    console.log("Data inserted succesfully !!",result);
}
addStudenet();//add student ko call kiya hai 
//flow kya hai --> sabse pahle addstudent call hoga uska o call hote hi connectdb call hoga aur ek object 
// return krega jo db naame ki varibale ke ander store hoga uske baad result naame ka varibel ke ander 
//db.collection function(student naam diya ) uske ander document add hua jo insertone hai aur document 
//document ke ander sab sata key value ke pair me add hogi. 

