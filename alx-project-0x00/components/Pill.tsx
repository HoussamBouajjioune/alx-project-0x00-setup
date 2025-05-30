const Pill: React.FC<{ title: string }> = ({ title }) => (
  <span className="bg-gray-200 text-sm rounded-full px-2 py-1">{title}</span>
);

export default Pill;
