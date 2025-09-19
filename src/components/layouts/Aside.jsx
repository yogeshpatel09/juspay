

export default function Aside() {




    return (
        <div className="w-full h-screen overflow-y-auto  border-l border-gray-200 dark:dark:border-[rgba(255,255,255,0.1)] bg-white dark:bg-[#1c1c1c]  px-5 py-5 ovey scrollbar-hide">

            <nav className="">
                <h3 className="text-sm font-medium text-[rgba(28,28,28,0.4)] dark:text-[rgba(255,255,255,1)]  mt-4 px-3 py-2">Notifications</h3>





                <h3 className="text-sm font-medium text-[rgba(28,28,28,0.4)] dark:text-[rgba(255,255,255,1)] mt-4 px-3 py-2">Activities</h3>


                <h3 className="text-sm font-medium text-[rgba(28,28,28,0.4)] dark:text-[rgba(255,255,255,1)] mt-4 px-3 py-2">Contacts</h3>

            </nav>

        </div>
    );
}
