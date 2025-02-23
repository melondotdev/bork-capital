export function Modal({ title, children, isOpen, onClose }: { title: string, children: React.ReactNode, isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center py-20 text-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md max-h-[80vh]">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-4 overflow-y-auto max-h-[60vh]">
          {children}
        </div>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
}
