// Appoinments chart
const ctx = document.getElementById('lineChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [{
            label: '# of appoinments',
            data: [20, 15, 23, 25, 12, 7],
            backgroundColor: [
                '#0275d8'
            ],
            borderColor: [
                '#0275d8'
            ],    
            borderWidth: 1
        }]
    },
    options: {
       responsive: true,

    }
});

// Patients' attendance chart
const ctx_1 = document.getElementById('doughnut').getContext('2d');
const myChart_1 = new Chart(ctx_1, {
    type: 'doughnut',
    data: {
        labels: ['OPD', 'Eye Clinic', 'ENT', 'Pediatric', 'Dental Clinic', 'Ward'],
        datasets: [{
            label: '# of patients',
            data: [24, 20, 22, 25, 15, 17],
            backgroundColor: [
                'rgba(35,35,228,1.0)',
                'rgba(255, 150, 182, 0.2)',
                'rgba(80, 150, 255, 0.2)',
                'rgba(255, 180, 136, 0.2)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
                'rgba(35,35,228,1.0)',
                'rgba(255, 150, 182, 0.2)',
                'rgba(80, 150, 255, 0.2)',
                'rgba(255, 180, 136, 0.2)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive: true,

    }
});