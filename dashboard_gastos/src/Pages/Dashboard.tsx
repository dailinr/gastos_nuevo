import { BoardLeft } from '@/components/BoardLeft'
import { BoardRight } from '@/components/BoardRight'

export const Dashboard = () => {
  return (
    <main className="flex-1 grid grid-cols-1 md:grid-cols-[57%_1fr] gap-4 md:overflow-hidden">
      <BoardLeft />
      <BoardRight />
    </main>
  )
}
