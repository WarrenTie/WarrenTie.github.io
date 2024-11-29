document.addEventListener('DOMContentLoaded', function () {
    // 获取汉堡菜单和导航链接容器
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // 添加汉堡菜单点击事件
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // 为每个锚点链接添加点击事件（保持平滑滚动功能）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // 获取目标部分
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                // 自定义滚动偏移量
                const offset = -100; // 调整滚动偏移量为 -50px
                const targetPosition = targetSection.offsetTop + offset;

                // 平滑滚动到目标位置
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            // 如果汉堡菜单处于激活状态，点击链接后关闭菜单
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // 确保页面刷新时不激活汉堡菜单（处理可能的状态残留）
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            // 如果宽度大于 768px，确保菜单状态重置
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});


