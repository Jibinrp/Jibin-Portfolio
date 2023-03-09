// toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// scroll section

let section = document.querySelector('section');
let navLinks = document.querySelector('header na a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nava[href*=' + id + ']').classlist.add('active');
            })
        }
    })


    //  sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    

    // remove toggle
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'})

ScrollReveal().reveal('.home-img, .skills-container, .project-box, .contact form', { origin:'bottom'})

ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'})

ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'})


// typed

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})



// Contact

// (function(){
//   emailjs.init("32UcQmqJtehMoaXgf");
// })();

function sendMail() {
    var params = {

       name : document.getElementById("name").value,
       email : document.getElementById("email").value,
       message : document.getElementById("message").value
    };
  
    const serviceID = "service_94lv7cu";
    const templateID = "template_x2ek27p";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
  
  }

 
