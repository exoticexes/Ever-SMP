const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'play.everyones.run.place', // Yeni verdiğin IP
        port: 24107,                     // Panelindeki Port
        username: 'Kivi_724',            
        version: '1.21.1'                // Hataya sebep olan sürüm burada düzeltildi
    })

    bot.on('spawn', () => console.log('BOT OYUNDA! Sunucu artık 7/24.'));

    setInterval(() => {
        if (bot.entity) bot.setControlState('jump', true), setTimeout(() => bot.setControlState('jump', false), 500);
    }, 60000);

    bot.on('end', () => setTimeout(createBot, 5000));
    bot.on('error', (err) => console.log('Hata:', err.message));
}

createBot();
