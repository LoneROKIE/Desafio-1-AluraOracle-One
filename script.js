const encriptar = (texto) => {
    // Reemplaza cada letra con su equivalente encriptado
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    return textoEncriptado;
  }
  
  const desencriptar = (textoEncriptado) => {
    // Reemplaza cada valor encriptado con su letra original
    let texto = textoEncriptado.replace(/enter/g, 'e')
                               .replace(/imes/g, 'i')
                               .replace(/ai/g, 'a')
                               .replace(/ober/g, 'o')
                               .replace(/ufat/g, 'u');
    return texto;
  }
  
  // Escucha el evento de envío del formulario
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Previene el envío del formulario
    const textarea = document.querySelector('textarea');
    const texto = textarea.value.toLowerCase(); // Convierte todo a minúsculas
  
    if (event.submitter.innerText === 'Encriptar') {
      textarea.value = encriptar(texto);
    } else if (event.submitter.innerText === 'Desencriptar') {
      textarea.value = desencriptar(texto);
    }
  });
  
  // Agrega un evento de clic al botón de copiar texto
  document.querySelector('#copiarTexto').addEventListener('click', (event) => {
    const textarea = document.querySelector('textarea');
    textarea.select();
    document.execCommand('copy');
  });
  