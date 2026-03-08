export default function HealthCard({title,desc,icon}) {
  return (
    <div className="bg-white/40 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition">

      <div className="text-3xl mb-3">{icon}</div>

      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-600">
        {desc}
      </p>

    </div>
  );
}