const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'play.everyones.run.place', 
        port: 24107,                     
        username: 'Kivi_724',            
        version: '1.21.1'                // Tam olarak senin söylediğin sürüm
    })

    bot.on('spawn', () => {
        console.log('SONUNDA: Kivi Bot sunucuya giriş yaptı!');
    });

    // AFK koruması için zıplama
    setInterval(() => {
        if (bot.entity) {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }
    }, 60000);

    bot.on('end', () => {
        console.log('Bağlantı koptu, 5 saniye sonra tekrar denenecek...');
        setTimeout(createBot, 5000);
    });

    bot.on('error', (err) => {
        console.log('Hata:', err.message);
    });
}

createBot();
