
const menuBtn=document.querySelector('.menu-btn');
const navlinks=document.querySelector('.navlinks');
if(menuBtn) menuBtn.addEventListener('click',()=>navlinks.classList.toggle('open'));

document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>navlinks?.classList.remove('open')));

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}})
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

document.querySelectorAll('[data-count]').forEach(el=>{
  const target=Number(el.dataset.count), suffix=el.dataset.suffix||'';
  let done=false;
  const obs=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting && !done){
      done=true; let start=0, step=Math.max(1,Math.ceil(target/50));
      const tick=()=>{start=Math.min(target,start+step);el.textContent=start.toLocaleString()+suffix;if(start<target)requestAnimationFrame(tick)}
      tick(); obs.disconnect();
    }
  }); obs.observe(el);
});

const galleryData = [{"src": "assets/gallery/project-01.jpg", "title": "Sunita Enterprises — Project & Work Photo 01", "category": "Projects"}, {"src": "assets/gallery/project-02.jpg", "title": "Sunita Enterprises — Project & Work Photo 02", "category": "Projects"}, {"src": "assets/gallery/project-03.jpg", "title": "Sunita Enterprises — Project & Work Photo 03", "category": "Projects"}, {"src": "assets/gallery/project-04.jpg", "title": "Sunita Enterprises — Project & Work Photo 04", "category": "Projects"}, {"src": "assets/gallery/project-05.jpg", "title": "Sunita Enterprises — Project & Work Photo 05", "category": "Projects"}, {"src": "assets/gallery/project-06.jpg", "title": "Sunita Enterprises — Project & Work Photo 06", "category": "Projects"}, {"src": "assets/gallery/project-07.jpg", "title": "Sunita Enterprises — Project & Work Photo 07", "category": "Projects"}, {"src": "assets/gallery/project-08.jpg", "title": "Sunita Enterprises — Project & Work Photo 08", "category": "Projects"}, {"src": "assets/gallery/project-09.jpg", "title": "Sunita Enterprises — Project & Work Photo 09", "category": "Projects"}, {"src": "assets/gallery/project-10.jpg", "title": "Sunita Enterprises — Project & Work Photo 10", "category": "Projects"}, {"src": "assets/gallery/project-11.jpg", "title": "Sunita Enterprises — Project & Work Photo 11", "category": "Projects"}, {"src": "assets/gallery/project-12.jpg", "title": "Sunita Enterprises — Project & Work Photo 12", "category": "Projects"}, {"src": "assets/gallery/project-13.jpg", "title": "Sunita Enterprises — Project & Work Photo 13", "category": "Projects"}, {"src": "assets/gallery/project-14.jpg", "title": "Sunita Enterprises — Project & Work Photo 14", "category": "Projects"}, {"src": "assets/gallery/project-15.jpg", "title": "Sunita Enterprises — Project & Work Photo 15", "category": "Projects"}, {"src": "assets/gallery/project-16.jpg", "title": "Sunita Enterprises — Project & Work Photo 16", "category": "Projects"}, {"src": "assets/gallery/project-17.jpg", "title": "Sunita Enterprises — Project & Work Photo 17", "category": "Projects"}, {"src": "assets/gallery/project-18.jpg", "title": "Sunita Enterprises — Project & Work Photo 18", "category": "Projects"}, {"src": "assets/gallery/project-19.jpg", "title": "Sunita Enterprises — Project & Work Photo 19", "category": "Projects"}, {"src": "assets/gallery/project-20.jpg", "title": "Sunita Enterprises — Project & Work Photo 20", "category": "Projects"}, {"src": "assets/gallery/project-21.jpg", "title": "Sunita Enterprises — Project & Work Photo 21", "category": "Projects"}, {"src": "assets/gallery/project-22.jpg", "title": "Sunita Enterprises — Project & Work Photo 22", "category": "Projects"}, {"src": "assets/gallery/project-23.jpg", "title": "Sunita Enterprises — Project & Work Photo 23", "category": "Projects"}, {"src": "assets/gallery/project-24.jpg", "title": "Sunita Enterprises — Project & Work Photo 24", "category": "Projects"}, {"src": "assets/gallery/project-25.jpg", "title": "Sunita Enterprises — Project & Work Photo 25", "category": "Projects"}, {"src": "assets/gallery/project-26.jpg", "title": "Sunita Enterprises — Project & Work Photo 26", "category": "Projects"}, {"src": "assets/gallery/project-27.jpg", "title": "Sunita Enterprises — Project & Work Photo 27", "category": "Projects"}, {"src": "assets/gallery/project-28.jpg", "title": "Sunita Enterprises — Project & Work Photo 28", "category": "Projects"}, {"src": "assets/gallery/project-29.jpg", "title": "Sunita Enterprises — Project & Work Photo 29", "category": "Projects"}];
const galleryRoot=document.querySelector('[data-gallery]');
if(galleryRoot){
  galleryData.forEach(item=>{
    const btn=document.createElement('button');
    btn.innerHTML=`<img src="${item.src}" alt="${item.title}" loading="lazy">`;
    btn.dataset.category=item.category;
    btn.addEventListener('click',()=>openModal(item.src,item.title));
    galleryRoot.appendChild(btn);
  });
}
// 
const q_safetyData = [{"src": "assets/gallery/Ak_nobel.jpg", "title": "Sunita Enterprises — Certificate Photo 01", "category": "Projects"}, {"src": "assets/gallery/APL.jpg", "title": "Sunita Enterprises — Certificate Photo 02", "category": "Projects"}, {"src": "assets/gallery/Dr_fixit.jpg", "title": "Sunita Enterprises — Certificate Photo 03", "category": "Projects"}, {"src": "assets/gallery/NWP.jpg", "title": "Sunita Enterprises — Certificate Photo 04", "category": "Projects"},];
const q_safetyRoot=document.querySelector('[data-q_safety]');
if(q_safetyRoot){
  q_safetyData.forEach(item=>{
    const btn=document.createElement('button');
    btn.innerHTML=`<img src="${item.src}" alt="${item.title}" loading="lazy">`;
    btn.dataset.category=item.category;
    btn.addEventListener('click',()=>openModal(item.src,item.title));
    q_safetyRoot.appendChild(btn);
  });
}
// 


