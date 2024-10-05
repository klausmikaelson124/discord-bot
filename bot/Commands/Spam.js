client.on('messageCreate', async (message) => {
    // Example of a simple spam filter (a real bot would need more complex logic)
    const badWords = ['fuck', 'discord', 'discord.gg'];
  
    if (badWords.some(word => message.content.toLowerCase().includes(word))) {
      await message.delete();
      message.reply('Please avoid using inappropriate language.');
    }
  });
  