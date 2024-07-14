import Sidebar from "./_components/sidebar"
import Topbar from "./_components/topbar"

function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex items-stretch justify-between gap-10'>
            <Sidebar />
            <section className='flex-1 flex flex-col py-3'>
                <Topbar />
                {children}
            </section>
        </main>
    )
}

export default AdminLayout