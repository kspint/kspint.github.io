document.addEventListener('DOMContentLoaded', function(){
  const preloader = document.querySelector('.preloader');
  window.addEventListener('load', ()=>setTimeout(()=>preloader && preloader.classList.add('hide'),250));
  setTimeout(()=>preloader && preloader.classList.add('hide'),1800);

  const topBtn = document.querySelector('.float-top');
  const updateTop = () => { if(topBtn) topBtn.classList.toggle('show', window.scrollY > 450); };
  window.addEventListener('scroll', updateTop, {passive:true}); updateTop();
  if(topBtn) topBtn.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

  document.querySelectorAll('[data-contact-form]').forEach(form=>{
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const email = data.get('email') || '';
      const service = data.get('service') || 'General enquiry';
      const message = data.get('message') || '';
      const subject = encodeURIComponent('Website enquiry — KS & Partners Consultancy');
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`);
      window.location.href = `mailto:info@ksp-int.com?subject=${subject}&body=${body}`;
      const status = form.querySelector('.form-status');
      if(status) status.textContent = 'Your email application will open with your enquiry details.';
    });
  });

  const popup = document.getElementById('enquiryModal');
  if(popup && !sessionStorage.getItem('kspPopupShown')){
    setTimeout(()=>{ 
      if(window.bootstrap){ new bootstrap.Modal(popup).show(); sessionStorage.setItem('kspPopupShown','1'); }
    }, 9000);
  }
});
