/* scripts.js - very small helpers for mock site */

function handleSignup(e){
  e.preventDefault();
  // capture values and show simple confirmation - replace with real signup flow later
  const fm = e.target;
  const name = fm.name.value;
  const email = fm.email.value;
  alert('Thanks ' + name + '. We sent signup info to ' + email + '. (Mock)');
  // here you would POST to your API or auth provider
}

/* contact form handler example (Formspree works with a simple POST to their endpoint)
   Replace action in contact form with your Formspree form URL or use Netlify forms.
*/

/* Google Sign-In: example for client-side usage with Google Identity Services.
   Replace CLIENT_ID in login.html with your actual Client ID, and configure
   redirect_uri and server-side token verification when you turn this into real auth.
*/
window.onload = function(){
  // placeholder for any onload behavior
};

/* Basic fallback: if you want to drop a photo as 'photo.png' file, it will show automatically */
const photoSlot = document.getElementById('photo-slot');
if(photoSlot){
  const img = document.createElement('img');
  img.src = 'photo.png';
  img.alt = 'You';
  img.style.width='80px';
  img.style.height='80px';
  img.style.objectFit='cover';
  img.style.borderRadius='8px';
  img.onerror = ()=>{ /* keep placeholder text */ };
  img.onload = ()=>{ photoSlot.textContent=''; photoSlot.appendChild(img); }
}
