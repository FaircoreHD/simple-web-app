var nmSis = Array();
var mtk = Array();
var agm = Array();
var bing = Array();
var alpro = Array();
var bd = Array();
var rerata = Array();
var terbesar = 0;
var index;
function inputData() {
    //mengambil inputan
    var inputSiswa = document.getElementById("nmSiswa").value;
    var nMtk = parseInt(document.getElementById("math").value);
    var nAgm = parseInt(document.getElementById("religi").value);
    var nBing = parseInt(document.getElementById("bahasa").value);
    var nAlpro = parseInt(document.getElementById("pemograman").value);
    var nBd = parseInt(document.getElementById("database").value);
    var e = 0;
    var warning = "Form nilai tidak boleh kosong";
    var empty = "Nama tidak boleh kosong";
    if (inputSiswa == "") {
        alert(empty);
        window.location.reload();
    }
    else if (isNaN(nMtk) == true || isNaN(nAgm) == true || isNaN(nBing) == true || isNaN(nAlpro) == true || isNaN(nBd) == true) {
        alert(warning);
        window.location.reload();
    }
    var besarRerata = (nMtk + nAgm + nBing + nAlpro + nBd) / 5;
    rerata.push(besarRerata);
    //menambahkan inputan ke dalam var array
    nmSis.push(inputSiswa);
    mtk.push(nMtk);
    agm.push(nAgm);
    bing.push(nBing);
    alpro.push(nAlpro);
    bd.push(nBd);
    //menampilkan hasil inputan ke dalam tabel
    var tabelHasil;
    tabelHasil = document.getElementById('table');
    var input;
    for (var i = 0; i < nmSis.length; i++) {
        index = i + 1;
        input = ('<tr><td>' + index.toString() + '</td><td>' + nmSis[i] + ' </td><td> ' + mtk[i].toString() + '</td><td> ' + agm[i].toString() + '</td><td> ' + bing[i].toString() + '</td><td> ' + alpro[i].toString() + '</td><td> ' + bd[i].toString() + '</td><td> ' + rerata[i].toString() + '</td></tr>');
    }
    tabelHasil.innerHTML += input.toString();
    //mereset form inputan
    document.getElementById('nmSiswa').value = '';
    document.getElementById('math').value = '';
    document.getElementById('religi').value = '';
    document.getElementById('bahasa').value = '';
    document.getElementById('pemograman').value = '';
    document.getElementById('database').value = '';
}
function filter() {
    matematika();
    agama();
    bahasaInggris();
    algoritmaPemograman();
    basisData();
    rangkingList();
}
function urutkanAscending(a, b) {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
}
function rangkingList() {
    var list;
    list = document.getElementById('rangking');
    var result;
    var sortedArray = rerata.sort();
    for (var i = 0; i < sortedArray.length; i++) {
        console.log(sortedArray[i] + nmSis[i]);
        index = i + 1;
        result = ('<tr><td>' + index.toString() + '</td><td>' + nmSis[i] + ' </td><td>' + rerata[i] + ' </td></tr>');
        list.innerHTML = result;
    }
}
function matematika() {
    var mtkTerbesar;
    mtkTerbesar = document.getElementById('mtk');
    var result;
    var terbesar = 0;
    var count;
    for (var i = 0; i < nmSis.length; i++) {
        if (mtk[i] > terbesar) {
            terbesar = mtk[i];
            count = i;
        }
    }
    result = (nmSis[count] + ' (' + mtk[count] + ')');
    mtkTerbesar.innerHTML = result;
}
function agama() {
    var agmTerbesar;
    agmTerbesar = document.getElementById('agama');
    var result;
    var terbesar = 0;
    var count;
    for (var i = 0; i < nmSis.length; i++) {
        if (agm[i] > terbesar) {
            terbesar = agm[i];
            count = i;
        }
    }
    result = (nmSis[count] + ' (' + agm[count] + ')');
    agmTerbesar.innerHTML = result;
}
function bahasaInggris() {
    var bingTerbesar;
    bingTerbesar = document.getElementById('bing');
    var result;
    var terbesar = 0;
    var count;
    for (var i = 0; i < nmSis.length; i++) {
        if (bing[i] > terbesar) {
            terbesar = bing[i];
            count = i;
        }
    }
    result = (nmSis[count] + ' (' + bing[count] + ')');
    bingTerbesar.innerHTML = result;
}
function algoritmaPemograman() {
    var alproTerbesar;
    alproTerbesar = document.getElementById('alpro');
    var result;
    var terbesar = 0;
    var count;
    for (var i = 0; i < nmSis.length; i++) {
        if (alpro[i] > terbesar) {
            terbesar = alpro[i];
            count = i;
        }
    }
    result = (nmSis[count] + ' (' + alpro[count] + ')');
    alproTerbesar.innerHTML = result;
}
function basisData() {
    var bdTerbesar;
    bdTerbesar = document.getElementById('bdata');
    var result;
    var terbesar = 0;
    var count;
    for (var i = 0; i < nmSis.length; i++) {
        if (bd[i] > terbesar) {
            terbesar = bd[i];
            count = i;
        }
    }
    result = (nmSis[count] + ' (' + bd[count] + ')');
    bdTerbesar.innerHTML = result;
}
