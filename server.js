const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const defaultVideo = 'ANIMACAO_MaAlimentacao_TELA_01_v02.mp4';

app.use(express.static('public'));

// Endpoint para atualizar o vídeo
app.get('/set-video', (req, res) => {
    const video = req.query.video;
    res.json({video: video ? video : defaultVideo});

});

app.get('/get-video', (req, res) => {
    res.json({video: defaultVideo});
});


// Servindo os arquivos HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/video', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'video.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
