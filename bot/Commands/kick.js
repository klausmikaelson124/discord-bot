// Kick Command
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore bot messages
    if (!message.content.startsWith('!kick')) return; // Ignore messages that don't start with !kick
  
    const args = message.content.slice(5).trim().split(' '); // Get the user mention after !kick
    const member = message.mentions.members.first();
  
    // If no member mentioned
    if (!member) {
      return message.reply('Please mention a member to kick!');
    }
  
    // Check if the author has permission to kick
    if (!message.member.permissions.has('KICK_MEMBERS')) {
      return message.reply('You do not have permission to kick members.');
    }
  
    // Check if the bot has permission to kick
    if (!message.guild.me.permissions.has('KICK_MEMBERS')) {
      return message.reply('I do not have permission to kick members.');
    }
  
    // Try to kick the member
    try {
      await member.kick();
      message.reply(`${member.user.tag} has been kicked.`);
    } catch (err) {
      message.reply('Failed to kick the member.');
    }
  });
  