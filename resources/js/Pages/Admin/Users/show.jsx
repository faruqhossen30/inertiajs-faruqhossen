import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function Index({ auth, user }) {
    return (
        <AuthenticatedLayout>
            <div className="flex justify-between items-center">
                <BreadcumComponent pageOne="User" pageOneRoute="users" />
                {/* <ButtonPlus routeName="" /> */}
            </div>



            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">


                            <div  className='p-12 card'>
                                <h1> S.N : {user.id}</h1>
                                <h1> Name:  {user.name}</h1>
                                <p>  Email :{ user.email}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
