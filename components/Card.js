export default function Card({ image, title }) {
  return (
    <div className="bg-[#1a1a1a] w-full aspect-square rounded hover:bg-[#2a2a2a] transition duration-200 flex items-center justify-center overflow-hidden">
      {image ? (
        <img src={image} alt={title || 'Project'} className="w-full h-full object-cover rounded" />
      ) : (
        <span className="text-sm text-[#999]">Screenshot Coming Soon</span>
      )}
    </div>
  );
}
