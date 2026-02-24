export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <button
       
        className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg border border-red-700 text-white font-semibold transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
}