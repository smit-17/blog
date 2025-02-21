
interface BlogCardPost {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

const BlogCard = ({ authorName, title, content, publishedDate }: BlogCardPost) => {
    return (
        <div className="border-slate-200 border-b">
            <div className="flex items-center"><Avtar authorName={authorName} />
                <div className="font-extralight px-2 text-sm">
                    {authorName}
                </div>
                <div className="pr-2 flex text-[4px]">&#9679;</div>
                <div className="font-thin text-slate-500 text-sm">
                    {publishedDate}
                </div>
            </div>
            <div className="font-semibold text-xl">{title}</div>
            <div className="text-md font-thin">{content.slice(1, 200) + "..."}</div>
            <div className="w-full text-slate-400 font-thin pt-4">{Math.ceil(content.length / 100) + "Minute(s) Read"}</div>
        </div>
    )
}

export function Avtar({ authorName, size = 5 }: { authorName: string, size?: number }) {
    return <div>
        <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className="font-medium text-sm text-gray-600 dark:text-gray-300">{authorName.charAt(0)}</span>
        </div>

    </div>
}
export default BlogCard
