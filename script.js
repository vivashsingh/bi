// --- Fijian motifs --- (white versions)
const motifs = [
    // Original pattern - changed to white
    `<svg viewBox="0 0 162.5 103.9" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M2.98.86l34.82-.86,9.15,23,8.07-.2,12.13-19.99,10.15,22.47,7.57-.19,11.56-22.5,9.13,21.99,8.58-.21,10.58-21.47,36.33-.9.52,21.2-38.14,9.53,38.64,10.66.42,17.16-37.62,10.02,36.18,13.24.47,19.18-37.34.92-10.73-25.49-7.57.19-10.52,23.99-11.45-23.95-5.8.14-12.02,24.54-10.73-25.49-7.07.17-11.06,22.49-35.83.89-.47-19.18,39.08-12.58L.39,59.5l-.39-15.64,39.6-11.58L3.46,20.54,2.98.86ZM80.86,36.3l-24.66,13.74,23.13,16.6,25.37-15.27-23.85-15.06Z"/></svg>`,

    // Tall motif - changed to white
    `<svg viewBox="0 0 25.96 105.65" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" d="M.06.12C2.85-.41,1.58.94,2.22,2.23c3.84,7.8,6.12,16.48,10.79,23.79L24.52.12c2.94-.25.47,1.04.47,1.43v34.54c0,1.53-4.74,5.28-5.69,6.85-.4,2.37,8.08,6.5,5.19,12.8-.8,1.75-5.43,4.08-5.12,6.07.23,1.75,5.63,6.45,5.63,6.9v36.94l-11.52-26.86L.06,105.65v-35.98c0-.94,5.6-5.82,5.79-7.68-.01-2.12-5.55-6.14-5.82-8.67-.51-4.73,6.44-7,5.64-10.28C5.12,40.79.06,36.54.06,36.1V.12ZM11.58,56.72c4.15-.5,5.05-5.64,1.39-7.66-4.51,1.54-2.91,4.61-1.39,7.66Z"/>
    </svg>`,

    // Flower motif - changed to white
    `<svg viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37.5" cy="37.5" r="6" fill="#ffffff"/>
        <path fill="#ffffff" d="M37.5 0 L37.5 18 M37.5 75 L37.5 57 M0 37.5 L18 37.5 M75 37.5 L 57 37.5 M10 10 L25 25 M65 65 L50 50 M10 65 L25 50 M65 10 L50 25"/>
    </svg>`,

    // Circular motif - changed to white
    `<svg viewBox="0 0 75.48 74.85" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" d="M42.94,16.36C55.69.29,63.19.71,53.49,22.12c16.85-8.14,24.94-5.56,6.96,8.36-.8.62-1.76-.02-1.21,2.19,5.32-.02,16.26-.48,16.25,6.67l-16.26,4.37c18.14,10.91,12.89,19.54-5.73,9.11,9.75,21.12,1.97,22.29-10.55,5.76.62,21.96-10.08,21.44-10.57,0l-9.05,10.6-5.33.91c-.63-6.18,2-11.95,4.79-17.26-1.04-.85-11.08,6.65-16.28,4.31-2.17-.98-1.93-2.67-.44-4.24l10.96-9.66c-5.56-1.5-13.13-.18-17.01-5.27-.62-4.28,13.8-6.24,17.02-5.3-1.66-2.67-13.59-10.08-12.05-13.44,2.67-5.77,16.79,3.7,17.8,2.88-1.75-3.38-6.54-13.02-4.35-16.34,1.67-1.89,3.63-.47,5.26.58l8.67,10.01c.19-3.14,1.19-16.34,5.27-16.36,5.48,2.44,5.41,11.12,5.29,16.36ZM39.08,25c-7.74,2.11.88,15.11.89,4.2,0-1.57-.64-2.74-.89-4.2ZM35.25,34.59c.99-2.42-5.42-8.02-6.7-6.71-1.2,2.6,5.12,8.2,6.7,6.71ZM47.72,27.88c-2.83-1.57-8.14,6.35-7.67,6.7,4.08.74,7.18-2.85,7.67-6.7ZM34.3,38.42c-1.23-5.46-13.41-1.93-8.4.26,3.02,1.32,5.42.62,8.4-.26ZM37.67,35.56c-2.27.5-1.41,4.34.93,3.83s1.41-4.34-.93-3.83ZM50.6,36.52c-2.72-.81-4.66-1.48-7.44-.26-5.05,2.22,7.69,5.9,7.44.26ZM35.25,40.35c-1.56-1.5-7.91,4.1-6.7,6.71,1.56,1.5,7.91-4.1,6.7-6.71ZM47.72,47.06c-.48-3.85-3.59-7.44-7.67-6.7-.47.35,4.84,8.28,7.67,6.7ZM37.66,41.33c-1.76-.06-2.47,8.35,0,9.56,3.16-2.81,3.12-6.79,0-9.56Z"/>
    </svg>`
];

