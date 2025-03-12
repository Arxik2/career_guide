import { FC } from "react";

interface TestCompleteModalProps {
  isOpen: boolean;
  onNextTest: () => void;
  onViewResults: () => void;
}

const TestCompleteModal: FC<TestCompleteModalProps> = ({
  isOpen,
  onNextTest,
  onViewResults,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Тест завершён!</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Вы успешно прошли тест. Что дальше?
        </p>
        <div className="flex justify-between">
          <button
            onClick={onNextTest}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Следующий тест
          </button>
          <button
            onClick={onViewResults}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            К результатам
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCompleteModal;
