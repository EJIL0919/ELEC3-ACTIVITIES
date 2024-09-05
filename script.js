document.addEventListener('DOMContentLoaded', () => {
    const servicesMenu = document.querySelector('.nav-item:hover .dropdown-content');
    const dropdownContent = servicesMenu.querySelector('.dropdown-content');

    servicesMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent clicks from affecting other elements
        const isVisible = dropdownContent.style.display === 'block';

        
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = 'none';
        });

        
        dropdownContent.style.display = isVisible ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    });
});
