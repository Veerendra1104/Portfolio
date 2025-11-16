// Simple contact form handler and mobile menu toggle

function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');

  if(!name || !email || !message){
    formMsg.textContent = 'Please fill all fields.';
    return;
  }

  const subject = encodeURIComponent('Contact from portfolio: ' + name);
  const body = encodeURIComponent(message + "\n\n---\n" + name + " ("+email+")");
  window.location.href = `mailto:msveerendraveerendra9954@gmail.com?subject=${subject}&body=${body}`;
  formMsg.textContent = 'Opening your email client...';
}

/* Mobile menu toggle */
const menuToggle = document.getElementById('menuToggle');
const navWrap = document.querySelector('.nav-wrap');

if(menuToggle){
  menuToggle.addEventListener('click', () => {
    // toggle simple class on parent of header so CSS can show mobile menu
    document.body.classList.toggle('nav-open');
  });
}
