function openFrame(url) {
    const modal = document.getElementById('iframe-modal');
    const frame = document.getElementById('iframe-modal-frame');
    frame.src = url;
    modal.classList.add('show');
}

document.getElementById('iframe-modal-close').onclick = function() {
    document.getElementById('iframe-modal').classList.remove('show');
    document.getElementById('iframe-modal-frame').src = "";
};

document.getElementById('iframe-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('show');
        document.getElementById('iframe-modal-frame').src = "";
    }
});