const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

/* Serve the frontend website */
app.use(
    express.static(
        path.join(__dirname, "../frontend")
    )
);

const databasePath = path.join(
    __dirname,
    "../database/database.json"
);

/* Get database */
function getDatabase() {
    const data =
        fs.readFileSync(
            databasePath,
            "utf8"
        );

    return JSON.parse(data);
}

/* Save database */
function saveDatabase(database) {
    fs.writeFileSync(
        databasePath,
        JSON.stringify(
            database,
            null,
            4
        )
    );
}

/* Get all users */
app.get("/users", (req, res) => {

    const database =
        getDatabase();

    res.json(
        database.users
    );
});

/* Add a user */
app.post("/users", (req, res) => {

    const database =
        getDatabase();

    const newUser = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email
    };

    database.users.push(
        newUser
    );

    saveDatabase(
        database
    );

    res.json({
        message:
            "User added successfully",
        user:
            newUser
    });
});

/* Get all assessments */
app.get("/assessments", (req, res) => {

    const database =
        getDatabase();

    res.json(
        database.assessments
    );
});

/* Save assessment result */
app.post("/assessments", (req, res) => {

    const database =
        getDatabase();

    const newAssessment = {
        id: Date.now(),

        userId:
            req.body.userId,

        userName:
            req.body.userName,

        skill:
            req.body.skill,

        knowledgeScore:
            req.body.knowledgeScore,

        debugScore:
            req.body.debugScore,

        codingScore:
            req.body.codingScore,

        overallScore:
            req.body.overallScore,

        status:
            req.body.status,

        proofId:
            req.body.proofId,

        proofDate:
            req.body.proofDate
    };

    database.assessments.push(
        newAssessment
    );

    saveDatabase(
        database
    );

    res.json({
        message:
            "Assessment saved successfully",

        assessment:
            newAssessment
    });
});

/* Start backend */
app.listen(
    PORT,
    () => {

        console.log(
            "AI Skill Proof Backend running on http://localhost:3000"
        );

    }
);