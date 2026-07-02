// Automatically set the check-in input constraints to modern day rules
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkIn').min = today;
    document.getElementById('checkOut').min = today;
});

// Dynamic Price Assessment logic
function calculateAndBook(event) {
    if (event) {
        event.preventDefault(); // Prevents page reload during form submission
    }

    const checkInDate = document.getElementById('checkIn').value;
    const checkOutDate = document.getElementById('checkOut').value;
    const roomSelect = document.getElementById('roomType');
    const summaryDiv = document.getElementById('priceSummary');

    // Get selected option price attribute
    const pricePerNight = parseFloat(roomSelect.options[roomSelect.selectedIndex].getAttribute('data-price'));

    if (!checkInDate || !checkOutDate) {
        summaryDiv.innerHTML = `Base Room Cost: $${pricePerNight} per night. Select dates to calculate total.`;
        return;
    }

    const d1 = new Date(checkInDate);
    const d2 = new Date(checkOutDate);
    
    // Time difference calculation
    const timeDiff = d2.getTime() - d1.getTime();
    const totalNights = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (totalNights <= 0) {
        summaryDiv.innerHTML = `<span style="color: #e74c3c;"><i class="fa-solid fa-triangle-exclamation"></i> Error: Check-out date must be after check-in date!</span>`;
        return;
    }

    const totalCost = totalNights * pricePerNight;
    
    summaryDiv.innerHTML = `<i class="fa-solid fa-circle-info"></i> Stay Duration: ${totalNights} Night(s) | Total Calculated Cost: <strong>$${totalCost}</strong>`;

    // Show success notice only if the user deliberately pressed the submit button
    if (event) {
        alert(`Reservation Confirmed successfully!\nDuration: ${totalNights} Night(s)\nTotal Amount Due: $${totalCost}`);
    }
}

// Update the placeholder block instantly when switching selected room elements
function updateRoomPrice() {
    calculateAndBook(null);
}