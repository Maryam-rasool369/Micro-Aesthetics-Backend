import { Request, Response } from "express";
import ServiceResult from "../Models/serviceResult";

export const addServiceResult = async (req:Request, res:Response) => {

    try {
        const {serviceName} = req.params;
        const {images} = req.body;

        let service = await ServiceResult.findOne({serviceName});

        if(!service){
            service = new ServiceResult({serviceName,images})
        }
        else{
            service.images.push(...images);
        }

        await service.save();
        res.status(200).json({message:"Images added successfully.", service});

    } 
    
    catch (error) {

        res.status(500).json({message:"Error in adding images.", error});

    }
        
}



export const getServiceResult = async (req:Request, res:Response) => {

    try 
    {

        const {serviceName} = req.params;
        const service = await ServiceResult.findOne({serviceName});

        if(!service)
        {
            res.status(404).json({message:"No images found."})
        }

        else
        {
            res.status(200).json({message:"Images found.", service})
        }

    } 
    
    catch (error) {
        res.status(500).json({message:"Error in getting images", error})
    }
    
}


export const deleteServiceResult = async (req:Request, res:Response) => {

    try 
    {
        const {serviceName} = req.params;
        const{imageURL} = req.body;

        const service = await ServiceResult.findOneAndUpdate(
            { serviceName },
            { $pull: { images: imageURL} },
            { new: true }
        );

        res.status(200).json({message:"Image deleted successfully",service})
    }
    
    catch (error) 
    {
        res.status(500).json({ message: "Error while deleting image", error })
    }
    
}
