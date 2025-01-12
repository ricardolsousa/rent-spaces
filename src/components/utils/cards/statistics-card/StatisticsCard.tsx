type StatisticsCardProps = {
  label: string;
  value: any;
};

const StatisticsCard = ({ label, value }: StatisticsCardProps) => {
  return (
    <div className="flex flex-col rounded rounded bg-gray-200 p-4 gap-4">
      <div className="text-base text-gray-600">{label}</div>
      <div className="font-bold text-3xl">{value}</div>
    </div>
  );
};

export default StatisticsCard;
