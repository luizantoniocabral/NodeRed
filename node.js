module.exports = function(RED) {
  function AudioPlayerNode(config) {
    RED.nodes.createNode(this, config);
    this.audioUrl = config.audioUrl;
    this.playButton = document.getElementById('play-button');

    this.playButton.addEventListener('click', () => {
      // Lógica do seu nó aqui
    });
  }
  RED.nodes.registerType('audio-player', AudioPlayerNode);
};