# Node-RED Contrib: Audio Player

Um nó de reprodução de áudio para Node-RED.

## Descrição

Este nó permite que você reproduza áudio em seu fluxo de trabalho do Node-RED. Você pode configurar o nó para reproduzir áudio de uma URL ou de um arquivo local.

## Instalação

Para instalar este nó, execute o seguinte comando no seu terminal:
## Uso

Para usar este nó, você precisará adicionar um novo nó ao seu fluxo de trabalho do Node-RED. Para fazer isso, siga os passos abaixo:

1. Abra o Node-RED e clique no botão "Add" no canto superior direito da tela.
2. Selecione "Audio Player" como o tipo de nó.
3. Configure as propriedades do nó, incluindo a URL ou o arquivo de áudio que você deseja reproduzir.
4. Clique no botão "Save" para salvar o nó.

## Configuração

O nó de reprodução de áudio tem as seguintes propriedades configuráveis:

* `audioUrl`: a URL do arquivo de áudio que você deseja reproduzir.
* `audioFile`: o arquivo de áudio local que você deseja reproduzir.
* `volume`: o volume da reprodução de áudio (0-100).

## Exemplos

Aqui está um exemplo de como usar o nó de reprodução de áudio em um fluxo de trabalho do Node-RED:
```json
[
  {
    "id": "audio-player",
    "type": "audio-player",
    "audioUrl": "https://example.com/audio.mp3",
    "volume": 50
  }
]