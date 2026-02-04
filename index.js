const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+[]{}<>?";

function gerarSenha(tamanho, usarMaiusculas, usarMinusculas, usarNumeros, usarSimbolos) {
    let caracteresDisponiveis = "";

    if (usarMaiusculas) caracteresDisponiveis += letrasMaiusculas;
    if (usarMinusculas) caracteresDisponiveis += letrasMinusculas;
    if (usarNumeros) caracteresDisponiveis += numeros;
    if (usarSimbolos) caracteresDisponiveis += simbolos;

    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresDisponiveis.length);
        senha += caracteresDisponiveis[indiceAleatorio];
    }
    return senha;
}

function gerar() {
    const tamanho = document.getElementById("tamanho").value;
    const maiusculas = document.getElementById("maiusculas").checked;
    const minusculas = document.getElementById("minusculas").checked;
    const numeros = document.getElementById("numeros").checked;
    const simbolos = document.getElementById("simbolos").checked;

    const senha = gerarSenha(tamanho, maiusculas, minusculas, numeros, simbolos);
    document.getElementById("resultado").textContent = "Senha gerada: " + senha;
}

function copiar() {
    const senhaGerada = document.getElementById("resultado").textContent.replace("Senha gerada: ", "");
    if (senhaGerada) {
        navigator.clipboard.writeText(senhaGerada);
        alert("Senha copiada para a área de transferência!");
    } else {
        alert("Nenhuma senha gerada ainda.");
    }
}