export default function Sidebar() {
    return (
        <aside className="w-64 p-4 h-full align-center border-r ">
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <ul className="space-y-2">
                <li>Dashboard</li>
                <li>Analytics</li>
                <li>Users</li>
                <li>Reports</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </aside>
    );
}
