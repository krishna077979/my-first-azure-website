const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent =
    document.body.classList.contains('dark') ? '☀' : '☾';
});

document.querySelectorAll('.task-list input').forEach(box => {
  box.addEventListener('change', () => {
    box.parentElement.style.textDecoration =
      box.checked ? 'line-through' : 'none';

    box.parentElement.style.opacity =
      box.checked ? '.55' : '1';
  });
});

// Get the currently signed-in Azure user
fetch('/.auth/me')
  .then(response => response.json())
  .then(data => {
    const user = data.clientPrincipal;

    if (user) {
      const name = user.userDetails || 'Student';
      const firstLetter = name.charAt(0).toUpperCase();

      document.getElementById('userName').textContent = name;
      document.getElementById('userAvatar').textContent = firstLetter;
      document.getElementById('heroAvatar').textContent = firstLetter;
      document.getElementById('welcomeText').textContent =
        `Welcome, ${name} 👋`;
    }
  })
  .catch(error => {
    console.error('Authentication information could not be loaded:', error);
  });
