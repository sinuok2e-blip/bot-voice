const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const TOKEN = "MTQ3NTU3ODgyNzczNTQzNzQzMw.GDaU09.j9viEAkjauhPKFOpK-pOJUN4Hd5AI1VjRG0xf4";
const GUILD_ID = "1222333420810670080";
const CHANNEL_ID = "1423656611162886317";

client.once('ready', async () => {
    console.log(`Bot online sebagai ${client.user.tag}`);

    try {
        const guild = await client.guilds.fetch(GUILD_ID);
        console.log("Guild ketemu:", guild.name);

        const channel = await guild.channels.fetch(CHANNEL_ID);
        console.log("Channel ketemu:", channel.name);

        joinVoiceChannel({
            channelId: channel.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator,
        });

        console.log("Berhasil masuk voice");

    } catch (error) {
        console.error("ERROR NIH:", error.message);
    }
});

client.login(TOKEN);