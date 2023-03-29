const Doctor = require('../model/doctor')

/***********Create Doctor */
exports.createDoctor = async(req,res)=>{
    console.log(req.body)
    try{

        const doctor = new Doctor(req.body)
        await doctor.save()
        
        res.status(201).json({msg:"Blog Created Successfully",doctor})

    }catch(error){
        console.log(error)
        res.status(401).json({err:"Something went Wrong!",error})
    }
}


/**********Get All Doctor */
exports.getAllDoctor = async (req,res)=>{
    console.log("Fetch All Doctor executed")
    try{
        const doctor = await Doctor.find()
        res.status(201).json(doctor)
    }catch(error){
        console.log(error)
        res.status(401).json({err:"Something Went Wrong!",error})
    }
}

/*************get one Doctor */

exports.getOneDoctor = async(req,res)=>{
    try{
        const doctor = await Doctor.findById(req.params.id)
        res.status(201).json(doctor)

    }catch(error){
        res.status(401).json({err:"Something Went Wrong!!",error})
    }
}


/***********Update Doctor */
exports.updateDoctor = async(req,res)=>{
    console.log(req.params)
    try{
        await Doctor.updateOne({_id:req.params.id},req.body)
        res.status(201).json({msg:"Doctor Updated Successfully"})

    }catch(error){
        console.log(error)
        res.status(401).json({err:"Something Went Wrong!!",error})
    }
}

/***********Delete Doctor */
exports.deleteDoctor = async(req,res)=>{
    console.log(req.params.id)
    try{
        const doctor = await Doctor.findByIdAndDelete({_id:req.params.id})
        res.status(201).json({msg:"Doctor deleted Successfully",doctor})

    }catch(error){
        res.status(401).json({err:"Something went Wrong!!",error})
    }
}