import { useNavigate } from "react-router-dom"
import { Avtar } from "./BlogCard"

const Appbar = () => {
    const navigate = useNavigate()
    return (
        <div className="border-b flex justify-between items-center px-10 py-4">
            <div>
                Medium
            </div>
            <div className="flex items-center justify-center">
                <div>
                    <button type="button" onClick={() => {
                        navigate("/publish")
                    }} className="text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-gray-700 dark:border-green-700">New</button>
                </div>
                <div className="flex items-center">
                    <Avtar authorName="Smit" size={8} />
                </div>
            </div>
        </div>
    )
}

export default Appbar
