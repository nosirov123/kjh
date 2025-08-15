export function createVerticalBarChart(ctx) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [300, 500, 700, 200, 100, 800, 100],
                    backgroundColor: 'rgba(255, 192, 203, 0.6)',
                    borderColor: 'rgba(255, 192, 203, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Dataset 2',
                    data: [400, 600, 800, 100, 200, 700, 300],
                    backgroundColor: 'rgba(173, 216, 230, 0.6)',
                    borderColor: 'rgba(173, 216, 230, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            },
            plugins: {
                title: { display: true, text: 'Vertical Bar Chart' }
            }
        }
    });
}