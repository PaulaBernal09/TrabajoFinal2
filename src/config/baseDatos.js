import mongoose from "mongoose";




const conexionMongo = async() => {

await mongoose.connect(process.env.BD_URL,{})



try{
    console.log('conexión exitosa');
} catch(error) {

    console.log('Error de conexión', error.message);

}

}

export default conexionMongo;
