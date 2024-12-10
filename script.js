
  document.getElementById('ammi').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Username, Password }),
      });

      if (response.ok) {
        // Redirect to the dashboard
        window.location.href = '/dashboard';
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  });


  
