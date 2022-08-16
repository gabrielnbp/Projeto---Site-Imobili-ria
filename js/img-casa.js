var banners = ["img/casa-pt1", "img/casa-pt2"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + (bannerAtual+1) + 1) % 4;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 3000);