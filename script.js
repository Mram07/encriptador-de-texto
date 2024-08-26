// Función de encriptación básica (Cifrado César)
function encryptText() {
  const inputText = document.getElementById('inputText').value;
  const shift = 3; // Número de posiciones para el cifrado
  const encrypted = shiftText(inputText, shift);
  document.getElementById('outputText').value = encrypted;
}

// Función de desencriptación básica (Cifrado César)
function decryptText() {
  const inputText = document.getElementById('inputText').value;
  const shift = -3; // Número de posiciones para el descifrado
  const decrypted = shiftText(inputText, shift);
  document.getElementById('outputText').value = decrypted;
}

// Función para mover caracteres según un desplazamiento
function shiftText(text, shift) {
  return text.split('').map(char => {
      const code = char.charCodeAt(0);
      let shiftedCode;

      // Encriptar solo letras
      if (char >= 'a' && char <= 'z') {
          shiftedCode = ((code - 97 + shift) % 26 + 26) % 26 + 97;
      } else if (char >= 'A' && char <= 'Z') {
          shiftedCode = ((code - 65 + shift) % 26 + 26) % 26 + 65;
      } else {
          shiftedCode = code; // No cambiar otros caracteres
      }

      return String.fromCharCode(shiftedCode);
  }).join('');
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copyText() {
  const outputText = document.getElementById('outputText');
  outputText.select();
  document.execCommand('copy');
  alert('El Texto fue copiado!');
}
