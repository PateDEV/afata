document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle the sidebar
    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.toggle('open');
        } else {
            console.error("Sidebar element not found.");
        }
    }

    // Attach the event listener to the menu button
    const menuButton = document.querySelector('.menu-btn');
    if (menuButton) {
        menuButton.addEventListener('click', toggleSidebar);
    } else {
        console.error("Menu button element not found.");
    }

    // Function to switch pages
    function changePage(page) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(p => {
            p.classList.remove('active');
            p.style.display = 'none';
        });

        const activePage = document.getElementById(page);
        if (activePage) {
            activePage.style.display = 'block';
            activePage.classList.add('active');
        } else {
            console.error(`Page with ID '${page}' not found.`);
        }
    }

    // Expose `changePage` globally so it works with inline `onclick` in HTML
    window.changePage = changePage;

    // Load the default page on window load
    changePage('etusivu');
});

function showCategory(categoryId) {
    const categories = document.querySelectorAll('.product-category');
    categories.forEach(category => {
        category.style.display = 'none'; // Hide all categories
    });

    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'flex'; // Show the selected category
    }
}

function showSubCategory(subCategoryId) {
    const subCategories = document.querySelectorAll('.product-category');
    subCategories.forEach(subCategory => {
        subCategory.style.display = 'none'; 
    });

    const selectedSubCategory = document.getElementById(subCategoryId);
    if (selectedSubCategory) {
        selectedSubCategory.style.display = 'flex'; 
    }
}