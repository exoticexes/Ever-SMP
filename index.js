const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'play.everyones.run.place', // Senin görselindeki IP
        port: 24107,                  // Senin görselindeki Port
        username: 'Kivi_Nöbette',      // Botun oyundaki adı
        version: '1.21.1'             // Sunucu sürümün (Değilse değiştir)
    })

    bot.on('spawn', () => {
        console.log('Bot başarıyla bağlandı! Sunucu aktif tutuluyor.');
    });

    // AFK atılmamak için 1 dakikada bir zıplama
    setInterval(() => {
        if (bot.entity) {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }
    }, 60000);

    bot.on('end', () => {
        console.log('Bağlantı koptu, 10 saniye sonra tekrar bağlanacak...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => console.log('Hata oluştu:', err));
}

createBot();
