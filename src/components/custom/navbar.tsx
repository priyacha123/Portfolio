import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Navbar() {
    return (
        <>
        <div className="border-b-2 m-4 p-4 items-center hidden md:block">
            <div className="flex gap-10 items-center">
                {/* <Link> Home </Link>
                <Link> About </Link>
                <Link> Projects </Link>
                <Link> Contact </Link> */}
                <h3> Home </h3>
                <h3> About </h3>
                <h3> Projects </h3>
                <h3> Contact </h3>
                <ModeToggle />
            </div>
        </div>
        </>
    )
}