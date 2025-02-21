import { Blog } from "../hooks"
import Appbar from "./Appbar"
import { Avtar } from "./BlogCard"


const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <>
            <div>
                <Appbar />
            </div>
            <div className="grid grid-cols-12 max-w-6xl mx-auto my-10">
                <div className="col-span-8 ">
                    <div className="text-4xl font-bold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 font-bold py-4">
                        {new Date().toDateString()}
                    </div>
                    <div className="text-xl">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 ">
                    <div>Author</div>
                    <div className="flex items-center gap-5">
                        <div className="">
                            <Avtar authorName={blog.author.name} />
                        </div>
                        <div>
                            <div className="text-xl font-semibold">
                                {blog.author.name}
                            </div>
                            <div className="pt-2 text-slate-500">{"The answer is nothing insidious, yet profound when you think about it: because one hour feels “optional”. It’s not "}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullBlog
