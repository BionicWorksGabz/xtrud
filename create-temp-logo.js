// Criando uma logo temporária para o site
// Será substituída quando o usuário fornecer a logo oficial em formato adequado

const Canvas = require('canvas');
const fs = require('fs');

// Configurações da imagem
const width = 240;
const height = 80;
const canvas = Canvas.createCanvas(width, height);
const context = canvas.getContext('2d');

// Fundo transparente
context.clearRect(0, 0, width, height);

// Texto "XTRUD STUDIO"
context.font = 'bold 36px Inter, sans-serif';
context.fillStyle = '#FFFFFF';
context.textAlign = 'left';
context.textBaseline = 'middle';
context.fillText('XTRUD', 10, height/2 - 5);

// Texto "STUDIO" em tamanho menor
context.font = 'bold 24px Inter, sans-serif';
context.fillText('STUDIO', 120, height/2 + 10);

// Salvar como PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('/home/ubuntu/xtrud_studio_portfolio/xtrud-site/public/images/logo-white.png', buffer);

console.log('Logo temporária criada com sucesso!');
