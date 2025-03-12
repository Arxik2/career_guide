// src/components/tests/ProgressBar.tsx
interface ProgressBarProps {
    progress: number;
  }
  
  const ProgressBar = ({ progress }: ProgressBarProps) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-500 h-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };
  
  export default ProgressBar;
  