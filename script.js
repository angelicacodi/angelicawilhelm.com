let noCloseModalOpen = false;
function toggleMenu() {
    const menu = document.getElementById('start-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
function noCloseModalToggle() {
    const noCloseModal = document.getElementById('no-close-modal')
    if (noCloseModalOpen) {
        noCloseModal.style.display = "none";
    } else {
        noCloseModal.style.display = "flex";
    }
    noCloseModalOpen = !noCloseModalOpen;
}