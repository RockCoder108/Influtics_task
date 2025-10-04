import bryan from "../../../assets/bryan.png";
import love from "../../../assets/love.svg";


// BryanReaction Component
const BryanReaction = () => {
  return (
    <div className="inline-block relative mb-6 animate-fade-in-down">
      <div className="relative bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center py-2 pl-2 pr-12">
        <img src={bryan} alt="User avatar" className="w-12 h-12 rounded-full" />
        <div className="ml-3">
          <p className="text-gray-700 font-semibold text-md leading-tight">
            Bryan has liked
          </p>
        </div>
        <div className="absolute -top-2 -right-2">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-md border-2 border-white">
            <img src={love} alt="love icon" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BryanReaction;