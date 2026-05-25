document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your authentication logic here
            alert('Login attempt submitted');
        });
    }

    const button = document.getElementById('generate');
    const codeEl = document.getElementById('code');
    const detailsEl = document.getElementById('details');
    const resultEl = document.getElementById('result');

    if (button && codeEl && detailsEl && resultEl) {
        button.addEventListener('click', () => {
            const name = document.getElementById('groupName').value.trim() || 'Study Group';
            const subject = document.getElementById('subject').value.trim() || 'General';
            const randomPart = Array.from({ length: 6 }, () => Math.floor(Math.random() * 36).toString(36).toUpperCase()).join('');
            const code = `${subject.slice(0, 3).toUpperCase()}-${randomPart}`;
            codeEl.textContent = code;
            detailsEl.textContent = `Group: ${name} · Subject: ${subject}`;
            resultEl.style.display = 'block';
        });
    }
});
    