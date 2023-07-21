//change navbar on scroll

window.addEventListener('scroll', () => { 
  document.querySelector('nav').classList.toggle ('window-scroll', window.scrollY > 0)
});

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => { 
  faq.addEventListener('click', () => { 
    faq.classList.toggle('open');

    //change icon
    const icon = faq.querySelector('.faq_icon i');
    if(icon.className === 'fa fa-plus') { 
      icon.className = "fa fa-minus";
    }else { 
      icon.className = "fa fa-plus";
    }
  })
})

// show/hide nav menu
const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

// Open Menu function

menuBtn.addEventListener('click', () => { 
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})

// Close Menu function

closeBtn.addEventListener('click', () => { 
  menu.style.display = "none";
  closeBtn.style.display = "none"
  menuBtn.style.display = "inline-block";
})