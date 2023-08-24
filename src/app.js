import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [
  { id: "shdhdituheriut", name: "juan roman" },
  { id: "shdhdituheriut", name: "mono navarro montoya" },
];

app.get("/api/user", async (req, res) => {
  res.json({ status: "success", payload: users });
});

app.post("/api/user", async (req, res) => {
  const user = req.body;
  const userWithId = {
    id: Math.random().toString(36).slice(2, 11),
    ...user,
  };
  users.push(userWithId);
  res.send({ status: "success", payload: userWithId });
});

app.listen(8087, () => console.log("Listeing..."));

/**
 *
 * docker login
 *
 * docker tag simpleapi arturoverbel/simpleapi:1.0.0
 *
 * docker push arturoverbel/simpleapi:1.0.0
 *
 * docker run -it -p 8080:8080 --name simplecontainer -d arturoverbel/simpleapi:1.0.0
 *
 *
 */
