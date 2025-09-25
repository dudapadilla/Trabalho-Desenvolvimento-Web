const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

//para ler JSON
app.use(express.json());

// Rotas
app.use('/tasks', tasksRouter);

// Rota raiz
app.get('/', (req, res) => {
  res.json({ message: 'To-do API is running!' });
});

//de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno no servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
