const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀' : '☾';
});

document.querySelectorAll('.task-list input').forEach(box => {
  box.addEventListener('change', () => {
    box.parentElement.style.textDecoration = box.checked ? 'line-through' : 'none';
    box.parentElement.style.opacity = box.checked ? '.55' : '1';
  });
});
