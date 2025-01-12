import Chart from "react-apexcharts";

const chartConfig = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
    // formatter: function (val: any, opts: any) {
    //   return opts.w.config.series[opts.seriesIndex];
    // },
  },
  colors: ["#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
  legend: {
    show: true,
  },
};

type PieChartProps = {
  labels: string[];
  data: number[];
  width: number;
  height: number;
};

const PieChart = ({ labels, data, width, height }: PieChartProps) => {
  return (
    <Chart
      type="pie"
      width={width}
      height={height}
      series={data}
      options={{
        labels: labels,
        ...chartConfig,
      }}
    />
  );
};

export default PieChart;
