export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-900 to-black flex items-center justify-center z-50">
      <p className="text-6xl font-bold text-green-400 animate-pulse">loading</p>
    </div>
  );
}