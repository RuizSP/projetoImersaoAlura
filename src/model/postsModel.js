import 'dotenv/config';
// Importa a função de conexão com o banco de dados
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Função assíncrona para conectar ao banco de dados
const conectarServidor = await conectarAoBanco(process.env.STRING_CONEXAO);
// Função assíncrona para obter todos os posts do banco
export async function getAllPosts()
{
    // Obtém a conexão com o banco e seleciona o banco "imersao-instabytes"
    const db = (await conectarServidor).db("imersao-instabytes");
    // Seleciona a coleção "posts" dentro do banco
    const colecao = db.collection("posts");
    // Busca todos os posts e converte o resultado para um array
    return colecao.find().toArray();
}

export async function criarPost(novoPost)
{
    // Obtém a conexão com o banco e seleciona o banco "imersao-instabytes"
    const db = (await conectarServidor).db("imersao-instabytes");
    // Seleciona a coleção "posts" dentro do banco
    const colecao = db.collection("posts");

    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = (await conectarServidor).db("imersao-instabytes");
    // Seleciona a coleção "posts" dentro do banco
    const colecao = db.collection("posts");
    const objectId = ObjectId.createFromHexString(id);


    return colecao.updateOne({_id: new ObjectId(objectId)}, {$set:novoPost});
}