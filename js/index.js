const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Task 1: Create selectors to point your data into elements
 // Create selectors by using any of the DOM element's methods
 // Note that IDs have been used on all images, use the IDs to update src path content

let a1 = document.createElement("a");
let a2 = document.createElement("a");



let header = document.querySelector("header");
let nav = header.querySelector("nav");

let navLinks = Array.from(nav.querySelectorAll("a"));

let ctaSection = document.querySelector(".cta");
let ctaDiv = ctaSection.querySelector(".cta-text");
let ctaH1 = ctaDiv.querySelector("h1");
let ctaButton = ctaDiv.querySelector("button");
let ctaImg = ctaSection.querySelector("img");

let mainContent = document.querySelector(".main-content");
let mainTopContent = mainContent.querySelector(".top-content");
let mainTextContents = Array.from(mainTopContent.querySelectorAll(".text-content"));

let middleImg = mainContent.querySelector(".middle-img");

let bottomContent = mainContent.querySelector(".bottom-content");
let bottomTextContents = Array.from(bottomContent.querySelectorAll(".text-content"));

let contact = document.querySelector(".contact");
let contactH4 = contact.querySelector("h4");
let contactPs = Array.from(contact.querySelectorAll("p"));

let footer = document.querySelector("footer");
let footerP = footer.querySelector("p");

//Task 2: Update the HTML with the JSON data
 // Remember, NO direct updating of the HTML source is allowed.
 // Using your selectors, update the content to match the example file.
 // Remember to update the src attributes on images

navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];

ctaH1.textContent = siteContent.cta["h1"];
ctaButton.textContent = siteContent.cta["button"];
ctaImg.src = siteContent.cta["img-src"];

mainTextContents[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
mainTextContents[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];

mainTextContents[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
mainTextContents[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];

middleImg.src = siteContent["main-content"]["middle-img-src"];

bottomTextContents[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
bottomTextContents[0].querySelector("p").textContent = siteContent["main-content"]["services-content"];

bottomTextContents[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
bottomTextContents[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];

bottomTextContents[2].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
bottomTextContents[2].querySelector("p").textContent = siteContent["main-content"]["vision-content"];

contactH4.textContent = siteContent.contact["contact-h4"];

contactPs[0].textContent = siteContent.contact.address;
contactPs[1].textContent = siteContent.contact.phone;
contactPs[2].textContent = siteContent.contact.email;

footerP.textContent = siteContent.footer.copyright;

// Task 3: Add new content
 // Change the color of the navigation text to be green.
 // Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want.
 // Check your work by looking at the original html in the browser

a1.href = "#";
a1.textContent = "Whatever";

a2.href = "#";
a2.textContent = "You Want";

nav.prepend(a1);
nav.appendChild(a2);

navLinks = Array.from(nav.querySelectorAll("a")); // resetting navLinks array since I added elements to nav

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = "green";
}