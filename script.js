document.addEventListener("DOMContentLoaded", () => {
    const btnEntrar = document.getElementById("btnEntrar");
    const telaEntrada = document.getElementById("telaEntrada");
    const conteudoPrincipal = document.getElementById("conteudoPrincipal");
    const musicaFundo = document.getElementById("musicaFundo");
    const videoFundo = document.getElementById("videoFundo");

    // Transição de tela e liberação do som
    btnEntrar.addEventListener("click", () => {
        if (musicaFundo) {
            musicaFundo.volume = 0.02;
            musicaFundo.play().catch(err => console.log("Áudio aguardando ação:", err));
        }

        if (videoFundo) {
            videoFundo.play().catch(err => console.log("Vídeo aguardando ação:", err));
        }

        telaEntrada.classList.add("escondido");
        
        setTimeout(() => {
            conteudoPrincipal.classList.remove("escondido");
        }, 300);
    });

    // Data ajustada: 16 de Janeiro de 2027 (Mês 0 no JavaScript)
    const dataFesta = new Date(2027, 0, 16, 19, 0, 0).getTime();

    const atualizarContagem = () => {
        const agora = new Date().getTime();
        const diferenca = dataFesta - agora;

        if (diferenca > 0) {
            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            document.getElementById("dias").innerText = String(dias).padStart(2, '0');
            document.getElementById("horas").innerText = String(horas).padStart(2, '0');
            document.getElementById("minutos").innerText = String(minutos).padStart(2, '0');
            document.getElementById("segundos").innerText = String(segundos).padStart(2, '0');
        }
    };

    setInterval(atualizarContagem, 1000);
    atualizarContagem();
});