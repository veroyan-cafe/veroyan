let categoriesContainer =
document.getElementById("categories-container");

let drinksContainer =
document.getElementById("drinks-container");

let searchButton =
document.getElementById("search-button");

let searchInput =
document.getElementById("search-input");

let headerName =
document.querySelector(".header-name");

let headerLogo =
document.querySelector(".header-logo");

let openedCategory = "";

let firstScroll = true;

let searchOpened = false;

let categories = [

{
    name: "قهوه گرم",
    icon: "images/hot-coffees.png",
},

{
    name: "قهوه سرد",
    icon: "images/cold-coffees.png",
},

{
    name: "نوشیدنی گرم",
    icon: "images/hot-drinks.png",
},

{
    name: "نوشیدنی سرد",
    icon: "images/cold-drinks.png",
},

{
    name: "دسر",
    icon: "images/desserts.png",
}

];

function createCategoryButton(category, index){

    return `

    <button class="category-button" data-index="${index}">

        <img src="${category.icon}" class="category-icon" alt="${category.name}">

        <p>${category.name}</p>

    </button>

    `;

}


for (let i = 0; i < categories.length; i++) {

   categoriesContainer.innerHTML += createCategoryButton(categories[i], i);

}

let categoryButtons =
document.querySelectorAll(".category-button");

for (let i = 0; i < categoryButtons.length; i++) {

    categoryButtons[i].onclick = function () {
      
      if (openedCategory === categories[i].name) {

    drinksContainer.innerHTML = "";

    openedCategory = "";

    categoryButtons[i].classList.remove("active-category");

    return;

}
      
       for (let k = 0; k < categoryButtons.length; k++) {

    categoryButtons[k].classList.remove("active-category");

}
       categoryButtons[i].classList.add("active-category");
        
       drinksContainer.innerHTML = "";

for (let j = 0; j < drinks.length; j++) {

 if (drinks[j].category === categories[i].name) {

    drinksContainer.innerHTML += createDrinkCard(drinks[j]);

}

} 

if (firstScroll === true) {

    window.scrollBy({
        top: 250,
        behavior: "smooth"
    });

    firstScroll = false;

}

openedCategory = categories[i].name;

    };

}

let drinks = [

/* ---------- HOT COFFEES ---------- */

{
    category: "قهوه گرم",
    name: "آمریکانو",
    price: "۲۷۰",
    recipe: "آب + اسپرسو",
    image: "images/americano.webp"
},

{
    category: "قهوه گرم",
    name: "لاته",
    price: "۱۱۰",
    recipe: "شیر + اسپرسو",
    image: "images/latte.jpg"
},

{
    category: "قهوه گرم",
    name: "کاپوچینو",
    price: "۱۱۰",
    recipe: "شیر + اسپرسو + فوم",
    image: "images/cappucchino.webp"
},

{
    category: "قهوه گرم",
    name: "کارامل ماکیاتو",
    price: "۱۲۵",
    recipe: "وانیل + اسپرسو + شیر + سس کارمل",
    image: "images/caramel-macchiato.webp"
},

{
    category: "قهوه گرم",
    name: "موکا",
    price: "۱۲۵",
    recipe: "شکلات + اسپرسو + شیر",
    image: "images/mocha.jpg"
},

{
    category: "قهوه گرم",
    name: "فلت وایت",
    price: "۱۲۰",
    recipe: "اسپرسو + شیر",
    image: "images/flat-white.jpg"
},

{
    category: "قهوه گرم",
    name: "قهوه دمی",
    price: "۹۵",
    recipe: "تهیه شده با وی ۶۰",
    image: "images/browed-coffee.jpg"
},

/* ---------- COLD COFFEES ---------- */

{
    category: "قهوه سرد",
    name: "آیس آمریکانو",
    price: "۱۱۰",
    recipe: "اسپرسو + آب + یخ",
    image: "images/iced-americano.webp"
},

{
    category: "قهوه سرد",
    name: "آیس لاته",
    price: "۱۱۰",
    recipe: "اسپرسو + شیر + یخ",
    image: "images/iced-latte.webp"
},

{
    category: "قهوه سرد",
    name: "آیس کارامل ماکیاتو",
    price: "۱۴۵",
    recipe: "وانیل + اسپرسو + شیر + سس کارامل + یخ",
    image: "images/iced-caramel-macchiato.jpg"
},

{
    category: "قهوه سرد",
    name: "آیس موکا",
    price: "۱۴۵",
    recipe: "شکلات + اسپرسو + شیر + یخ",
    image: "images/iced-mocha-latte.jpg"
},

/* ---------- HOT DRINKS ---------- */

{
    category: "نوشیدنی گرم",
    name: "چای سیاه",
    price: "۷۰",
    recipe: "چای مرغوب و عطر دار",
    image: "images/black-tea.webp"
},

{
    category: "نوشیدنی گرم",
    name: "دمنوش لیمو نعناع",
    price: "۷۵",
    recipe: "نعناع + لیمو تازه + دارچین + آب داغ",
    image: "images/lemon-mint-tea.jpg"
},

{
    category: "نوشیدنی گرم",
    name: "هات چاکلت",
    price: "۱۰۰",
    recipe: "شکلات + شیر",
    image: "images/hot-chocolate.webp"
},

{
    category: "نوشیدنی گرم",
    name: "ماچا لاته",
    price: "۱۲۰",
    recipe: "پودر ماچا + شیر",
    image: "images/matcha-latte.webp"
},

/* ---------- COLD DRINKS ---------- */

{
    category: "نوشیدنی سرد",
    name: "موهیتو کلاسیک",
    price: "۱۱۵",
    recipe: "لیمو تازه + شکر + آب گاز دار",
    image: "images/mojito-classic.webp"
},

{
    category: "نوشیدنی سرد",
    name: "لیموناد نعناع",
    price: "۱۰۵",
    recipe: "لیمو تازه + نعناع + شکر + آب گاز دار",
    image: "images/mint-Lemonade.jpg"
},

{
    category: "نوشیدنی سرد",
    name: "بری موهیتو",
    price: "۱۲۰",
    recipe: "نمیدونم فعلا",
    image: "images/berry-lemonade-mojito.jpg"
},

{
    category: "نوشیدنی سرد",
    name: "شکلات میلک شیک",
    price: "۱۲۵",
    recipe: "پودر شکلات + بستنی + یخ + خامه + سس شکلات",
    image: "images/chocolate-milkshake.jpg"
},

{
    category: "نوشیدنی سرد",
    name: "وانیل میلک شیک",
    price: "۱۲۵",
    recipe: "پودر وانیل + بستنی + یخ + خامه + سس وانیل",
    image: "images/vanilla-milkshake.jpg"
},

/* ---------- DESSERTS ---------- */

{
    category: "دسر",
    name: "براونی شکلاتی",
    price: "۹۵",
    recipe: "...",
    image: "images/Chocolate-Brownie.jpg"
},

{
    category: "دسر",
    name: "چیزکیک (توت فرنگی)",
    price: "۱۳۵",
    recipe: "...",
    image: "images/strawberry-cheeseacke.webp"
},

{
    category: "دسر",
    name: "کیک شکلاتی",
    price: "۱۰۵",
    recipe: "...",
    image: "images/chocolate-cheesecake.webp"
},

{
    category: "دسر",
    name: "کوکی شکلاتی چیپسی",
    price: "۶۵",
    recipe: "...",
    image: "images/chocolate-cookie.jpg"
},

{
    category: "دسر",
    name: "کروسان شکلاتی",
    price: "۸۰",
    recipe: "...",
    image: "images/chocolate-croissants.jpg"
},

{
    category: "دسر",
    name: "تیرامیسو",
    price: "۱۳۵",
    recipe: "...",
    image: "images/tiramisu.webp"
}

];

