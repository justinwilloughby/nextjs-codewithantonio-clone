import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CircleUserRoundIcon, LogInIcon, LogOutIcon, Search } from "lucide-react"

export const Header = () => {
    return (
        <div className="h-20 w-full border border-slate-200 p-5 flex flex-row justify-between fixed z-[49] bg-white">
            <div className="flex flex-row space-x-2">
                <CircleUserRoundIcon className="h-[35px] w-[35px] text-sky-700"></CircleUserRoundIcon>
                <div className="flex flex-col">
                    <div className="text-base font-bold text-sky-700">Code With Justin</div>
                    <div className="text-xs text-slate-500">Build something great!</div>
                </div>
            </div>
            <div className="flex-auto max-w-[725px] px-10 flex flex-row">
                <Input placeholder="Search for a course" className="rounded-e-none"/>
                <Button className="rounded-s-none bg-sky-700"><Search className="h-[16px] w-[16px]"></Search></Button>
            </div>
            <div>
                <Button variant="outline" className="space-x-2"><LogInIcon className="h-[16px] w-[16px]"></LogInIcon><span>Login</span></Button>
            </div>
        </div>
    )
}