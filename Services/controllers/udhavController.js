import fetch from "node-fetch";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import userModel from "../model/models.js";

const saltRounds = 10;


export default class Controller {
    static defaultGet = async (req, res)=>{
        try {
            console.log('inside default get')
            // const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${ process.env.API || "09d58a6fc1264a1aa5d6c45495e9f8a5"}`
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API}&pageSize=12`
            let result = await fetch(url);
            result = await result.json();
            // console.log('data is ', result)
            result.articles.forEach((item)=>{
                if(item.description)
                {
                    item.description = item.description.slice(0, 50);
                }
                else
                {
                    item.description = "No Description"
                }

                if(!item.urlToImage)
                {
                    // item.urlToImage = "/udhav/img/default.jpg"
                    item.urlToImage = "https://images.cnbctv18.com/wp-content/uploads/2023/08/amazon-1019x573.jpg"
                }

                // console.log('item is ', item.description.slice(0, 80))
            })
            res.render('home', {data : result.articles});
            
        } catch (error) {
            console.log('error occured ', error)
        }
    }

    static logIn = async(req, res)=>{
        res.render("login")
    }

    static logInPost = async(req, res)=>{
        try {
            res.send("inside news")
        }
         catch (error) {
            console.log(error);
        }
    }

    static signUp = async(req, res)=>{
        try{
            res.render('signup')
        }
        catch(error)
        {
            console.log(error);
        }
    }

    static signUpPost = async(req, res)=>{
        try {
            let {firstname, lastname, email, number, password, date, month, year, gender} = req.body;
            console.log(req.body)
            let item = new userModel();
            password = await bcrypt.hash(password, saltRounds);
            const token =  jwt.sign(item._id.toString(), process.env.KEY);
            let date_new = new Date();
            res.cookie("jwt", token, {maxAge : 360000});
            // res.cookie("jwt", token, {expires : new Date() + 1000*60});
            item.firstName = req.body.firstname,
            item.lastName = req.body.lastname,
            item.email = req.body.email,
            item.number = req.body.number,
            item.password = password, 
            item.dob = [req.body.date, req.body.month, req.body.year],
            item.gender = req.body.gender, 
            item.token = token
            await item.save()
            res.redirect('/udhav/login');
        } 
        catch (error) {
            console.log('error inside post')
            console.log(error)
        }
    }
}