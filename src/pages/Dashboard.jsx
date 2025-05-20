import SideBar from "../components/SideBar";
import DataTable from "../components/DataTable"

export default function Dashboard() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <DataTable />
      </div>
    </div>
  )
}
