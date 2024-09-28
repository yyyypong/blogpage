document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.blog-title');
    const floatingText = document.querySelector('.floating-text');

    function animateTitles() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        titles.forEach((title) => {
            // 使用整个窗口的宽度和高度来随机定位标题
            const startX = Math.random() * windowWidth;
            const startY = Math.random() * windowHeight;
            const fontSize = Math.random() * (1.5 - 0.8) + 0.8; // 稍微缩小字体范围
            
            title.style.left = `${startX}px`;
            title.style.top = `${startY}px`;
            title.style.fontSize = `${fontSize}em`;

            const duration = Math.random() * (30 - 15) + 15; // 15到30秒之间
            const delay = Math.random() * 5; // 0到5秒的随机延迟

            // 随机生成移动距离，使移动更加自然
            const moveX = (Math.random() - 0.5) * 100; // -50px 到 50px
            const moveY = (Math.random() - 0.5) * 100; // -50px 到 50px
            const rotate = (Math.random() - 0.5) * 10; // -5deg 到 5deg

            title.animate([
                { transform: `translate(0, 0) rotate(0deg)`, opacity: 0 },
                { opacity: 1, offset: 0.1 },
                { transform: `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`, opacity: 1, offset: 0.5 },
                { opacity: 1, offset: 0.9 },
                { transform: 'translate(0, 0) rotate(0deg)', opacity: 0 }
            ], {
                duration: duration * 1000,
                delay: delay * 1000,
                iterations: Infinity,
                easing: 'ease-in-out',
                direction: 'alternate'
            });

            title.addEventListener('mouseenter', () => {
                title.style.transform = 'scale(1.1)';
                title.style.zIndex = '10';
            });

            title.addEventListener('mouseleave', () => {
                title.style.transform = 'scale(1)';
                title.style.zIndex = '1';
            });
        });
    }

    animateTitles();

    window.addEventListener('resize', () => {
        titles.forEach(title => {
            title.getAnimations().forEach(anim => anim.cancel());
        });
        setTimeout(animateTitles, 100);
    });
});
