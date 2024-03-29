import { SideBarButton } from "@/components/sidebarbutton"
import { Button } from "@/components/ui/button"
import { Bot, Code, Compass, Mail, PencilRuler, Trophy, TwitterIcon, YoutubeIcon } from "lucide-react"

export const SideBar = () => {
    return (
        <div className="w-[275px] flex flex-col border-r-[1px] border-slate-200 fixed h-full z-[48]">
            <div className="pt-20">

            </div>
            <div className="flex flex-col p-3 space-y-2 flex-auto">
                <SideBarButton variant="active" size="default">
                    <Compass />
                    <span className="pl-2">Browse</span>
                </SideBarButton>
                <SideBarButton variant="inactive" size="default" className="flex flex-row">
                    <PencilRuler />
                    <span className="pl-2 flex-auto text-left">Workshops</span>
                    <div className="bg-sky-100 rounded-md py-1 px-2 text-xs">New</div>
                </SideBarButton>
                <SideBarButton variant="inactive" size="default">
                    <Code />
                    <span className="pl-2">Problems</span>
                </SideBarButton>
                <SideBarButton variant="inactive" size="default">
                    <Trophy />
                    <span className="pl-2">Leaderboard</span>
                </SideBarButton>
                <SideBarButton variant="inactive" size="default">
                    <Mail />
                    <span className="pl-2">Newsletter</span>
                </SideBarButton>
            </div>
            <div className="h-[275px] w-full flex flex-col mb-2">
                <div className="flex-auto">
                    <div className="border border-slate-200 m-4 p-4 h-auto rounded-md space-y-2">
                        <div className="font-bold">Upgrade to Pro</div>
                        <div className="text-sm text-slate-500">Unlock weekly workshops, access to all paid content, and more.</div>
                        <Button size="sm" className="w-full text-sm font-medium">Upgrade</Button>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row p-4 justify-evenly">
                        <Button variant="ghost" className="text-slate-500 p-6"><Bot></Bot></Button>
                        <Button variant="ghost" className="text-slate-500 p-6"><YoutubeIcon></YoutubeIcon></Button>
                        <Button variant="ghost" className="text-slate-500 p-6"><TwitterIcon></TwitterIcon></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}