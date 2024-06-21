export default function Btn({ text }) {
  return (
    <>
      <button className="px-16 py-2 mt-6 bg-[#5d6aa8e0] mb-6 text-white font-bold rounded-full hover:bg-[#5d6aa8]  hover:border-[#5d6aa8] hover:border">
        {text}
      </button>
    </>
  );
}
