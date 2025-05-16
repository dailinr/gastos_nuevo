
type cardProps = {
  amount: number;
  label: string;
  svg: string
  color: string
  type: string
};

export const Card = ({ amount, label, svg, color, type }: cardProps) => {
  const classCard = 'bg-white rounded-xl shadow p-3 md:p-5 flex md:flex-row flex-col items-center justify-between overflow-hidden h-auto md:h-[110px]}';
  const classCategory = 'flex flex-col items-center overflow-hidden h-min  w-[80px] ';

  const contSVG = `${color} rounded-full p-2 mr-0 md:mr-4 mb-2 md:mb-0 flex-shrink-0`;
  const contSVGCategory = `${color} rounded-full p-1.5 mr-0  mb-1 flex-shrink-0`;

  const imgClass = `w-5 h-5 md:w-7 md:h-7 text-black`;
  const imgCategory = `w-5 h-5 text-black`;


  return (
    <div className={type === 'card' ?  classCard : classCategory } >
      <div className={type === 'card' ? contSVG : contSVGCategory }>
        
        <div className={type === 'card' ? imgClass : imgCategory }>
            <img src={`/${svg}.svg`} alt={svg} />
        </div>
  
      </div>
      

      <div className={`${type === 'card' ? "md:text-left " : "" } text-center flex-grow`}>
        <div className={`${type === 'card' ? "md:justify-end md:text-2xl font-semibold " : ""} flex justify-center text-[14px]  break-words overflow-wrap-break-word`}>${amount}</div>
        <div className={`${type === 'card' ? "md:justify-end md:text-sm mt-1 font-semibold " : ""} flex justify-center text-gray-500 text-[11px] break-words overflow-wrap-break-word`}>
          {label}
        </div>
      </div>
    </div>
    
  );
};