// --- Canvas setup ---
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const mouse = { x: width/2, y: height/2, radius: 150 };

// --- Particle class ---
class Particle {
    constructor(x, y, motif) {
        this.x = this.baseX = x;
        this.y = this.baseY = y;
        this.motif = motif;
        this.size = 60;
        this.density = Math.random()*20 + 5;
        this.img = new Image();
        this.img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(motif);
    }
    draw() { 
        ctx.drawImage(this.img, this.x-this.size/2, this.y-this.size/2, this.size, this.size); 
    }
    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < mouse.radius){
            let force = (mouse.radius - dist)/mouse.radius;
            let angle = Math.atan2(dy, dx);
            this.x -= force * Math.cos(angle) * this.density;
            this.y -= force * Math.sin(angle) * this.density;
        } else {
            this.x += (this.baseX - this.x)*0.1;
            this.y += (this.baseY - this.y)*0.1;
        }
        this.draw();
    }
}

// --- Create grid with more spacing for better visibility ---
const particles = [];
const spacing = 140;

// Only create particles if not on mobile
if (window.innerWidth > 768) {
    for(let row=0; row<motifs.length; row++){
        for(let y = spacing/2 + row*spacing; y<height; y+=spacing*motifs.length){
            for(let x = spacing/2; x<width; x+=spacing){
                particles.push(new Particle(x, y, motifs[row]));
            }
        }
    }
}

// --- Animate ---
function animate(){
    ctx.clearRect(0,0,width,height);
    particles.forEach(p=>p.update());
    requestAnimationFrame(animate);
}

// Only animate if not on mobile
if (window.innerWidth > 768) {
    animate();
}

// --- Mouse / Touch ---
document.addEventListener('mousemove', e=>{ 
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

document.addEventListener('touchmove', e=>{ 
    e.preventDefault(); 
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
});

// --- Resize ---
window.addEventListener('resize', ()=>{
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    
    particles.length = 0;
    
    // Only create particles if not on mobile
    if (window.innerWidth > 768) {
        for(let row=0; row<motifs.length; row++){
            for(let y = spacing/2 + row*spacing; y<height; y+=spacing*motifs.length){
                for(let x = spacing/2; x<width; x+=spacing){
                    particles.push(new Particle(x, y, motifs[row]));
                }
            }
        }
        animate();
    } else {
        // On mobile: hide canvas completely
        canvas.style.display = 'none';
    }
});

// REMOVED: All mobile background motif setup functions

// Initialize - hide canvas on mobile
if (window.innerWidth <= 768) {
    canvas.style.display = 'none';
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navList.classList.remove('active');
        }
    });
});

const mobileBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('nav ul');
mobileBtn.addEventListener('click', ()=> navList.classList.toggle('active'));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && navList.classList.contains('active')) {
        if (!e.target.closest('nav') && !e.target.closest('.mobile-menu-btn')) {
            navList.classList.remove('active');
        }
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Add your form submission logic here
        // This could be AJAX submission, validation, etc.
        console.log('Form submitted');
        // e.preventDefault(); // Uncomment if you want to handle form submission with JavaScript
    });
}