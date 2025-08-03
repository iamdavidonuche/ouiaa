import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());
app.set('view engine', 'ejs');

function formatCustomDate(date) {
  const day = date.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

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

app.get("/", (req, res) => res.render("index.ejs"));
app.get("/about-scholarship", (req, res) => res.render("about-scholarship.ejs"));
app.get("/scholarship", (req, res) => res.render("apply.ejs"));
app.get("/eligibility", (req, res) => res.render("eligibility.ejs"));
app.get("/selection", (req, res) => res.render("selection.ejs"));
app.get("/contact", (req, res) => res.render("contact.ejs"));
app.get("/specification", (req, res) => res.render("specification.ejs"));
app.get("/leadership", (req, res) => res.render("leadership.ejs"));
app.get("/transcript", (req, res) => res.render("transcript.ejs"));
app.get("/about", (req, res) => res.render("about.ejs"));

// transcript application page
app.get("/apply-transcript", (req, res) => res.render("apply-transcript.ejs"));

// SUBMIT transcript form
// 1. receives form
app.post("/apply-transcript", (req, res) => {
  const result = req.body;

  let academicRef = parseInt(result.academicRef);
  let englishProf = parseInt(result.englishProf);

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

  res.cookie('transcriptInfo', {
    result,
    selectedDocument,
    total
  }, { maxAge: 30 * 60 * 1000 });

  res.redirect("/payment");
});

// 2. payment page
app.get("/payment", (req, res) => {
  let data = req.cookies.transcriptInfo || {
    result: {},
    selectedDocument: [],
    total: 0
  };

  res.render("payment.ejs", {
    result: data.result,
    selectedDocument: JSON.stringify(data.selectedDocument),
    total: data.total
  });
});

// 3. invoice page
app.get("/invoice", (req, res) => {
  let data = req.cookies.transcriptInfo || {
    result: {},
    selectedDocument: [],
    total: 0
  };

  res.render("invoice.ejs", {
    invoiceResult: data.result,
    names: data.selectedDocument,
    total: data.total,
    date: formatCustomDate(new Date())
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
