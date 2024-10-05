const messageCounts = {};

client.on('messageCreate', message => {
    if (message.author.bot) return;

    const userId = message.author.id;
    if (!messageCounts[userId]) {
        messageCounts[userId] = 1;
    } else {
        messageCounts[userId]++;
    }

    if (messageCounts[userId] > 5) {
        message.channel.send(`Warning: ${message.author.tag}, stop spamming!`);
        // Optional: timeout or kick the user
    }

    // Reset count after a while
    setTimeout(() => {
        messageCounts[userId] = 0;
    }, 10000); // Reset after 10 seconds
});
