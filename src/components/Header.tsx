export default function Header() {
  return (
    <div className="flex flex-col text-center gap-[20px]">
      <h1 className="text-[24px] text-white">pomodoro</h1>
      <div className=" p-[12px] h-[60px] bg-[#161932]   flex gap-[15px] rounded-[30px]">
        <h1 className=" p-[10px]  text-[12px] h-[40px] rounded-[30px] bg-red-600">
          pomodoro
        </h1>
        <h1 className=" text-[12px] p-[10px]  h-[40px] rounded-[30px] bg-red-600">
          short break
        </h1>
        <h1 className=" p-[10px]  text-[12px] h-[40px] rounded-[30px] bg-red-600">
          long break
        </h1>
      </div>
    </div>
  );
}
