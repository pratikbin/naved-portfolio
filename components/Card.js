export default function Card({ image, title, info }) {
  return (
    <div className="group relative bg-[#141414] w-full aspect-square rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      <div className="flex-grow flex items-center justify-center p-6">
        <img src={image || '/design/screen1.webp'} alt={title || 'Project'} className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg" />
      </div>
      <div className="flex justify-between items-center text-xs text-[#484848] px-4 pb-4">
        <span className="font-medium">{title || 'Project Name'}</span>
        <span>{info || 'Project Info'}</span>
      </div>
    </div>
  );
}
