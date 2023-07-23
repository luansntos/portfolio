function clickMenu() {
    var itensBurg = document.getElementById("itensBurg");
    var barra = document.getElementById("barra");
    var fechar = document.getElementById("fechar");
    
    
    if (itensBurg.style.display === 'none') {
        itensBurg.style.display = 'block';
        barra.style.display = 'none';
        fechar.style.display = 'block';
    } else {
        itensBurg.style.display = 'block';
        barra.style.display = 'none';
        fechar.style.display = 'block';
    }
}

function clickFechar() {
    var itensBurg = document.getElementById("itensBurg");
    var barra = document.getElementById("barra");
    var fechar = document.getElementById("fechar");
    
    itensBurg.style.display = 'none';
    barra.style.display = 'block';
    fechar.style.display = 'none';
}