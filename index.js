import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: 'your-secret',
    resave: false,
    saveUninitialized: true
}));
app.set('view engine', 'ejs');

const date = new Date()

function formatCustomDate(date) {
    const day = date.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    // Add ordinal suffix
    const suffix = (d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    return `${day}${suffix(day)} ${month}, ${year}`;
}

app.get("/", (req, res) =>{
    res.render("index.ejs")
});

app.get("/about-scholarship", (req, res) =>{res.render("about-scholarship.ejs")});

app.get("/scholarship", (req, res) =>{res.render("apply.ejs")});

app.get("/eligibility", (req, res) =>{res.render("eligibility.ejs")});

app.get("/selection", (req, res) =>{res.render("selection.ejs")});

app.get("/contact", (req, res) =>{res.render("contact.ejs")})

app.get("/specification", (req, res) =>{res.render("specification.ejs")});

app.get("/apply-transcript", (req, res) =>{res.render("apply-transcript.ejs")});

app.get("/leadership", (req, res) => {res.render("leadership.ejs")})

app.post("/apply-transcript", (req, res) => {
  const result = req.body;
  
  const academicRef = parseInt(result.academicRef) || 0;
  const englishProf = parseInt(result.englishProf) || 0;

  let total = 0;
  let selectedDocument = [];

  if (academicRef) {
    total += academicRef;
    selectedDocument.push({ name: "Academic Reference Transcript", price: academicRef });
  }
  if (englishProf) {
    total += englishProf;
    selectedDocument.push({ name: "English Proficiency Transcript", price: englishProf });
  }

  // ⭐ SAVE in real session object
  req.session.result = result;
  req.session.total = total;
  req.session.selectedDocument = selectedDocument;

  res.render("payment.ejs", { result, total });
});

app.get("/invoice", (req, res) => {
  if (!req.session.result) {
    return res.send("No invoice data found. Apply first.");
  }

  const { result, total, selectedDocument } = req.session;

  res.render("invoice.ejs", {
    invoiceResult: result,
    names: selectedDocument,
    total,
    date: formatCustomDate(date),
  });
});


app.get('/payment', (req, res) => {
    res.render('payment.ejs', {result: data});
});

app.get("/about", (req, res) =>{
    res.render("about.ejs")
});


app.get("/transcript", (req, res) =>{
    res.render("transcript.ejs");
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})
