document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const state = document.getElementById('state').value;
    const district = document.getElementById('district').value;
    const location = document.getElementById('location').value;
    const vehicleType = document.getElementById('vehicleType').value;
    const vehicleNumber = document.getElementById('vehicleNumber').value;
    const description = document.getElementById('description').value;

    const photoInput = document.getElementById('photo');
    const photo = photoInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
        const report = {
            date,
            time,
            state,
            district,
            location,
            vehicleType,
            vehicleNumber,
            photo: reader.result,
            description
        };

        
       // localStorage.clear(); // to clear previous history
        let reports = localStorage.getItem('reports');
        reports = reports ? JSON.parse(reports) : [];
        reports.push(report);
        localStorage.setItem('reports', JSON.stringify(reports));

        document.getElementById('message').textContent = 'Report Submitted Successfully!';
        document.getElementById('reportForm').reset();
        
    };

    reader.readAsDataURL(photo);
});
