// Mute Command
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith('!mute')) return;
  
    const member = message.mentions.members.first();
    if (!member) {
      return message.reply('Please mention a member to mute!');
    }
  
    if (!message.member.permissions.has('MANAGE_ROLES')) {
      return message.reply('You do not have permission to mute members.');
    }
  
    const muteRole = message.guild.roles.cache.find(r => r.name === 'Muted');
    if (!muteRole) {
      return message.reply('Mute role not found.');
    }
  
    try {
      await member.roles.add(muteRole);
      message.reply(`${member.user.tag} has been muted.`);
    } catch (err) {
      message.reply('Failed to mute the member.');
    }
  });
  