// import { MongoClient } from "mongodb"//mongoclient ko mangodb ke ander se import kiya hua hai 

// const url = "mongodb://127.0.0.1:27017"//mongodb ka connect url hai jisko url naame ki variable me stor kiya 
// const db_name = "studentdb"//
// const client = new MongoClient(url);//client naame ki variale bna ke url ko mongodbClient ke ander store kiuya hua hai 
// const connectdb = async () => {
//     await client.connect();// lient yha pr promiss return kr rha hai isliye awit ka use kr rhe hai aure server ko database ke sath connect kr rha hai 
//     console.log("mongodb connected succesfully !!")
//     //database ke ander jo bhi perform krna vo perform krne ke liye ye ek object de rha hai 
//     return client.db(db_name)//jo db naame ka variable bnaaya hai vo cleint db jo hmko de rha hai vo return kiya hai 
//     // aur client db data base ka refrence de rha hai aur ye sab kab hoga jab connectdb unction ko call krenge tab 
//     // aur function ko add student ke ander call kiya hai 
// }
// const addStudenet = async () => {
//     const db = await connectdb();//jaise hi connectdb ko call kiya hai uski saari vailue db naame ki variable me aa gyi 
//     //aur isi variable se database ke ander insert aur update delete select ka kaam krenge 
//     // db jis varible me connect db ka data ya object store hai aur aur db ke adnder ek collection bn gya jiska naame 
//     // sudent hai aur is student ke ander ek docment dd ho jaayeg insetOne naame ke function ke call hone se 
//     //aur vo document ke ander key value pair me data add ho jaayegi 
//     // const result =await db.collection("student").insertOne({//yha pe keval ek hi object paas hoga object ke ander multiple object nahi paas hoga
//     //      id:1,
//     //     name:"aman gupta",
//     //     cource:"c-language" ,
//     // })
//     //     const result =await db.collection("student").insertMany([{ //yha pr array pass ho skta hai kyu insermany use ho rha hai
//     //          id:2,
//     //         name:"aman gupta",
//     //         cource:"c-language" ,
//     //     },
//     //     { 
//     //          id:3,
//     //         name:"sudent1",
//     //         cource:"c-language", 
//     //         age:"18",

//     //     }
//     // ])

//     const result = await db.collection("student").find().toArray();//jab .find ka chlaate hai to turant mongodb array nahi deta hai pahle curser deta hai 
//     //curser mtlb data ki traf pointer 
//     //.toArray use actual array me convirt krta hai 
//     // aur ye dono data to get (Read ) kr rhe hai 
//     console.log("student")
//     //aur jo bhi massega aayega vo result naame ki variable me store ho gya 





//     // console.log("Data inserted succesfully !!", result);


// }
// addStudenet();//add student ko call kiya hai 
// //flow kya hai --> sabse pahle addstudent call hoga uska o call hote hi connectdb call hoga aur ek object
// // return krega jo db naame ki varibale ke ander store hoga uske baad result naame ka varibel ke ander
// //db.collection function(student naam diya ) uske ander document add hua jo insertone hai aur document
// //document ke ander sab sata key value ke pair me add hogi.
// //ye jo document like .insertOne, insertmany ye sab mangodb ke liye ek command hai(mongodb ko bol rha hai )
// //  ek insert kro many insert kro
// //collection ke ander student naam ka collection store hai aur student ke ander document me json data
// //hr object ek document hai 





// // update krne ke liye updatemany ka use kr skte hai 


// // sort ke liye jab id :1 fil krenge to accending order me aayega saari id agr -1 ekha to decending order me aayega 
// //like 1 = 1,2,3,4,5 & -1 = 5,4,3,2,1

// // limit =  (2) jitna naumber fill krenge utne tak ka hi data output hoga 
// //skip = (1) jo number ki id fill krenge vo skip ho jaayge 


