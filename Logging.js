const logChannelId = '1292136379299397814';

client.on('messageDelete', message => {
    const logChannel = client.channels.cache.get(logChannelId);
    if (logChannel) {
        logChannel.send(`A message by ${message.author.tag} was deleted: "${message.content}"`);
    }
});
