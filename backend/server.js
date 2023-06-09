const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Messages = require("./dbMessages");
const Pusher = require("pusher");
const cors = require("cors");

//app config
const app = express();
const port = process.env.PORT || 4000;
const pusher = new Pusher({
  appId: "1615914",
  key: "5059c08ce5ce49931a62",
  secret: "2521d53724047d371de1",
  cluster: "ap2",
  useTLS: true,
});

//middleware
dotenv.config({ path: "./config.env" });
app.use(express.json());
app.use(cors());

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*")
//     res.setHeader("Access-Control-Allow-Headers","*")
//     next()
// })

//DB config
mongoose
  .connect(process.env.MONGOURI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));
const db = mongoose.connection;

db.once("open", () => {
  console.log("db connected");
  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      const currentTime = new Date(Date.now());
      const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: formattedTime,
        received: messageDetails.received,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

//api routes
app.get("/", (req, res) => {
  res.status(200).send("We are making Whatsapp today");
});

app.get("/messages/new", (req, res) => {
  Messages.find()
    .then((e) => res.status(200).send(e))
    .catch((err) => console.log(err));
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage)
    .then((e) => res.status(200).send(e))
    .catch((e) => console.log(e));
});

// //pusher
// pusher.trigger("my-channel", "my-event", {
//     message: "hello world"
//   });

//listen
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
