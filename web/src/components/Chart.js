import { useMemo } from 'react'; //store the things as entes si hay rerender no se debe renderizar todo gráfico si los datos no han cambiado
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
//import component of the library that allows me to display line chart
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart(props) {
  const scores = [2, 5, 1, 3];
  const labels = ['Happy', 'Sad', 'Angry'];

  const options = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  //memorizar los datos que le voy a pasar a mi gráfico
  const data = useMemo(function () {
    //reactChart pide q pasemos un objeto q contenga clave DATASET que son los sets de datos que quiero q se pinten en mi gráfico
    //yo solo tengo un dataset

    return {
      //Datasets sería eje Y
      datasets: [
        {
          data: scores,
          backgroundColor: 'blue',
        },
      ],
      labels, //sería eje X
    };
  }, []);

  return (
    //devuelvo componente Line pasándole objeto data y options
    <Bar data={data} className="chart-component" options={options} />
  );
}

export default Chart;
