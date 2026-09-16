import DashboardSideBar from "@/components/dashboard/DashboardSideBar";

export default function DashboardLayout({children}: {children: React.ReactNode}){
<div className="w-full min-h-screen flex">
    <DashboardSideBar/>
    {children}
</div>
}