const modal=document.querySelector('.modal');
const modalImg=document.querySelector('.modal img');
const modalCaption=document.querySelector('.modal-caption');
function openModal(src,title){if(!modal)return;modalImg.src=src;modalImg.alt=title;modalCaption.textContent=title;modal.classList.add('open');document.body.style.overflow='hidden'}
function closeModal(){modal?.classList.remove('open');document.body.style.overflow=''}
document.querySelector('.close')?.addEventListener('click',closeModal);
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

document.querySelectorAll('[data-projects]').forEach(root=>{
  const cards=[...root.querySelectorAll('[data-project]')];
  const search=document.querySelector('[data-project-search]');
  const year=document.querySelector('[data-project-year]');
  function filter(){
    const q=(search?.value||'').toLowerCase(), y=year?.value||'all';
    cards.forEach(c=>{
      const okText=c.textContent.toLowerCase().includes(q);
      const okYear=y==='all'||c.dataset.year===y;
      c.style.display=okText&&okYear?'':'none';
    });
  }
  search?.addEventListener('input',filter); year?.addEventListener('change',filter);
});

const form=document.querySelector('[data-contact-form]');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!form.checkValidity()){form.reportValidity();return}
    const name=form.name.value.trim();
    document.querySelector('.notice').textContent=`Thank you, ${name}. Your enquiry has been prepared. Please use the email/phone details on this page to send it to Sunita Enterprises.`;
    document.querySelector('.notice').classList.add('show');
    form.reset();
  });
}
