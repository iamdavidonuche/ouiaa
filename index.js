import express from "express";
import bodyParser from "body-parser";
import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express()
const port = 3000

app.use(express.static("public"));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) =>{
    res.render("index.ejs", {
        title: "home"
    })
})
app.get("/directory", (req, res) =>{
    res.render("directory.ejs", {
        title: "directory"
    })
})
app.get("/events", (req, res) =>{
    res.render("events.ejs", {
        title: "events"
    })
})

app.get("/profile", (req, res) =>{
    res.render("profile.ejs", {
        title: "profile"
    })
});

app.get("/transcript", (req, res) =>{
    res.render("transcript.ejs", {
        title: "transcript"
    })
})

app.get("/dashboard", (req, res) =>{
    res.render("dashboard.ejs")
})

let registeredUser = []

app.get("/login", (req, res) =>{
    res.render("login.ejs", {success: false})
})
app.get("/register", (req, res) =>{
    res.render("register.ejs", {success: false});
})

app.post("/login", (req, res) =>{
    let data = req.body;

    // Get the registered user
    const getRegisteredUser = registeredUser.find(
        user => user.email === data.email &&  user.password == data.password
    );
    
    // Checks if the user is registered
    const userExists = registeredUser.some(user => user.email === data.email && user.password === data.password);

    console.log(getRegisteredUser)
    console.log(userExists)
    if(userExists){
        res.render("dashboard.ejs", {name: getRegisteredUser.firstName})
    }else{
        res.render("login.ejs", {failedLogin: false})
    }
})

app.post("/register", (req, res) =>{
    let data = req.body;
    const userAlreadyExists = registeredUser.some(user => user.email === data.email);
    if(!userAlreadyExists){
       registeredUser.push(data) 
       console.log(registeredUser)
       res.render('register.ejs', { 
        success: true,
        message: "Registered Successfuly"
    });
    }else{
        res.render("register.ejs", {
            success: true,
            message: "Email has already been used try again!"
        })
    }
    
    
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})