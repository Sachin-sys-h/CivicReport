// const links = document.querySelectorAll(".navlink");

// links.forEach(link => {
//   link.addEventListener("click", function(e) {
//     e.preventDefault(); // Prevent page refresh if using #
    
//     // Remove 'active' class from all links
//     links.forEach(l => l.classList.remove("active"));

//     // Add 'active' class to clicked link
//     this.classList.add("active");
//   });
// });


// avatar preview
    const profileInput = document.getElementById('profilepic');
    const avatarPreview = document.getElementById('avatarPreview');

    profileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        profileInput.value = '';
        return;
      }
      if (file.size > 2 * 1024 * 1024) { // 2MB
        alert('Image too large. Max 2MB.');
        profileInput.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        avatarPreview.innerHTML = '';
        const img = document.createElement('img');
        img.src = ev.target.result;
        avatarPreview.appendChild(img);
      };
      reader.readAsDataURL(file);
    });

    // OTP demo
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    let currentOtp = null;
    sendOtpBtn.addEventListener('click', () => {
      // simple demo OTP
      currentOtp = String(Math.floor(1000 + Math.random() * 9000));
      alert('Demo OTP (for testing): ' + currentOtp);
      sendOtpBtn.textContent = 'Resend OTP';
    });

    // form validation helper
    function isValidContact(s) {
      s = (s || '').trim();
      const phone = /^[6-9]\d{9}$/; // simple Indian mobile pattern
      const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return phone.test(s) || email.test(s);
    }

    // submit handler (demo)
    const form = document.getElementById('regForm');
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const name = document.getElementById('fullname').value.trim();
      const contact = document.getElementById('contact').value.trim();
      const pincode = document.getElementById('pincode').value.trim();
      const otp = document.getElementById('otp').value.trim();

      if (!name || !contact || !pincode) {
        alert('Please fill required fields.');
        return;
      }
      if (!isValidContact(contact)) {
        alert('Please enter a valid email or 10-digit mobile number.');
        return;
      }
      if (currentOtp && otp !== currentOtp) {
        alert('OTP does not match. (Demo OTP was: ' + currentOtp + ')');
        return;
      }
      // demo success - in real app you would send form data to backend
      alert('Registration successful (demo). Redirecting to login.');
      window.location.href = 'new.html'; // change to your login page
    });

    // submit button

    function del(){
        window.location.href='index.html';
    }


    // login
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Demo credentials (you can connect to backend here)
      if(username === "admin" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // redirect after login
      } else {
        errorMsg.style.display = "block";
      }
    });
  