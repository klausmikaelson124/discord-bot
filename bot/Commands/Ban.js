// Ban Command
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore bot messages
    if (!message.content.startsWith('!ban')) return; // Ignore messages that don't start with !ban
  
    const member = message.mentions.members.first(); // Get the user mention
  
    if (!member) {
      return message.reply('Please mention a member to ban!');
    }
  
    if (!message.member.permissions.has('BAN_MEMBERS')) {
      return message.reply('You do not have permission to ban members.');
    }
  
    if (!message.guild.me.permissions.has('BAN_MEMBERS')) {
      return message.reply('I do not have permission to ban members.');
    }
  
    try {
      await member.ban();
      message.reply(`${member.user.tag} has been banned.`);
    } catch (err) {
      message.reply('Failed to ban the member.');
    }
  });
  