interface TestCardProps {
    title: string;
    description: string;
    onClick: () => void;
  }
  
  const TestCard = ({ title, description, onClick }: TestCardProps) => (
    <div onClick={onClick} className="p-6 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  export default TestCard;
  