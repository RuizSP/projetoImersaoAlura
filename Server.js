const express = require("express");

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato adorável se espreguiçando no sol",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Paisagem incrível de um pôr do sol",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Cachorro brincando no parque",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Comida deliciosa e colorida",
        imagem: "https://placecats.com/millie/300/150"
    }
];


const app = express();
app.listen(3000, ()=>{
    console.log("Servidor rodando ...");
});

app.use(express.json());

app.get("/posts", (req,res) =>{
    res.status(200).json(posts);
});



function buscarPostPorID(id){
    return posts.findIndex((post)=>{
        return post.id == Number(id);
    });
}


app.get("/posts/:id", (req,res) =>{
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
})
