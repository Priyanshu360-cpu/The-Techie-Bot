module.exports = {
    name: "shotoniphone",
    description:"Plays a song",
    category: "Slash",
    execute: async(client, interaction) =>{
        if (!interaction.isCommand()) return;
        interaction.deferReply()
      const axios = require('axios');

      const url = 'https://shot-on-iphone.studio/api/video';

      let response, data;
      try {
          response = await axios.get(url);
          data = response.data;
      } catch (e) {
          return interaction.followUp(`An error occured!`)
      }


      await interaction.followUp({content : `[Shot on iphone meme](${data.url})`})
    }
}