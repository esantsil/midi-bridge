# 🎹 MIDI BRIDGE

Transforme o seu teclado musical (Yamaha, Casio, Roland, etc.) num controlador de alta performance para o Roblox! Este programa converte as notas tocadas no seu piano físico em teclas de computador instantaneamente.

---

## 🚀 Como Usar (Passo a Passo)

1. **Baixe o Projeto** Clique no link para baixar a versão mais recente:  
   👉 [**Download MIDI-Bridge (.zip)**](https://github.com/esantsil/midi-bridge/archive/refs/heads/main.zip)  
   *(Extraia os ficheiros para uma pasta à sua escolha)*.

2. **Conecte o seu Piano** Ligue o cabo USB-MIDI do seu teclado ao computador. Certifique-se de que os drivers do fabricante (ex: Yamaha USB-MIDI Driver) estão instalados corretamente.

3. **Execute como Administrador** (⚠️ **OBRIGATÓRIO**)  
   Clique com o botão direito no ficheiro `start.bat` e selecione **"Executar como Administrador"**.  
   > *Nota: Sem privilégios de administrador, o Windows impede que o programa envie comandos para dentro do Roblox.*

4. **Selecione o seu Dispositivo** O programa listará os teclados detetados. Digite o **número** correspondente ao seu piano digital (ex: `0`) e prima `Enter`.

5. **Abra o Jogo** Entre no seu jogo de piano favorito (ex: *Virtual Piano*). Certifique-se de que a janela do Roblox está em foco (clicada) e comece a tocar!

---

## 🎹 Mapeamento de Teclas

O sistema utiliza o padrão universal de pianos virtuais:
- **Teclas Brancas:** Mapeadas de `1` até `m`.
- **Teclas Pretas:** Ativam automaticamente o `Shift` (ex: `+1`, `+q`).
- **Alcance:** Configurado para 5 oitavas, iniciando na nota **C2**.

---

## 🛠️ Solução de Problemas

| Problema | Solução |
| :--- | :--- |
| **Não digita no jogo** | O programa **precisa** ser executado como Administrador. |
| **Teclado não aparece na lista** | Reconecte o cabo USB e reinicie o `start.bat`. |
| **Erro "Unknown JZZ Error"** | Outra aplicação está a usar o piano (Chrome, Synthesia, Spotify). Feche-as. |
| **Notas erradas/desfocadas** | Verifique se a função *Transpose* do seu teclado físico está em `0`. |
| **Atraso (Lag)** | Feche programas pesados ou abas de música no navegador. |

---

## 🛡️ Segurança e Performance
Este software utiliza a tecnologia **Bun FFI**, comunicando diretamente com a API `user32.dll` do Windows. Isso garante a **menor latência possível** e faz com que o jogo detete os sinais como se fossem pressões de hardware real, evitando bloqueios de sistemas anti-cheat simples.

---
> **Aviso:** Desenvolvido para entusiastas de música. Use com responsabilidade.