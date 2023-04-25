const readline = require('readline');
const fs = require('fs');
const ytdl = require('ytdl-core');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a url do vídeo: ', (urlVideo) => {

    rl.question('Digite o caminho da pasta de destino: ', (path) => {

        ytdl.getInfo(urlVideo, { filter: 'audioonly' }, (err, info) => {
            if (err) throw err;

            const title = info.videoDetails.title;
            const stream = ytdl(urlVideo, { filter: 'audioonly' });
            
            console.log(`Iniciando o download do arquivo em ${path}`);


            stream.on('finish', () => {
                stream.pipe(fs.createWriteStream(`${path}/${title}.mp3`));
                console.log(`Arquivo ${title}.mp3 salvo em ${path}`);
                rl.close();
            });
        });
    });
});
// C:\Users\lucas\Music
// https://www.youtube.com/watch?v=mWKDZRJWdF4