// Wait for the window to fully load
window.addEventListener('load', function() {
  // Select the loading element
  const loadingElement = document.querySelector('.loading');
  
  // If loading element exists, fade it out
  if (loadingElement) {
    // Add fade-out class
    loadingElement.style.transition = 'opacity 0.5s ease-out';
    loadingElement.style.opacity = '0';
    
    // Remove the element after the transition completes
    setTimeout(() => {
      loadingElement.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 500);
  } else {
    // If no loading element, ensure body is scrollable
    document.body.style.overflow = 'auto';
  }
});

// Fallback in case the load event doesn't fire
setTimeout(() => {
  const loadingElement = document.querySelector('.loading');
  if (loadingElement && loadingElement.style.display !== 'none') {
    loadingElement.style.transition = 'opacity 0.5s ease-out';
    loadingElement.style.opacity = '0';
    
    setTimeout(() => {
      if (loadingElement) {
        loadingElement.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }, 500);
  }
}, 5000); // 5 second timeout as a fallback
