const elements = document.querySelectorAll('.fade-in-scroll');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .8
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('fade-selected');
    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});

const showDialog1 = () => {
  document.getElementById('dialog1').classList.add('show')
  document.getElementById('dialog2').classList.remove('show');
  document.getElementById('dialog3').classList.remove('show');
  document.getElementById('dialog4').classList.remove('show');
  document.getElementById('dialog5').classList.remove('show');
  document.getElementById('dialog6').classList.remove('show');
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
  window.scrollTo(0, 0);
};

const showDialog2 = () => {
  document.getElementById('dialog2').classList.add('show')
  document.getElementById('dialog1').classList.remove('show');
  document.getElementById('dialog3').classList.remove('show');
  document.getElementById('dialog4').classList.remove('show');
  document.getElementById('dialog5').classList.remove('show');
  document.getElementById('dialog6').classList.remove('show');
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
  window.scrollTo(0, 0);
};

const showDialog3 = () => {
  document.getElementById('dialog3').classList.add('show')
  document.getElementById('dialog2').classList.remove('show');
  document.getElementById('dialog1').classList.remove('show');
  document.getElementById('dialog4').classList.remove('show');
  document.getElementById('dialog5').classList.remove('show');
  document.getElementById('dialog6').classList.remove('show');
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
  window.scrollTo(0, 0);
};

const showDialog4 = () => {
  document.getElementById('dialog4').classList.add('show')
  document.getElementById('dialog2').classList.remove('show');
  document.getElementById('dialog1').classList.remove('show');
  document.getElementById('dialog3').classList.remove('show');
  document.getElementById('dialog5').classList.remove('show');
  document.getElementById('dialog6').classList.remove('show');
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
  window.scrollTo(0, 0);
};

const showDialog5 = () => {
  document.getElementById('dialog5').classList.add('show')
  document.getElementById('dialog2').classList.remove('show');
  document.getElementById('dialog1').classList.remove('show');
  document.getElementById('dialog3').classList.remove('show');
  document.getElementById('dialog4').classList.remove('show');
  document.getElementById('dialog6').classList.remove('show');
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
  window.scrollTo(0, 0);
};

const showDialog6 = () => {
  document.getElementById('dialog6').classList.add('show')
  document.getElementById('dialog2').classList.remove('show');
  document.getElementById('dialog1').classList.remove('show');
  document.getElementById('dialog3').classList.remove('show');
  document.getElementById('dialog5').classList.remove('show');
  document.getElementById('dialog4').classList.remove('show');
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
  window.scrollTo(0, 0);
};


const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('dialog1').classList.remove('show');
  document.getElementById('dialog2').classList.remove('show');
  document.getElementById('dialog3').classList.remove('show');
  document.getElementById('dialog4').classList.remove('show');
  document.getElementById('dialog5').classList.remove('show');
  document.getElementById('dialog6').classList.remove('show');
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
