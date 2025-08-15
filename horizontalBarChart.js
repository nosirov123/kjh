export function createHorizontalBarChart(ctx) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [800, 500, 300, 600, 400, 700, 900],
                    backgroundColor: 'rgba(255, 255, 153, 0.6)',
                    borderColor: 'rgba(255, 255, 153, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Dataset 2',
                    data: [1000, 700, 400, 200, 300, 500, 100],
                    backgroundColor: 'rgba(218, 112, 214, 0.6)',
                    borderColor: 'rgba(218, 112, 214, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: { beginAtZero: true }
            },
            plugins: {
                title: { display: true, text: 'Horizontal Bar Chart' }
            }
        }
    });
}