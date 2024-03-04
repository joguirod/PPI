const axios = require('axios');
const fs = require('fs');

async function downloadImage(url) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });


        const contentType = response.headers['content-type'];
        if (!contentType.startsWith('image')) throw new Error('Não é uma imagem.');

        const extension = contentType.split('/')[1];
        fs.writeFileSync(`image.${extension}`, response.data);
        
        console.log('Imagem baixada com sucesso.');
    } catch (error) {
        console.error('Erro ao baixar a imagem:', error.message);
    }
}


const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/1/15/Santos_Logo.png';
downloadImage(imageUrl);