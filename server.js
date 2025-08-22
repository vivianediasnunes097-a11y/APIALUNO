const express = require("express"); // framework web
// cria a aplicação express
const app = express();
app.use(express.json());
const PORT = 3000;

const ALUNOS = [
    {
        id: 1, nome: "Felipe", cor: "Azul", idade: 16
    },
    {
        id: 2, nome: "Daniel", cor: "Vermelho",  idade: 17
    },
    {
        id: 3, nome: "Ana",cor: "Verde",idade: 17
    },
]

app.get("/", (req, res) => {
    res.json({
        msg: "Hello world"
    })
})

app.get("/alunos",(req, res)=>{
    res.json(ALUNOS);
})

app.get("/alunos/:id", (req , res)=>{
    const id = Number(req.params.id)
    console.log(`Valor recebido ${id}`);
    
    const aluno = ALUNOS.filter( (aluno) => aluno.id === id )
    if(aluno.length > 0){
        res.status(200).json(aluno)
    }else{
        res.status(404).json({ msg: "Aluno não encontrado"})
    }     
})

app.get("/alunos/cor/:cor", (req, res) => {
    const cor = req.params.cor;
    console.log(`Cor recebida: ${cor}`);    
    const alunosFiltrados = ALUNOS.filter(
        (aluno) => aluno.cor.toLowerCase() === cor.toLowerCase()
    );
    if (alunosFiltrados.length > 0) {
        res.status(200).json(alunosFiltrados);
    } else {
        res.status(404).json({ msg: "Nenhum aluno encontrado com essa cor" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})