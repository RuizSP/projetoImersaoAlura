import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao)
{
    let mongoClient;

    try
    {
        mongoClient = new MongoClient(stringConexao);
        console.log("concetando ao cluster do banco de dados");
        await mongoClient.connect();
        console.log("Conectado ao MongoDb Atlas com sucesso");
        return mongoClient;
    }catch (erro)
    {
        console.log("Falha na conexão com banco!", erro);
        process.exit();
    }
}