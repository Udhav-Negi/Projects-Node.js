import dataModel from "../models/dataModels.js";

export default class IndexHandler{
    static indexController = async (req, res)=>{ // This is for showing documents 
        try{
            const result = await dataModel.find();
            res.render('index', {data : result});
        }
        catch(error)
        {
            console.log(error);
        }
    }

    static indexControllerPost = async (req, res)=>{

        let isName = false, isAge = false, isFees = false;
        console.log('body is ', req.body);
        try{
            console.log('inside post')
            if(req.body.name.length > 0)
            {
                isName = true;
            }

            if((req.body.age).toString().length > 0)
            {
                isAge = true;
            }

            if((req.body.fees).toString().length > 0)
            {
                isFees = true;
            }

            if(isName & isAge & isFees)
            {
                const infoDoc = new dataModel ({
                    name : req.body.name, 
                    age : req.body.age,
                    fees : req.body.fees,
                })
        
                const result = await infoDoc.save();
                
            }

            // document.getElementById('myform').style.backgroundColor = 'red'
            
        }
        catch(error)
        {
            console.log(error)
        }
        finally{
            res.redirect('/student')
        }
    }

    static editForm = async (req, res)=>
    {
        try{
            let id = req.params.id;
            const result = await dataModel.findById(id);
            res.render('edit', {data : result})
        }

        catch(error)
        {
            console.log(error)
        }
    }

    static updateForm = async (req, res)=>{
        try 
        {
            let id = req.params.id;
            console.log(req.body)

            const result = await dataModel.findByIdAndUpdate(id, {name : req.body.name, age : parseInt(req.body.age), fees : parseInt(req.body.fees)}, {returnDocument : "after"})
            console.log(result)
            res.redirect('/student');
        }

        catch(error)
        {
            console.log(error);
        }
    }

    static deleteForm = async (req, res)=>{
        try{
            let id = req.params.id;
            const result = await dataModel.findByIdAndDelete(id);
            console.log(result);
            res.redirect('/student');
        }

        catch(error)
        {
            console.log(error)
        }
    }

}