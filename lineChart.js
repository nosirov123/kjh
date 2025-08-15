export function createLineChart(ctx) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [100, 200, 300, 400, 500, 600, 700],
                    borderColor: 'rgba(255, 215, 0, 1)',
                    backgroundColor: 'rgba(255, 215, 0, 0.2)',
                    borderWidth: 2
                },
                {
                    label: 'Dataset 2',
                    data: [700, 600, 500, 400, 300, 200, 100],
                    borderColor: 'rgba(218, 112, 214, 1)',
                    backgroundColor: 'rgba(218, 112, 214, 0.2)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            },
            plugins: {
                title: { display: true, text: 'Line Chart' }
            }
        }
    });
}