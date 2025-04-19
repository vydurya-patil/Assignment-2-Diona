document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.user-select-btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const selectedUser = button.getAttribute('data-user');
        window.location.href = `/${selectedUser}`;
      });
    });
  
    const printBtn = document.getElementById('print-pdf');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  });
  