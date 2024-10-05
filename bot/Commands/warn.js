// Warn Command
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith('!warn')) return;
  
    const args = message.content.slice(5).trim().split(' '); // Get the user and reason
    const member = message.mentions.members.first();
    const reason = args.slice(1).join(' ') || 'No reason provided';
  
    if (!member) {
      return message.reply('Please mention a member to warn!');
    }
  
    if (!message.member.permissions.has('KICK_MEMBERS')) {
      return message.reply('You do not have permission to warn members.');
    }
  
    // Log the warning in the console or a channel
    console.log(`${member.user.tag} was warned for: ${reason}`);
    message.reply(`${member.user.tag} has been warned. Reason: ${reason}`);
  });
  