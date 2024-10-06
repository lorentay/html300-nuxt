export default defineNuxtPlugin(() => {
    if (process.client) {
      // uses dynamic import for Bootstrap to ensure it's only loaded on the client
      import('bootstrap').then(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach(tooltipTriggerEl => {
          // dynamically imports the Tooltip component from Bootstrap
          import('bootstrap/js/dist/tooltip').then(({ default: Tooltip }) => {
            new Tooltip(tooltipTriggerEl);
          });
        });
      });
    }
  });
  