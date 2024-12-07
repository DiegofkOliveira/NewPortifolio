function animateTitlesOnScrollDown() {
    const titles = document.querySelectorAll('.about-title'); // Seleciona os títulos
    const container = document.querySelector('.container'); // Seleciona o container principal

    if (!container || titles.length === 0) {
        console.error("Elementos necessários não foram encontrados.");
        return;
    }

    // Listener para rolar a página
    window.addEventListener('scroll', () => {
        const containerRect = container.getBoundingClientRect(); // Posição do container
        const windowHeight = window.innerHeight; // Altura da janela

        titles.forEach((title, index) => {
            const titleHeight = title.offsetHeight; // Altura do título
            const progress = Math.min(
                Math.max(0, (windowHeight - containerRect.top) / (containerRect.height * 0.7)),
                1
            ); // Calcula o progresso do título (0 a 1)

            // Aplica a transformação gradualmente
            const translateX = (1 - progress) * -100; // Sai de -100% até 0%
            const opacity = progress; // Gradualmente aumenta a opacidade

            title.style.transform = `translateX(${translateX}%)`;
            title.style.opacity = opacity;
        });
    });
}

// Chama a função
animateTitlesOnScrollDown();


function animateTitlesScrollDownExit() {
    const titles = document.querySelectorAll('.about-title'); // Seleciona os títulos
    const container = document.querySelector('.container'); // Seleciona o container principal

    if (!container || titles.length === 0) {
        console.error("Elementos necessários não foram encontrados.");
        return;
    }

    // Listener para o evento de rolagem
    window.addEventListener('scroll', () => {
        const containerRect = container.getBoundingClientRect(); // Posição do container no viewport
        const windowHeight = window.innerHeight; // Altura da janela

        titles.forEach((title, index) => {
            const containerCenter = containerRect.top + containerRect.height / 2; // Centro do container
            const progress = Math.min(
                Math.max(0, (windowHeight - containerRect.top) / (containerRect.height * 0.7)),
                1
            ); // Progresso inicial (0 a 1)

            // Verifica se passou do centro
            if (containerCenter < windowHeight / 2) {
                // Progresso de saída (quanto mais desce, mais sai da tela)
                const exitProgress = Math.min(
                    Math.max(0, (windowHeight / 2 - containerCenter) / (containerRect.height / 2)),
                    1
                );

                const translateX = exitProgress * -100; // Sai para a direita (ou ajuste para outra direção)
                const opacity = 1 - exitProgress; // Diminui a opacidade gradualmente

                title.style.transform = `translateX(${translateX}%)`;
                title.style.opacity = opacity;
            } else {
                // Enquanto está acima da metade, aplica a lógica de entrada
                const translateX = (1 - progress) * -100; // Sai de -100% até 0%
                const opacity = progress;

                title.style.transform = `translateX(${translateX}%)`;
                title.style.opacity = opacity;
            }
        });
    });
}

animateTitlesScrollDownExit();




function handleTitleAnimation(title, scrollTriggerPoint, transformValue) {
    const titleRect = title.getBoundingClientRect();
    const titleTop = titleRect.top;
    const titleBottom = titleRect.bottom;

    // Verifica se o título está dentro da área visível da tela
    if (titleTop < scrollTriggerPoint && titleBottom > 0) {
        title.classList.add('active');
        title.classList.remove('exit');
    } else {
        title.classList.remove('active');
        title.classList.add('exit');
    }
}

function animateTitle(titleSelector, transformValue) {
    const title = document.querySelector(titleSelector);
    const scrollTriggerPoint = window.innerHeight * 0.7; // 80% da altura da janela
    handleTitleAnimation(title, scrollTriggerPoint, transformValue);
}

function monitorScroll() {
    // Monitorando o scroll para aplicar a animação
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const isScrollingDown = window.scrollY > lastScrollY; // Verifica se estamos descendo
        lastScrollY = window.scrollY;
        
        // Animação dos títulos conforme o scroll
        animateTitle('.ex-1', -100);
        animateTitle('.ex-2', 100);
        animateTitle('.ex-3', -100);
        animateTitle('.ex-4', 100);
        animateTitle('.ex-5', -100);
        animateTitle('.ex-6', 100);
        
    });
}

// Inicia a monitoração do scroll
monitorScroll();
