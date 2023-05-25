import mongoose from 'mongoose'

const conn = async ()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected "+ con.connection.host);
    }
    catch(err){
        console.log("failed to connect "+err);
        process.exit(1);
    }
}

export default conn