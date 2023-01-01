/**
 * Define Global Variables
 * 
*/
const sectionStyle=Array.from( document.querySelectorAll("section"));
const navList  = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section").length;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//add event on click to add section in page as dysnamic 
document.querySelector("#add").addEventListener("click",addSection);
//add event on click to add section in navigator  as dysnamic 
document.querySelector("#add").addEventListener("click",createNav);
//create function to add section in page 
function addSection(){
const lengthSection = document.querySelectorAll("section").length;
 const sectionText=
`<section id="section${lengthSection+1}" data-nav="Section ${lengthSection+1}" class="your-active-class">
<div class="landing__container">
  <h2>Section ${lengthSection+1}</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

  <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>
</section>`;
document.querySelector("main").insertAdjacentHTML("beforeend",sectionText);
}

// build the nav
// Set sections as active
function createNav (){
    const sections = document.querySelectorAll("section").length;
    navList.innerHTML="";
    for (n=1 ; n<=sections;n++){
        var listId ="section" + n;
        var dataNav="Section "+ n;
         listNav = document.createElement("li");      
// Scroll to section on link click
         listNav.innerHTML=`<li><a href="#${listId}" data-nav="${dataNav}" class=menu__link >${dataNav} </a></li> `;
        navList.appendChild(listNav);
    }
}
createNav();

//Section active state styling and scrolling to the appropriate page by event
navList.addEventListener("click", function(onClick){
    onClick.preventDefault();
    let target= onClick.target.attributes.href.value; 
if (target){
   document.querySelector(target).scrollIntoView({behavior:"smooth" });
}
});

// Add class 'active' to section when near top of viewport using getBoundingClientRect()
    window.addEventListener("scroll",function(){
    document.querySelectorAll("section").forEach(function (styleActive) {
        if( styleActive.getBoundingClientRect().top>= -420 && styleActive.getBoundingClientRect().top<=220){
            styleActive.classList.add("your-active-class");
        }else{
            styleActive.classList.remove("your-active-class");
        }
    });
});

// Scroll to anchor ID using scrollTO event to Go to Top
const toTop=document.querySelector("#scroll");
 toTop.addEventListener("click",function(){
    window.scrollTo({top:0,behavior:"smooth" });
 });
 