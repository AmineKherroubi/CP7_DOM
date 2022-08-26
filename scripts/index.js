let Articles = document.getElementById("Articles")
let Total = document.getElementById("Total")



let btnSupprimer1 = document.getElementById("btnSupprimer1")
let btnAugmenter1 = document.getElementById("btnAugmenter1")
let btnDiminuer1 = document.getElementById("btnDiminuer1")
let Quantite1 = document.getElementById("Quantite1")
let Article1 = document.getElementById("Article1")
let Prix1 = document.getElementById("Prix1")
let hr1 = document.getElementById("hr1")

count1 = 1

btnSupprimer1.onclick = function () {
    if (confirm("Voulez-vous vraiment supprimer cet article du panier?")) {
        Articles.removeChild(Article1)
        Articles.removeChild(hr1)
        count1 = 0
        Total.innerHTML = (count1 * 4850 + count2 * 13900 + count3 * 899).toLocaleString('en-US') + ' DA'
    }
}

btnAugmenter1.onclick = function() {
    count1 += 1;
    Quantite1.innerHTML = count1;
    Prix1.innerHTML = (count1 * 4850).toLocaleString('en-US') + ' DA'
    Total.innerHTML = (count1 * 4850 + count2 * 13900 + count3 * 899).toLocaleString('en-US') + ' DA'
};

btnDiminuer1.onclick = function() {
    if (count1 > 0) {
        count1 -= 1;
    Quantite1.innerHTML = count1;
    Prix1.innerHTML = (count1 * 4850).toLocaleString('en-US') + ' DA'
    Total.innerHTML = (count1 * 4850 + count2 * 13900 + count3 * 899).toLocaleString('en-US') + ' DA'
       }
};



let btnSupprimer2 = document.getElementById("btnSupprimer2")
let btnAugmenter2 = document.getElementById("btnAugmenter2")
let btnDiminuer2 = document.getElementById("btnDiminuer2")
let Quantite2 = document.getElementById("Quantite2")
let Article2 = document.getElementById("Article2")
let Prix2 = document.getElementById("Prix2")
let hr2 = document.getElementById("hr2")

count2 = 1

btnSupprimer2.onclick = function () {
    if (confirm("Voulez-vous vraiment supprimer cet article du panier?")) {
        Articles.removeChild(Article2)
        Articles.removeChild(hr2)
        count2 = 0
        Total.innerHTML = (count1 * 4850 + count2 * 13900 + count3 * 899).toLocaleString('en-US') + ' DA'
    }
}

btnAugmenter2.onclick = function() {
    count2 += 1;
    Quantite2.innerHTML = count2;
    Prix2.innerHTML = (count2 * 13900).toLocaleString('en-US') + ' DA'
    Total.innerHTML = (count1 * 4850 + count2 * 13900 + count3 * 899).toLocaleString('en-US') + ' DA'
};

btnDiminuer2.onclick = function() {
    if (count2 > 0) {
        count2 -= 1;
    Quantite2.innerHTML = count2;
    Prix2.innerHTML = (count2 * 13900).toLocaleString('en-US') + ' DA'
    Total.innerHTML = (count1 * 4850 + count2 * 13900 + count3 * 899).toLocaleString('en-US') + ' DA'
       }
};



let btnSupprimer3 = document.getElementById("btnSupprimer3")
let btnAugmenter3 = document.getElementById("btnAugmenter3")
let btnDiminuer3 = document.getElementById("btnDiminuer3")
let Quantite3 = document.getElementById("Quantite3")
let Article3 = document.getElementById("Article3")
let Prix3 = document.getElementById("Prix3")

count3 = 1

btnSupprimer3.onclick = function () {
    if (confirm("Voulez-vous vraiment supprimer cet article du panier?")) {
        Articles.removeChild(Article3)
        count3 = 0
        Total.innerHTML = (count1 * 4850 + count2 * 13900 + count3 * 899).toLocaleString('en-US') + ' DA'
    }
}

btnAugmenter3.onclick = function() {
    count3 += 1;
    Quantite3.innerHTML = count3;
    Prix3.innerHTML = (count3 * 899).toLocaleString('en-US') + ' DA'
    Total.innerHTML = (count1 * 4850 + count2 * 13900 + count3 * 899).toLocaleString('en-US') + ' DA'
};

btnDiminuer3.onclick = function() {
    if (count3 > 0) {
        count3 -= 1;
    Quantite3.innerHTML = count3;
    Prix3.innerHTML = (count3 * 899).toLocaleString('en-US') + ' DA'
    Total.innerHTML = (count1 * 4850 + count2 * 13900 + count3 * 899).toLocaleString('en-US') + ' DA'
       }
};



let icon1 = document.getElementById("icon1");
icon1.onclick = function(){
    icon1.classList.toggle('active');
}

let icon2 = document.getElementById("icon2");
icon2.onclick = function(){
    icon2.classList.toggle('active');
}

let icon3 = document.getElementById("icon3");
icon3.onclick = function(){
    icon3.classList.toggle('active');
}
