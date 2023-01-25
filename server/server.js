const express = require("express");
const { PrismaClient } = require('@prisma/client');
const cors = require('cors')
const path = require("path");

const prisma = new PrismaClient();

const app = express();


app.use(express.json());
app.use(cors())


const port = process.env.PORT || "3000";



app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
}); 

app.get('/api/v1/primary-color/:email', async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.params.email
            },
        })
        if (user) {
            return res.json(user);
        }
        return res.status(404).send();
    } catch (error) {
        res.status(500).send();
    }
});

app.post('/api/v1/primary-color', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            primaryTheme: req.body.primaryTheme,
        },
    })
    return res.send(user);
});

app.put('/api/v1/primary-color/:email', async (req, res) => {
    try {
        const updateUser = await prisma.user.update({
            where: {
                email: req.params.email
            },
            data: {
                primaryTheme: req.body.primaryTheme,
            },
        })
        if (updateUser) {
            return res.json(updateUser);
        }
        return res.status(404).send();
    } catch (error) {
        res.status(500).send();
    }
})



process.on('unhandledRejection', e => console.log(e));
process.on('uncaughtException', e => console.log(e));

app.listen(port, () => {
    console.log(`Server Running at ${port} 🚀`);
});