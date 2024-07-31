// This is a workaround to add custom head content
document.addEventListener('DOMContentLoaded', (event) => {
    const script = document.createElement('script');
    script.setAttribute('defer', '');
    script.setAttribute('data-domain', 'temunix2.github.io');
    script.setAttribute('src', 'https://plausible.io/js/script.js');
    document.head.appendChild(script);
  });