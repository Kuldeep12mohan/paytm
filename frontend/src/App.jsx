import { RevenueCard } from "./components/RevenueCard"

function App() {

  return (
    <>
    <div className="grid grid-cols-4">
    <RevenueCard title={"Amount pending"} amount={"92312.20"} orderCount={13}></RevenueCard>
    </div>
    </>
  )
}

export default App
