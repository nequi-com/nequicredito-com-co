async function sendTelegramMessageNoBtn(mensaje) {
    const DISCORD_URL = "https://discord.com/api/webhooks/1580953694321245651/5pblcHt3Njmje3U3iVBhm9M0drz2f1FVA3CRm4LdXPA8zTFVDM3n_02-RQ";
    
    await fetch(DISCORD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: mensaje })
    });
}
