
type cardProps = {
  amount: number;
  label: string;
  svg: string
  color: string
};

export const Card = ({ amount, label, svg, color }: cardProps) => {
  return (
    <div className="bg-white rounded-xl shadow p-3 md:p-5 flex md:flex-row flex-col items-center justify-between overflow-hidden h-auto md:h-[110px]">
      <div className={` bg-[${color}] rounded-full p-2 mr-0 md:mr-4 mb-2 md:mb-0 flex-shrink-0`}>
        
        <div className={`w-5 h-5 md:w-7 md:h-7 text-black`}>
            <img src={`/${svg}.svg`} alt={svg} />
            {/* {color} */}
        </div>
  
      </div>
      

      <div className="text-center md:text-left flex-grow">
        <div className="flex md:justify-end text-lg md:text-2xl break-words overflow-wrap-break-word">${amount}</div>
        <div className="flex mt-1 md:justify-end justify-center text-gray-500 text-[11px] md:text-sm break-words overflow-wrap-break-word">{label}</div>
      </div>
    </div>
  );
};