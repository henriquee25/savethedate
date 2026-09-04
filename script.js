document.addEventListener("DOMContentLoaded", () => {
    const btnEntrar = document.getElementById("btnEntrar");
    const telaEntrada = document.getElementById("telaEntrada");
    const conteudoPrincipal = document.getElementById("conteudoPrincipal");
    const musicaFundo = document.getElementById("musicaFundo");

    // Transição de tela, som e animação das pétalas
    btnEntrar.addEventListener("click", () => {
        if (musicaFundo) {
            musicaFundo.volume = 0.05; // Ajuste o volume aqui (0.0 a 1.0)
            musicaFundo.play().catch(err => console.log("Áudio aguardando ação:", err));
        }

        // Fade out na tela inicial
        telaEntrada.classList.add("oculto");
        
        // Aguarda a tela sumir para mostrar o cartão e iniciar as pétalas
        setTimeout(() => {
            telaEntrada.style.display = "none";
            conteudoPrincipal.classList.remove("escondido");
            iniciarPetalas();
        }, 800);
    });

    // Data ajustada: 16 de Janeiro de 2027
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

    // Transição de tela, som e animação
    btnEntrar.addEventListener("click", () => {
        if (musicaFundo) {
            musicaFundo.volume = 0.05; 
            musicaFundo.play().catch(err => console.log("Áudio aguardando ação:", err));
        }

        telaEntrada.classList.add("oculto");
        
        // Agora esperamos 1.8 segundos (tempo das árvores abrirem)
        setTimeout(() => {
            telaEntrada.style.display = "none";
            conteudoPrincipal.classList.remove("escondido");
            iniciarPetalas();
        }, 1800); 
    });

    // Sistema de Pétalas de Glicínia
    function iniciarPetalas() {
        // Paleta de cores baseada em glicínias (lilás, roxo, violeta pastel)
        const coresGlicinia = ['#B49EE8', '#E6C8FF', '#9A7BDE', '#D8B4E2'];

        setInterval(() => {
            const petala = document.createElement("div");
            petala.classList.add("petala");
            
            // Sorteia uma das cores de glicínia
            petala.style.backgroundColor = coresGlicinia[Math.floor(Math.random() * coresGlicinia.length)];
            
            petala.style.left = Math.random() * 100 + "vw";
            petala.style.transform = `scale(${Math.random() * 0.6 + 0.4})`;
            petala.style.animationDuration = Math.random() * 4 + 4 + "s";
            
            conteudoPrincipal.appendChild(petala);

            setTimeout(() => {
                petala.remove();
            }, 8000);
        }, 300); 
    }
});