// Importa o Express para criar a aplicação web
import express from "express";
import routes from "./src/routes/postsRoutes.js";
// Cria a aplicação Express
const app = express();

app.use(express.static("uploads"));

routes(app)

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000...");
});


