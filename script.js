document.addEventListener('DOMContentLoaded', () => {
      // Curtain transition
      setTimeout(() => {
          document.querySelector('.curtain').classList.add('active');
      }, 1000);
  
      setTimeout(() => {
          document.querySelector('.curtain').style.display = 'none';
      }, 2000);
  
      // Language switching
      const languageBtns = document.querySelectorAll('.language-btn');
      const translatableElements = document.querySelectorAll('[data-en]');
  
      const applyLanguage = lang => {
          translatableElements.forEach(el => {
              const text = el.getAttribute(`data-${lang}`);
              if (text) {
                  if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                      el.placeholder = text;
                  } else {
                      el.textContent = text;
                  }
              }
          });
  
          // Set text direction for RTL languages
          if (lang === 'ar') {
              document.documentElement.dir = 'rtl';
          } else {
              document.documentElement.dir = 'ltr';
          }
      };
  
      const storedLang = localStorage.getItem('preferredLang') || 'en';
      applyLanguage(storedLang);
      languageBtns.forEach(btn => {
          btn.classList.toggle('active', btn.dataset.lang === storedLang);
      });
  
      languageBtns.forEach(btn => {
          btn.addEventListener('click', () => {
              const lang = btn.dataset.lang;
              localStorage.setItem('preferredLang', lang);
              applyLanguage(lang);
              languageBtns.forEach(b => b.classList.remove('active'));
              btn.classList.add('active');
          });
      });
  });
  