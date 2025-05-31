$(document).ready(function () {
    $('#togglePass').click(function () {
      let type = $('#password').attr('type') === 'password' ? 'text' : 'password';
      $('#password').attr('type', type);
      $(this).text(type === 'password' ? 'Show' : 'Hide');
    });

    $('#myForm').submit(function (e) {
      e.preventDefault();
      const name = $('#name').val().trim();
      const email = $('#email').val().trim();
      const phone = $('#phone').val().trim();
      const password = $('#password').val();
      const cnfpassword = $('#cnfpassword').val();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

      let error = '';

      if (!name || !email || !phone || !password || !cnfpassword) {
        error = 'All fields are required';
      } else if (!emailRegex.test(email)) {
        error = 'Invalid email format';
      } else if (!phoneRegex.test(phone)) {
        error = 'Phone number must be exactly 10 digits';
      } else if (!passwordRegex.test(password)) {
        error = 'Password must be at least 8 characters and include uppercase, lowercase, and number';
      } else if (password !== cnfpassword) {
        error = 'Passwords do not match';
      }

      if (error) {
        $('#error')
          .css({
            'background-color': 'red',
            'color': 'white',
            'display': 'block'
          })
          .text(error);
      } else {
        $('#error')
          .css({
            'background-color': 'green',
            'color': 'white',
            'display': 'block'
          })
          .text('Form submitted successfully!');
      }      
    });
  });