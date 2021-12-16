export default function Author({ pp, name, date }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="h-[80px] w-[80px] rounded-full overflow-hidden shadow-lg">
        <img src={pp} alt={pp} className="w-full h-full" />
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm">{date}</p>
      </div>
    </div>
  );
}
