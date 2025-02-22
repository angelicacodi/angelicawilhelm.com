/**
 * This function toggles the top left start menu 
 */
function toggleMenu() {
    const menu = document.getElementById('start-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}


// variable to help with no-close-modal popup
let noCloseModalOpen = false;
/**
 * Toggles the "X" "you can't close this" modal popup
 */
function noCloseModalToggle() {
    const noCloseModal = document.getElementById('no-close-modal')
    if (noCloseModalOpen) {
        noCloseModal.style.display = "none";
    } else {
        noCloseModal.style.display = "flex";
    }
    noCloseModalOpen = !noCloseModalOpen;
}

/**
 * Navigates to internal pages
 * @param {string} page the page to navigate to (e.g., "/about-me.html", "/projects.html")
 */
function gotoPage(page) {
    const baseUrl = window.location.origin;
    window.location.href = baseUrl + page;
}