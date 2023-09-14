import React from 'react';
import logo  from '../images/logo.PNG';

function NavBar() {
    return (
        <div>
            <nav class="bg-slate-100 dark:bg-gray-800 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div class="max-w-screen flex justify-center mx-auto p-4">
                    <span class="text-black dark:text-white font-semibold text-2xl">Scotts Tots FFL</span>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
