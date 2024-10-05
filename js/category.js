document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('category-select');
    const projects = document.querySelectorAll('.project');

    selectElement.addEventListener('change', function () {
        const selectedCategory = this.value;

        projects.forEach(project => {
            if (selectedCategory === 'all' || project.getAttribute('data-category') === selectedCategory) {
                project.style.display = 'block'; // Показать проект
            } else {
                project.style.display = 'none'; // Скрыть проект
            }
        });
    });
});