document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            shootDate: document.getElementById('shootDate').value,
            shootType: document.getElementById('shootType').value,
            notes: document.getElementById('notes').value,
            package: document.querySelector('input[name="package"]:checked')?.value
        };

        // Validate form
        if (!validateForm(formData)) {
            return;
        }

        // Submit form (replace with actual API call)
        console.log('Booking submitted:', formData);
        alert('Booking submitted successfully!');
        bookingForm.reset();
    });

    function validateForm(data) {
        if (!data.name || !data.email || !data.phone || !data.shootDate || 
            !data.shootType || !data.package) {
            alert('Please fill in all required fields');
            return false;
        }

        if (!isValidEmail(data.email)) {
            alert('Please enter a valid email address');
            return false;
        }

        if (!isValidPhone(data.phone)) {
            alert('Please enter a valid phone number');
            return false;
        }

        const selectedDate = new Date(data.shootDate);
        if (selectedDate < new Date()) {
            alert('Please select a future date');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^\d{10}$/.test(phone.replace(/[^0-9]/g, ''));
    }
});
