
import express from "express";
import multer from "multer";
import cors from "cors";

import { getPosts, postarNovoPost, atualizarNovoPost, uploadImagem } from "../controllers/postsController.js";

const corsOptions ={
    origin:"http://localhost:8000",
    optionsSuccessStatus: 200
}



const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({dest:"./uploads", storage});

 const routes = (app) =>{4



    // Habilita o parseamento de dados JSON na requisição
    app.use(express.json());

    app.use(cors(corsOptions));
    
    // Rota para obter todos os posts
    app.get("/posts", getPosts);

    app.post("/posts", postarNovoPost);

    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizarNovoPost);
}

export default routes;