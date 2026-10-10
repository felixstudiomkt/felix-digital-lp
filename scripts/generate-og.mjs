import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#090A0C"/><path d="M64 530H1136" stroke="#343840"/><text x="64" y="90" font-family="Arial,sans-serif" font-weight="700" font-size="34" letter-spacing="3" fill="#F5F7FA">FELIX</text><text x="64" y="160" font-family="Arial,sans-serif" font-size="14" letter-spacing="3" fill="#B8FF4D">SITES · SYSTEMS · AI</text><text x="64" y="283" font-family="Arial,sans-serif" font-size="64" fill="#F5F7FA">Sites que vendem.</text><text x="64" y="374" font-family="Arial,sans-serif" font-size="64" fill="#B8FF4D">Sistemas que operam.</text><text x="64" y="447" font-family="Arial,sans-serif" font-size="22" fill="#ADB4C0">Infraestrutura digital para vender e operar melhor.</text><g transform="translate(915 225) scale(2.1)" fill="#4F74FF"><path d="M10 15h25l55 70H65Z"/><path d="M90 15H65L52 32h25Z"/><path d="m48 43-38 42h25l25-32Z"/></g><text x="64" y="577" font-family="Arial,sans-serif" font-size="17" fill="#ADB4C0">felixdigital.online</text><text x="809" y="577" font-family="Arial,sans-serif" font-size="17" fill="#ADB4C0">Cascavel · Paraná · Brasil</text></svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/og.png');
await writeFile('public/favicon.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="12" fill="#090A0C"/><g fill="#B8FF4D"><path d="M10 15h25l55 70H65Z"/><path d="M90 15H65L52 32h25Z"/><path d="m48 43-38 42h25l25-32Z"/></g></svg>');
console.log('Imagem social e favicon gerados.');
// ICO container with PNG payload; legacy browser requests still have a real icon.
const iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#090A0C"/><g fill="#B8FF4D"><path d="M10 15h25l55 70H65Z"/><path d="M90 15H65L52 32h25Z"/><path d="m48 43-38 42h25l25-32Z"/></g></svg>';
const icon = await sharp(Buffer.from(iconSvg)).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header[6] = 32; header[7] = 32; header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(icon.length, 14); header.writeUInt32LE(22, 18);
await writeFile('public/favicon.ico', Buffer.concat([header, icon]));
