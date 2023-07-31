const OpenMenuIcon = document.querySelector('.open-menu-icon');
const CloseMenuIcon = document.querySelector('.mobile-nav img');
const MobileNav = document.querySelector('.mobile-nav');

OpenMenuIcon.addEventListener('click', () => {
    MobileNav.classList.add('active');
});

CloseMenuIcon.addEventListener('click', () => {
    MobileNav.classList.remove('active');
});
