
// Theme toggle (persist)
const themeToggle = () => {
  const isLight = document.body.classList.toggle('light');
  localStorage.setItem('theme-light', isLight ? '1' : '0');
  document.getElementById('themeToggle').textContent = isLight ? '🌙' : '☀️';
}
document.getElementById('themeToggle').addEventListener('click', themeToggle);

// load theme
const saved = localStorage.getItem('theme-light');
if(saved === null){
  // prefer dark by default
  document.body.classList.remove('light');
  document.getElementById('themeToggle').textContent = '🌙';
} else {
  if(saved === '1'){ document.body.classList.add('light'); document.getElementById('themeToggle').textContent = '🌙'; }
  else { document.body.classList.remove('light'); document.getElementById('themeToggle').textContent = '☀️'; }
}

// contact form - opens mail client
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msg = document.getElementById('formMsg');
  if(!name || !email || !message){ msg.textContent = 'Please complete all fields.'; return; }
  const mailto = 'mailto:gaderiyaakash964@gmail.com'
    + '?subject=' + encodeURIComponent('Portfolio contact from ' + name)
    + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
  msg.textContent = 'Opening mail app...';
  window.location.href = mailto;
});

// small hover interaction for profile photo
const photo = document.querySelector('.photo');
if(photo){
  photo.addEventListener('mouseenter', ()=> photo.style.transform='translateY(-6px) scale(1.02)');
  photo.addEventListener('mouseleave', ()=> photo.style.transform='translateY(0) scale(1)');
}
