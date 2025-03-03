# My App - Iniciando com React Native

# Guia para Criar um Projeto React Native no VSCode

## Passo a Passo para Criar um Projeto React Native no VSCode

### 1. Instale o Node.js

Baixe e instale o Node.js a partir do [site oficial](https://nodejs.org/). Escolha a versão LTS recomendada.

### 2. Instale o Expo CLI

Expo é uma ferramenta que facilita o desenvolvimento com React Native. Para instalar o Expo CLI, abra o terminal (ou prompt de comando) e execute o seguinte comando:

```sh
npm install -g expo-cli
```

### 3. Crie um Novo Projeto

No terminal, navegue até o diretório onde você deseja criar seu projeto e execute o seguinte comando:

```sh
expo init MyFirstApp
```

Você será solicitado a escolher um template. Selecione o template "blank".

### 4. Navegue até o Diretório do Projeto

Após a criação do projeto, entre no diretório do seu projeto:

```sh
cd MyFirstApp
```

### 5. Abra o Projeto no VSCode

Abra o VSCode e, no menu principal, selecione **File > Open Folder...**. Navegue até o diretório do seu projeto (MyFirstApp) e abra-o.

### 6. Instale o Expo App no Seu Dispositivo Móvel

Para visualizar sua aplicação, você precisa do aplicativo Expo Go no seu dispositivo móvel:

- [Expo Go para Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
- [Expo Go para iOS](https://apps.apple.com/us/app/expo-go/id982107779)

### 7. Inicie o Projeto

No terminal integrado do VSCode (você pode abrir usando **Ctrl + `**), inicie o servidor de desenvolvimento executando:

```sh
expo start
```

### 8. Visualize o Projeto no Dispositivo Móvel

Abra o aplicativo Expo Go no seu dispositivo móvel e escaneie o QR code exibido no terminal ou no navegador que foi aberto. Isso permitirá que você visualize e teste sua aplicação em tempo real.

### 9. Edite o Arquivo `App.js`

No VSCode, abra o arquivo `App.js` e substitua o código existente pelo seguinte exemplo simples:

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});
```

### 10. Salve e Veja as Alterações

Salve o arquivo (`Ctrl + S`). O aplicativo Expo Go no seu dispositivo móvel será atualizado automaticamente com as mudanças.

### Recapitulando os Comandos

1. Instale o Expo CLI:

   ```sh
   npm install -g expo-cli
   ```

2. Crie um novo projeto:

   ```sh
   expo init MyFirstApp
   ```

3. Navegue até o diretório do projeto:

   ```sh
   cd MyFirstApp
   ```

4. Inicie o servidor de desenvolvimento:

   ```sh
   expo start
   ```

Agora você tem um ambiente básico configurado para desenvolver aplicações React Native usando VSCode e Expo. Boa sorte com seu desenvolvimento!
