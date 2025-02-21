import { useNavigate } from "react-router-dom"
import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"

const Blogs = () => {
    const { blogs, loading } = useBlogs()
    const navigate = useNavigate()
    console.log(blogs, "blogsblogsblogsblogsblogsblogsblogsblogs"
    );

    if (loading) {
        return <div>Loading ... </div>
    }
    return (
        <div>
            <div className="pb-4">
                <Appbar />
            </div>
            <div className="max-w-5xl mx-auto">
                {blogs?.map((blog) => {
                    return <>
                        <div className=" cursor-pointer" onClick={() => {
                            navigate(`/blog/${blog.id}`)
                        }}>
                            <BlogCard authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={new Date().toDateString()} />
                        </div>
                    </>
                })}

            </div>
        </div>
    )
}

export default Blogs
