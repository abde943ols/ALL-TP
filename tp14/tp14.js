function calculer() {
    let q1 = parseFloat(document.getElementById('q1').value) || 0;
    let p1 = parseFloat(document.getElementById('p1').value) || 0;
    let r1 = q1 * p1;
    document.getElementById('r1').value = r1;

    let q2 = parseFloat(document.getElementById('q2').value) || 0;
    let p2 = parseFloat(document.getElementById('p2').value) || 0;
    let r2 = q2 * p2;
    document.getElementById('r2').value = r2;

    let total = r1 + r2;
    document.getElementById('total').textContent = total;
}

function reinitialiser() {
    document.getElementById('q1').value = '';
    document.getElementById('p1').value = '';
    document.getElementById('r1').value = '';

    document.getElementById('q2').value = '';
    document.getElementById('p2').value = '';
    document.getElementById('r2').value = '';

    document.getElementById('total').textContent = 0;
}
