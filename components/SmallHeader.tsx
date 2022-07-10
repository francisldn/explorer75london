import Link from "next/link";

const SmallHeader = () => {
    return (
        <nav className="flex flex-col max-w-screen h-20 bg-black">
            <div className="flex justify-around items-center my-auto">
                <div className="flex">
                <Link href="/">
                    <a><h1 className="text-4xl cursor-pointer text-[white]">
                        LondonExplorer75
                    </h1>
                    </a>
                </Link>
                </div>
                
                <ul className="flex list-none gap-8 uppercase text-[white]">
                    <li className="menu-navigate">
                        <Link href="/About">About Me</Link>    
                    </li>
                    <li className="menu-navigate">
                        <Link href="/Nearby">{`What's Nearby`}</Link> 
                    </li>
                    <li className="menu-navigate">
                       <Link href="Transport">Getting Around</Link>
                    </li>
                    <li className="menu-navigate">
                       <Link href="Resources">Useful Resources</Link>
                    </li>
                    <li className="menu-navigate">
                        <Link href="/Usermanual">User Manual</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SmallHeader;