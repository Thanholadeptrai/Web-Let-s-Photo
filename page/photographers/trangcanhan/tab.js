function showContent(tab) {
    document.querySelectorAll('.tab').forEach(function(element) {
        element.classList.remove('active');
    });
    document.querySelectorAll('.content').forEach(function(element) {
        element.classList.remove('active');
    });
    document.querySelector(`.tab[onclick="showContent('${tab}')"]`).classList.add('active');
    document.getElementById(tab).classList.add('active');
}