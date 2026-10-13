(() => {
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('#mobile-menu');
  function setMenu(open) {
    menu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Stäng menyn' : 'Öppna menyn');
    document.body.classList.toggle('menu-open', open);
  }
  menuButton?.addEventListener('click', () => setMenu(menu.hidden));
  menu?.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && !menu.hidden) { setMenu(false); menuButton.focus(); }
    if(e.key === 'Tab' && !menu.hidden) {
      const links = Array.from(menu.querySelectorAll('a'));
      const last = links.at(-1);
      if(e.shiftKey && document.activeElement === menuButton) {e.preventDefault();last.focus();}
      else if(!e.shiftKey && document.activeElement === last) {e.preventDefault();menuButton.focus();}
    }
  });
  const wide = window.matchMedia('(min-width: 701px)');
  wide.addEventListener('change', e => { if(e.matches) setMenu(false); });
  const tabs = Array.from(document.querySelectorAll('[data-service]'));
  const panels = Array.from(document.querySelectorAll('.service-panel'));
  if(tabs.length) {
    document.querySelector('.service-tabs').setAttribute('role','tablist');
    document.querySelector('.service-tabs').setAttribute('aria-label','Välj tjänst');
    tabs.forEach((tab,i) => {
      tab.setAttribute('role','tab');
      tab.setAttribute('aria-controls',panels[i].id);
      tab.setAttribute('aria-selected',String(i===0));
      tab.tabIndex=i===0?0:-1;
      panels[i].setAttribute('role','tabpanel');
      panels[i].setAttribute('aria-labelledby',tab.id);
      panels[i].tabIndex=0;
      tab.addEventListener('click', e => { e.preventDefault(); activate(i); });
      tab.addEventListener('keydown', e => {
        let next;
        if(e.key==='ArrowRight'||e.key==='ArrowDown') next=(i+1)%tabs.length;
        if(e.key==='ArrowLeft'||e.key==='ArrowUp') next=(i-1+tabs.length)%tabs.length;
        if(e.key==='Home') next=0;
        if(e.key==='End') next=tabs.length-1;
        if(e.key===' ') {e.preventDefault();activate(i);}
        if(next!==undefined) {e.preventDefault();activate(next);tabs[next].focus();}
      });
    });
    function activate(n) {
      tabs.forEach((tab,i)=>{
        tab.classList.toggle('is-active',i===n);
        tab.setAttribute('aria-selected',String(i===n));tab.tabIndex=i===n?0:-1;
        panels[i].hidden=i!==n;
        panels[i].classList.toggle('is-entering',i===n);
      });
    }
  }
})();
