

// // Alternative: use load event for real loading progress
// window.addEventListener('load', function() {
//     // This will trigger when all resources are actually loaded
//     // You could remove the interval above and just use this
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const floatingImage = document.querySelector('.floating-image');
  
//     // Simple hover effect for floating image
//     floatingImage.addEventListener('mouseover', () => {
//       floatingImage.style.transition = 'transform 0.3s ease-in-out';
//       floatingImage.style.transform = 'scale(1.05)';
//     });
  
//     floatingImage.addEventListener('mouseleave', () => {
//       floatingImage.style.transition = 'transform 0.3s ease-in-out';
//       floatingImage.style.transform = 'scale(1)';
//     });
  
//     // Slide-in effect for sections on scroll
//     const sections = document.querySelectorAll('section');
  
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         }
//       });
//     }, { threshold: 0.2 });
  
//     sections.forEach(section => {
//       observer.observe(section);
//     });
  
//     // Button click animation
//     const buttons = document.querySelectorAll('.cta-button, .cta-btn');
//     buttons.forEach(button => {
//       button.addEventListener('click', () => {
//         button.style.transition = 'transform 0.1s ease';
//         button.style.transform = 'scale(0.95)';
//         setTimeout(() => {
//           button.style.transform = 'scale(1)';
//         }, 150);
//       });
//     });
//   });
  