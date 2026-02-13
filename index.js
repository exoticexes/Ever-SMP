const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'play.everyones.run.place', // Senin verdiğin IP
        port: 24107,                     // Görseldeki portun
        username: 'Kivi_724',            
        version: '1.21.11'               // Logdaki hatayı çözen tam sürüm
    })

    bot.on('spawn', () => console.log('BAŞARILI: Bot sunucuda!'));

    setInterval(() => {
        if (bot.entity) bot.setControlState('jump', true), setTimeout(() => bot.setControlState('jump', false), 500);
    }, 60000);

    bot.on('end', () => setTimeout(createBot, 5000));
    bot.on('error', (err) => console.log('Hata detayı:', err.message));
}

createBot();
