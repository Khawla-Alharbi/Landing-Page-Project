/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
    const myfragment = document.createDocumentFragment()
    const sections = document.getElementsByTagName('section');
    //This loop to iterate over all elements that have section tag in the html file
    for (const sec of sections){

        //Here create an li element
        const liNode= document.createElement("li");

        //store section id and data-nav to use it later in line 57
        let secNumber= sec.getAttribute('data-nav');
        const secId= sec.getAttribute("id");
        
        //Here create an anchor element and add EventListener to it
        const linkNode = document.createElement("a");
        linkNode.setAttribute('href','#'+secId);
        linkNode.innerText= secNumber;
        linkNode.setAttribute('class','menu__link');
        linkNode.addEventListener('click',function(){
            const activeNow= document.querySelector('.your-active-class');
            event.preventDefault();
            myscroll(secId)});

        liNode.appendChild(linkNode);
        myfragment.appendChild(liNode);
    }

    document.getElementById("navbar__list").appendChild(myfragment);
}


// Add class 'active' to section when near top of viewport
function activeClass(){

    const sections = document.getElementsByTagName('section');	
    const activeNow= document.querySelector('.your-active-class');

    //for loop to check which section is in the viewport now
    for(let i=0; i<sections.length; i++){
         const sec= sections[i];
         const secRect = sec.getBoundingClientRect();
        
        if((secRect.top<(window.innerHeight/2)) && (secRect.top>0)){ 
            activeNow.classList.remove('your-active-class');
            sec.classList.add('your-active-class');
            //if this section in the viewport break the loop to reduce the loop time and increase performance 
            break;
        }

    }
    

}

// Scroll to anchor ID using scrollTO event
function myscroll(secId){
    //get section position to scroll into it
    const secpos = document.getElementById(secId).offsetTop;
    
    window.scrollTo({
        behavior:'smooth',
        top:secpos,
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

window.addEventListener('load',buildNav);

// Scroll to section on link click
/* I called scroll in buildNav function */

// Set sections as active
window.addEventListener('scroll', activeClass);

