export default function NeumorphicBlur() {
  return (
    <div className="absolute inset-0 flex items-center justify-center -z-10">
      <div className="absolute w-72 h-72 bg-pink-400 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute w-96 h-96 bg-blue-400 opacity-20 blur-3xl rounded-full top-10 left-20"></div>
    </div>
  );
}
