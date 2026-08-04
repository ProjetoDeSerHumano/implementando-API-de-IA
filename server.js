require('dotenv').config({ path: '../.env' });
const express = require('express');
const nunjucks = require('nunjucks');
const { OpenAI } = require('openai');

const app = express();
const porta = 3000;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY 
});

app.use('/css', express.static('css'));

app.use(express.urlencoded({ extended: true }));

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});
app.set('view engine', 'njk');

app.get('/', (req, res) => {

    res.render('index');

});


app.post('/pergunta', async (req, res) => {

    const pergunta = req.body.pergunta_usuario;

    try {

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", 
            messages: [{ role: "user", content: pergunta }],
        });

        const respostaDaIA = response.choices[0].message.content;

        res.render('index', { 
            pergunta_feita: pergunta, 
            resposta_ia: respostaDaIA 
        });

    } catch (erro) {
        console.error("Erro ao chamar a IA:", erro);
        res.render('index', { 
            pergunta_feita: pergunta, 
            resposta_ia: "Ocorreu um erro ao conectar com a IA. Verifique sua chave de API." 
        });
    }
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});