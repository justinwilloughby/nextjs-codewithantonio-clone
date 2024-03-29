import { Button } from "@/components/ui/button";
import { CategoryButton } from "./categorybuttons";
import Image from "next/image";
import { Book, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="h-full py-6 px-16 pt-24 pl-[300px]">
      <div className="flex flex-row space-x-2 overflow-x-auto">
        <CategoryButton text="All" active/>
        <CategoryButton text="Next.js" />
        <CategoryButton text="React.js" />
        <CategoryButton text="MySQL" />
        <CategoryButton text="MongoDB" />
        <CategoryButton text="Prisma" />
        <CategoryButton text="Tailwind" />
        <CategoryButton text="Node.js" />
        <CategoryButton text="Supabase" />
        <CategoryButton text="Convex" />
        <CategoryButton text="Next Auth" />
        <CategoryButton text="PostgreSQL" />
      </div>     
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        <div className="flex flex-col border border-slate-100 rounded-md h-full">
          <Image src="/course.png" alt="Image" height="200" width="400" className="rounded-md rounded-b-none" />
          <div className="space-y-2 flex flex-col h-full flex-1 p-4">
            <div className="font-semibold">Duolingo Clone</div>
            <div className="flex flex-row items-center space-x-2">
              <div className="bg-sky-100 rounded-full p-2 w-auto">
                <BookOpen className="text-sky-700 h-[16px] w-[16px]"></BookOpen>
              </div>
              <div className="text-sm text-slate-500">
                29 Chapters
              </div>
            </div>
          </div>
          <div className="text-slate-500 text-sm font-semibold pb-4 pl-4">Free</div>         
        </div>
        <div className="flex flex-col border border-slate-100 rounded-md h-full">
          <Image src="/course.png" alt="Image" height="200" width="400" className="rounded-md rounded-b-none" />
          <div className="space-y-2 flex flex-col h-full flex-1 p-4">
            <div className="font-semibold">Duolingo Clone</div>
            <div className="flex flex-row items-center space-x-2">
              <div className="bg-sky-100 rounded-full p-2 w-auto">
                <BookOpen className="text-sky-700 h-[16px] w-[16px]"></BookOpen>
              </div>
              <div className="text-sm text-slate-500">
                29 Chapters
              </div>
            </div>
          </div>
          <div className="text-slate-500 text-sm font-semibold pb-4 pl-4">Free</div>         
        </div>
        <div className="flex flex-col border border-slate-100 rounded-md h-full">
          <Image src="/course.png" alt="Image" height="200" width="400" className="rounded-md rounded-b-none" />
          <div className="space-y-2 flex flex-col h-full flex-1 p-4">
            <div className="font-semibold">Duolingo Clone</div>
            <div className="flex flex-row items-center space-x-2">
              <div className="bg-sky-100 rounded-full p-2 w-auto">
                <BookOpen className="text-sky-700 h-[16px] w-[16px]"></BookOpen>
              </div>
              <div className="text-sm text-slate-500">
                29 Chapters
              </div>
            </div>
          </div>
          <div className="text-slate-500 text-sm font-semibold pb-4 pl-4">Free</div>         
        </div>
        <div className="flex flex-col border border-slate-100 rounded-md h-full">
          <Image src="/course.png" alt="Image" height="200" width="400" className="rounded-md rounded-b-none" />
          <div className="space-y-2 flex flex-col h-full flex-1 p-4">
            <div className="font-semibold">Duolingo Clone</div>
            <div className="flex flex-row items-center space-x-2">
              <div className="bg-sky-100 rounded-full p-2 w-auto">
                <BookOpen className="text-sky-700 h-[16px] w-[16px]"></BookOpen>
              </div>
              <div className="text-sm text-slate-500">
                29 Chapters
              </div>
            </div>
          </div>
          <div className="text-slate-500 text-sm font-semibold pb-4 pl-4">Free</div>         
        </div>
        <div className="flex flex-col border border-slate-100 rounded-md h-full">
          <Image src="/course.png" alt="Image" height="200" width="400" className="rounded-md rounded-b-none" />
          <div className="space-y-2 flex flex-col h-full flex-1 p-4">
            <div className="font-semibold">Duolingo Clone</div>
            <div className="flex flex-row items-center space-x-2">
              <div className="bg-sky-100 rounded-full p-2 w-auto">
                <BookOpen className="text-sky-700 h-[16px] w-[16px]"></BookOpen>
              </div>
              <div className="text-sm text-slate-500">
                29 Chapters
              </div>
            </div>
          </div>
          <div className="text-slate-500 text-sm font-semibold pb-4 pl-4">Free</div>         
        </div>
        <div className="flex flex-col border border-slate-100 rounded-md h-full">
          <Image src="/course.png" alt="Image" height="200" width="400" className="rounded-md rounded-b-none" />
          <div className="space-y-2 flex flex-col h-full flex-1 p-4">
            <div className="font-semibold">Duolingo Clone</div>
            <div className="flex flex-row items-center space-x-2">
              <div className="bg-sky-100 rounded-full p-2 w-auto">
                <BookOpen className="text-sky-700 h-[16px] w-[16px]"></BookOpen>
              </div>
              <div className="text-sm text-slate-500">
                29 Chapters
              </div>
            </div>
          </div>
          <div className="text-slate-500 text-sm font-semibold pb-4 pl-4">Free</div>         
        </div>
        <div className="flex flex-col border border-slate-100 rounded-md h-full">
          <Image src="/course.png" alt="Image" height="200" width="400" className="rounded-md rounded-b-none" />
          <div className="space-y-2 flex flex-col h-full flex-1 p-4">
            <div className="font-semibold">Duolingo Clone</div>
            <div className="flex flex-row items-center space-x-2">
              <div className="bg-sky-100 rounded-full p-2 w-auto">
                <BookOpen className="text-sky-700 h-[16px] w-[16px]"></BookOpen>
              </div>
              <div className="text-sm text-slate-500">
                29 Chapters
              </div>
            </div>
          </div>
          <div className="text-slate-500 text-sm font-semibold pb-4 pl-4">Free</div>         
        </div>
      </div>
    </div>
  );
}