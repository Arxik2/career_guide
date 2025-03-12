// src/components/tests/TestModal.tsx
interface TestModalProps {
  isOpen: boolean;
  onNextTest: () => void;
  onReset: () => void;
}

const TestModal = ({ isOpen, onNextTest, onReset }: TestModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold">Тест завершён!</h2>
        <p>Вы можете перейти к следующему тесту или просмотреть результаты.</p>

        <div className="flex justify-around mt-4">
          <button
            onClick={onNextTest}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            К результатам
          </button>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestModal;
