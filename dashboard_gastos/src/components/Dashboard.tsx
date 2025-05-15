import { BoardLeft } from "./BoardLeft";
import { BoardRight } from "./BoardRight";
import { Header } from "./Header";

export const Dashboard = () => {

   return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-1 md:grid-cols-[57%_1fr] 
        gap-4 w-full h-screen p-5 md:pl-0">
      {/* Fila 1 */}
      <Header />
      
      <BoardLeft />

      
      <BoardRight />

    </div>
  );
};