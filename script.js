function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');
    

    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
    }

   
    header.classList.toggle('opaque', navMenu.style.display === 'flex');
}


window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    header.classList.toggle('opaque', window.scrollY > 50); // Make header opaque after scrolling 50px
});
window.addEventListener('scroll', function () {
    const albumItems = document.querySelectorAll('.album-item-rifki');
    const triggerPoint = window.innerHeight / 1.3;

    albumItems.forEach(function (item) {
        const itemPosition = item.getBoundingClientRect().top;

        if (itemPosition < triggerPoint) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const albumCards = document.querySelectorAll(".album1-card-rifki, .album2-card-rifki, .album3-card-rifki");

    function handleScroll() {
        albumCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 50) {
                card.classList.add("show");
            } else {
                card.classList.remove("show"); // Remove show class when scrolling up
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load
});
document.addEventListener("DOMContentLoaded", function() {
    const memberCards = document.querySelectorAll(".member-card-rifki");

    function handleScroll() {
        memberCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 50) {
                card.classList.add("visible");
            } else {
                card.classList.remove("visible"); // Remove visible class when scrolling up
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function() {
    const contactSection = document.querySelector(".contact-section-rifki");

    function handleScroll() {
        const sectionTop = contactSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

       
        if (sectionTop < windowHeight - 50) {
            contactSection.classList.add("show");
        } else {
          
            contactSection.classList.remove("show");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
});

window.addEventListener('scroll', () => {
    const bioCard = document.querySelector('.bio-card-rifki');
    const bioPosition = bioCard.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (bioPosition < screenPosition) {
        bioCard.classList.add('show');
    }
});