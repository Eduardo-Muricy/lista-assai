export default function TesteBreakpoint() {
  return (
    <div className="flex flex-col tablet:flex-row gap-4 border border-red-500 p-4">
      <div className="bg-green-400 p-4">Box 1</div>
      <div className="bg-blue-400 p-4">Box 2</div>
    </div>
  );
}