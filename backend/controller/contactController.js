import ContactBook from "../model/user.js";

export const POST = async (req, res) => {
    try {
        const exisitingUser = await ContactBook.findOne({ phone: req.body.phone});
        if(exisitingUser){
            return res.status(400).json({"message": "Phone Number is already Registerd"});
        }
        const newUser = new ContactBook(req.body);
        await newUser.save();
        return res.status(201).json(newUser);
    } catch(err){
        console.log(err);
        return res.status(500).json({error : "Internal Server Error"});
    }
};

export const GET = async (req, res) => {
    try {   
        const users = await ContactBook.find({});
        if(!users || users.length == 0){
            return res.status(404).json({message: "No contact details found!"});
        }
        return res.json(users);
    } catch(err){
        console.log(err);
        return res.status(500).json({error : "Internal Server Error"});
    }
};

export const PUT = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await ContactBook.findById(id);
        if(!userExists){
            return res.json(404).json({"error" : "Contact Not Found!"});
        }
        const updatedData = await ContactBook.findByIdAndUpdate(id, req.body, {new: true});
        await updatedData.save();
        return res.status(201).json(updatedData);
    } catch(err){
        console.log(err);
        return res.status(500).json({error : "Internal Server Error"});
    }
};

export const DELETE = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await ContactBook.findById(id);
        if(!userExists){
            return res.json(404).json({"error" : "Contact Not Found!"});
        }
        await ContactBook.findByIdAndDelete(id, req.body, {new: true});
        return res.status(201).json({message: "Successfully Deleted!"});
    } catch(err){
        console.log(err);
        return res.status(500).json({error : "Internal Server Error"});
    }
};

export const GETBYID = async (req, res) => {
    try {   
        const contact = await ContactBook.findById(req.params.id);
        if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
        }
        return res.status(201).json(contact);
    } catch(err){
        console.log(err);
        return res.status(500).json({error : "Internal Server Error"});
    }
};