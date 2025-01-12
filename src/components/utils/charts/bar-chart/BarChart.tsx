import Chart from "react-apexcharts";

const chartConfig = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false, // Defina para 'true' se quiser barras horizontais
    },
  },
  colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
  legend: {
    show: true,
  },
};

type BarChartProps = {
  labels: string[];
  data: number[];
  width?: number;
  height?: number;
  name?: string;
};

const BarChart = ({ labels, data, width, height, name }: BarChartProps) => {
  return (
    <Chart
      type="bar"
      height={height}
      options={{
        xaxis: {
          categories: labels, // Labels das barras
        },
        ...chartConfig,
      }}
      series={[
        {
          name: name,
          data: data, // Valores das barras
        },
      ]}
    />
  );
};

export default BarChart;
