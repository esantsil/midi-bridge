import { dlopen, FFIType } from "bun:ffi";

const KEYEVENTF_KEYUP = 0x0002;
const VK_SHIFT = 0x10;
const MAPVK_VK_TO_VSC = 0;

const { symbols: user32 } = dlopen("user32.dll", {
  keybd_event: {
    args: [FFIType.u8, FFIType.u8, FFIType.u32, FFIType.ptr],
    returns: FFIType.void,
  },
  MapVirtualKeyA: {
    args: [FFIType.u32, FFIType.u32],
    returns: FFIType.u32,
  }
});

export default class Keyboard {
  /**
   * Envia uma tecla de forma que jogos (Roblox) consigam detetar.
   * @param input Ex: "q" ou "+1" (para Shift+1)
   */
  static async send(input: string) {
    const hasShift = input.startsWith("+");
    const char = hasShift ? input.slice(1) : input;
    
    // Virtual Key Code (ex: 'A' -> 65)
    const vkCode = char.toUpperCase().charCodeAt(0);
    
    // ScanCode (Código físico que o Roblox verifica)
    const scanCode = user32.MapVirtualKeyA(vkCode, MAPVK_VK_TO_VSC);

    // --- Pressionar ---
    if (hasShift) user32.keybd_event(VK_SHIFT, 0, 0, 0);
    user32.keybd_event(vkCode, scanCode, 0, 0);
    
    // Pequeno delay para o motor do jogo registar o clique (toque humano)
    await new Promise(resolve => setTimeout(resolve, 25));

    // --- Soltar ---
    user32.keybd_event(vkCode, scanCode, KEYEVENTF_KEYUP, 0);
    if (hasShift) user32.keybd_event(VK_SHIFT, 0, KEYEVENTF_KEYUP, 0);
  }
}