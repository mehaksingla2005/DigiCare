import mongoose from "mongoose"

const medicalrecordSchema=new mongoose.Schema({
    
     
},{timestamps:true})

export const Medicalrecord=mongoose.model("Medicalrecord",medical_recordSchema)