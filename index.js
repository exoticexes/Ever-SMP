const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'play.everyones.run.place', // Yeni verdiğin IP adresi
        port: 24107,                     // Portun (Eğer bu da değiştiyse panelden kontrol et)
        username: 'Kivi_Nöbette',        // Botun ismi
        version: '1.21.11'               // Loglarda görünen doğru sürüm
    })

    bot.on('spawn', () => {
        console.log('Bot sunucuya girdi! Kivi su an nöbette.');
    });

    // AFK atılmayı önlemek için zıplama
    setInterval(() => {
        if (bot.entity) {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }
    }, 60000);

    bot.on('end', () => {
        console.log('Bağlantı koptu, 10 saniye sonra tekrar denenecek...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log('Hata:', err));
}

createBot();
