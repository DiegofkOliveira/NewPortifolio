document.addEventListener('DOMContentLoaded', function () {
    const headerImage = document.querySelector('.header-image');
    const headerText = document.querySelector('.header-text');
    const headerDev = document.querySelector('.header-dev');
    const headerFront = document.querySelector('.header-soon-front');
    const headerBack = document.querySelector('.header-soon-back');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    const lastLetterDelay = 4;
    setTimeout(() => {
        observer.observe(headerImage);
        observer.observe(headerText);
        observer.observe(headerDev);
        observer.observe(headerFront);
        observer.observe(headerBack);
    }, (lastLetterDelay + 1) * 1000);
});

function animateTitlesScrollDownExit() {
    const titles = document.querySelectorAll('.about-title'); 
    const container = document.querySelector('.container'); 

    if (!container || titles.length === 0) {
        console.error("Elementos necessários não foram encontrados.");
        return;
    }

    window.addEventListener('scroll', () => {
        const containerRect = container.getBoundingClientRect(); 
        const windowHeight = window.innerHeight; 

        titles.forEach((title, index) => {
            const containerCenter = containerRect.top + containerRect.height / 2; 
            const progress = Math.min(
                Math.max(0, (windowHeight - containerRect.top) / (containerRect.height * 0.7)),
                1
            ); 

            if (containerCenter < windowHeight / 2) {
                const exitProgress = Math.min(
                    Math.max(0, (windowHeight / 2 - containerCenter) / (containerRect.height / 2)),
                    1
                );

                const translateX = exitProgress * -100;
                const opacity = 1 - exitProgress;

                title.style.transform = `translateX(${translateX}%)`;
                title.style.opacity = opacity;
            } else {
                const translateX = (1 - progress) * -100; 
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
    const scrollTriggerPoint = window.innerHeight * 0.9;
    handleTitleAnimation(title, scrollTriggerPoint, transformValue);
}

function monitorScroll() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const isScrollingDown = window.scrollY > lastScrollY; 
        lastScrollY = window.scrollY;
        animateTitle('.ex-1', -100);
        animateTitle('.ex-2', 100);
        animateTitle('.ex-3', -100);
        animateTitle('.ex-4', 100);
        animateTitle('.ex-5', -100);
        animateTitle('.ex-6', 100);

    });
}

monitorScroll();

document.addEventListener('DOMContentLoaded', function () {
    const aboutTextStart = document.querySelector('.about-text-start');
    const aboutText = document.querySelector('.about-text');
    const aboutTextEnd = document.querySelector('.about-text-end');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(aboutTextStart);
    observer.observe(aboutText);
    observer.observe(aboutTextEnd);
});


document.addEventListener('DOMContentLoaded', function () {
    const skillsTitle = document.querySelector('.skills-title');
    const skillsSubTitle = document.querySelector('.skills-sub-title');
    const skillsLists = document.querySelectorAll('.skills-list');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.3
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(skillsTitle);
    observer.observe(skillsSubTitle);
    skillsLists.forEach(skill => observer.observe(skill));
});


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const title = entry.target.querySelector('.education-title');              
                title.style.opacity = 1;
                title.style.transform = 'translateX(0)';

                const lists = entry.target.querySelectorAll('.education-list');
                
                lists.forEach((list, index) => {
                    setTimeout(() => {
                        list.style.opacity = 1;
                        list.style.transform = 'translateY(0)';
                    }, 300 * (index + 1)); 
                });
            } else {
                const title = entry.target.querySelector('.education-title');
                
                title.style.opacity = 0;
                title.style.transform = 'translateX(-100px)'; 

                const lists = entry.target.querySelectorAll('.education-list');
                
                lists.forEach((list) => {
                    list.style.opacity = 0;
                    list.style.transform = 'translateY(100px)'; 
                });
            }
        });
    }, {
        threshold: 0.5 
    });

    const educationContainer = document.querySelector('.education-container');
    observer.observe(educationContainer);
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const title = entry.target.querySelector('.portifolio-title');
                const subText = entry.target.querySelector('.portifolio-sub-text');
                const titleText = entry.target.querySelector('.portifolio-title-text');
                const portifolio = entry.target.querySelector('.portifolio');
                const lists = entry.target.querySelectorAll('.portifolio-list');
                
                title.style.opacity = 1;
                title.style.transform = 'translateX(0)';
                
                subText.style.opacity = 1;
                subText.style.transform = 'translateX(0)';
                
                titleText.style.opacity = 1;
                titleText.style.transform = 'translateX(0)';
                
                portifolio.style.opacity = 1;
                portifolio.style.transform = 'translateX(0)';
                
                lists.forEach((list, index) => {
                    setTimeout(() => {
                        list.style.opacity = 1;
                        list.style.transform = 'translateX(0)';
                    }, 300 * (index + 1)); 
                });
            } else {
                const title = entry.target.querySelector('.portifolio-title');
                const subText = entry.target.querySelector('.portifolio-sub-text');
                const titleText = entry.target.querySelector('.portifolio-title-text');
                const portifolio = entry.target.querySelector('.portifolio');
                const lists = entry.target.querySelectorAll('.portifolio-list');
                
                title.style.opacity = 0;
                title.style.transform = 'translateX(-100px)';
                
                subText.style.opacity = 0;
                subText.style.transform = 'translateX(-100px)';
                
                titleText.style.opacity = 0;
                titleText.style.transform = 'translateX(-100px)';
                
                portifolio.style.opacity = 0;
                portifolio.style.transform = 'translateX(-100px)';
                
                lists.forEach((list) => {
                    list.style.opacity = 0;
                    list.style.transform = 'translateX(-100px)';
                });
            }
        });
    }, {
        threshold: 0.2 
    });

    const portifolioContainer = document.querySelector('.portifolio-container');
    observer.observe(portifolioContainer);
});