function createDrinkCard(drink){

    return `
    <div class="drink-card">

        <img src="${drink.image}" class="drink-image" alt="${drink.name} - کافه ورویان"
        loading="lazy"
    decoding="async"    
        >

        <div class="drink-info">

            <h3>${drink.name}</h3>

            <p>${drink.recipe}</p>

        <h3>${drink.price} تومان</h3>
        
      </div>

    </div>
    `;

}

let featureds = [
  
  {
    name:"آیس لاته",
    descripe:"کلاسیک و محبوب",
    price:"۲۱۳",
    image:"images/iced-latte-featured.jpg"
  },
  {
    name:"موکا کارامل",
    descripe:"شیرین و انرژی بخش",
    price:"۲۷۰",
    image:"images/caramel-mocha-featured.webp"
  },
  {
    name:"چای ماچا لاته",
    descripe:"لطیف و خاص",
    price:"۱۹۵",
    image:"images/chai-matcha-latte-featured.webp"
  }
  
  ];
  
let recommended =
document.getElementById("recommended-cards");

featureds.forEach(drink => {

    recommended.innerHTML += `
    
    <div class="featured-box" tabindex="-1">

        <img src="${drink.image}">

        <h3>${drink.name}</h3>

        <h3>${drink.price} تومان</h3>

    </div>

    `;

});

searchInput.oninput = function () {

    let searchValue = searchInput.value.trim();

    drinksContainer.innerHTML = "";

    if (searchValue === "") {
        return;
    }

    let found = false;

    for (let i = 0; i < drinks.length; i++) {

        if (drinks[i].name.includes(searchValue)) {

            drinksContainer.innerHTML += createDrinkCard(drinks[i]);

            found = true;
        }
    }

    if (found === false) {

        drinksContainer.innerHTML = `
            <p class="no-result">
                محصولی پیدا نشد.
            </p>
        `;

    } else {

        drinksContainer.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

};



searchButton.onclick = function () {

    if (searchOpened === false) {

        headerName.style.display = "none";
        headerLogo.style.display = "none";
        searchInput.style.display = "block";

      searchInput.focus();

        searchOpened = true;

    } else {

        headerName.style.display = "block";
        headerLogo.style.display = "block";
        searchInput.style.display = "none";

        searchOpened = false;

    }

};