const skillsBadge = ({ skill }) => {
  return (
    <div>
      <div className="w-auto px-3 py-1 bg-zinc-100 rounded-[50px] border border-zinc-200 justify-center items-center gap-2 flex">
        <div className="text-black text-sm font-normal font-['Inter']">
          {skill}
        </div>
      </div>
    </div>
  );
};

export default skillsBadge;
