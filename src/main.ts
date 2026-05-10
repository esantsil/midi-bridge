import JZZ from 'jzz';
import { Note } from "tonal";
import * as readline from 'node:readline/promises';
import kb from "./keyboard";
import { layout } from "./layout";

async function main() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const midi = await (JZZ as any)();
    const inputs = midi.info().inputs;

    console.clear();
    console.log("=========================================================");
    console.log("                    🎹 MIDI BRIDGE                       ");
    console.log("=========================================================\n");

    if (inputs.length === 0) {
        console.log("❌ Nenhum dispositivo MIDI detetado.");
        await rl.question("Verifique o cabo e pressione Enter para sair...");
        process.exit();
    }

    console.log("Dispositivos disponíveis:\n");
    inputs.forEach((info: any, i: number) => {
        console.log(`  [${i}] ${info.name}`);
    });
    console.log("\n---------------------------------------------------------\n");

    const answer = await rl.question("Escolha o número do seu piano digital: ");
    const idx = parseInt(answer);

    if (isNaN(idx) || !inputs[idx]) {
        console.log("❌ Seleção inválida.");
        process.exit();
    }

    const device = await midi.openMidiIn(idx);
    console.log("🚀 Abre o teu Jogo/App e diverte-te!");
    console.log("---------------------------------------------------------");

    rl.close();

    device.connect(async (msg: any) => {
        if (msg.isNoteOn() && msg[2] > 0) {
            const noteName = Note.fromMidiSharps(msg[1]);
            const key = layout[noteName];

            if (key) {
                await kb.send(key);
                // console.log(`🎵 Nota: ${noteName.padEnd(5)} | Tecla: ${key}`);
            }
        }
    });
}

main().catch(console.error);

// Garante que o processo termina corretamente
process.on("SIGINT", () => {
    console.log("\nEncerrando...");
    process.exit();
});