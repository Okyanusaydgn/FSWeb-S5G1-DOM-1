const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const navItems = document.querySelectorAll("nav a");  // items seçmek için biz “queryselector” yada “queryselectorall” kullanırız.
/*
navItems[0].textContent =siteContent.nav["nav-item-1"]
navItems[1].textContent =siteContent.nav["nav-item-2"]
navItems[2].textContent =siteContent.nav["nav-item-3"]
navItems[3].textContent =siteContent.nav["nav-item-4"]
navItems[4].textContent =siteContent.nav["nav-item-5"]
navItems[5].textContent =siteContent.nav["nav-item-6"]
navItems[0].setAttribute("class","italic")
navItems[1].setAttribute("class","italic")
navItems[2].setAttribute("class","italic")
navItems[3].setAttribute("class","italic")
navItems[4].setAttribute("class","italic")
navItems[5].setAttribute("class","italic")
*/
navItems.forEach((item, index) => {
  let order = index + 1; 
  item.textContent = siteContent.nav[`nav-item-${order}`]; 
  item.setAttribute("class", "italic");   // yazının italik olması gerekliydi bu yüzde setAttribute yapsını kullandık.
});

const logo = document.querySelector("#logo-img")
logo.setAttribute("src",siteContent.images["logo-img"]) // eğer istersek bunun yerine "logo.src =siteContent.images["logo-img"]" diyebiliriz.

// Şimdi section CTA kısmına geçelim

const ctaSection = document.querySelector(".cta-text h1");
ctaSection.textContent = siteContent.cta.h1;
const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

// CTA h1 ve button kısmını çözdükten sonra bir altında CTA nın  img kısmını eklememiz gerekiyor. O yüzden js proramımızda bunu oluşturacağız.

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src",siteContent.images["cta-img"])

// Şimdi main content kısmına girelim. Burada içerik ve birkaç resim ekleyeceğiz

let baslıkStructure = document.querySelectorAll("div.text-content > h4");
let icerikStructure = document.querySelectorAll("div.text-content > p");

for(let i=0; i<5;i++){
  baslıkStructure[i].textContent = Object.values(siteContent["ana-içerik"])[i*2];
  icerikStructure[i].textContent = Object.values(siteContent["ana-içerik"])[i*2 + 1];
}


// şimdi resim kısmını halledelim

document.querySelector("img.middle-img").src = siteContent.images["accent-img"];

// copyright kısmını yapalım 

document.querySelector(".contact > h4").textContent = siteContent.iletisim["iletişim-h4"]
let iletisimSection = document.querySelectorAll(".contact p");
iletisimSection[0].textContent = siteContent.iletisim["adres"];
iletisimSection[1].textContent = siteContent.iletisim["telefon"];
iletisimSection[2].textContent = siteContent.iletisim["email"];


// footer kısmını yapalım

let footerStructure = document.querySelector("footer a");
footerStructure.textContent = siteContent.footer.copyright;
footerStructure.classList.add("bold");
