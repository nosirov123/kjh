import { createVerticalBarChart } from './verticalBarChart.js';
import { createHorizontalBarChart } from './horizontalBarChart.js';
import { createLineChart } from './lineChart.js';
import { createPieChart } from './pieChart.js';
import { createPolarAreaChart } from './polarAreaChart.js';

// Canvas elementlarini olish
const verticalBarCtx = document.getElementById('verticalBarChart').getContext('2d');
const horizontalBarCtx = document.getElementById('horizontalBarChart').getContext('2d');
const lineCtx = document.getElementById('lineChart').getContext('2d');
const pieCtx = document.getElementById('pieChart').getContext('2d');
const polarAreaCtx = document.getElementById('polarAreaChart').getContext('2d');

// Grafiklarni yaratish
createVerticalBarChart(verticalBarCtx);
createHorizontalBarChart(horizontalBarCtx);
createLineChart(lineCtx);
createPieChart(pieCtx);
createPolarAreaChart(polarAreaCtx);