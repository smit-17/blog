import { useState } from "react"
import Appbar from "../components/Appbar"
import axios from "axios";
import { BACKENDURL } from "../config";

export const Publish = () => {
    const [formDetails, setformDetails] = useState<{
        title: string,
        content: string
    }>({
        title: "",
        content: ""
    });
    return (
        <div>
            <div>
                <Appbar />
            </div>
            <div className="max-w-4xl mx-auto">
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-black pt-2">{"Title"}</label>
                    <input placeholder={"Enter title"} onChange={(e) => {
                        setformDetails({
                            ...formDetails,
                            title: e.target.value
                        })
                    }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-black pt-2">{"Content"}</label>
                    <textarea placeholder={"Enter title"} onChange={(e) => {
                        setformDetails({
                            ...formDetails,
                            content: e.target.value
                        })
                    }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required ></textarea>
                </div>
                <button type="button" onClick={() => {
                    axios.post(`${BACKENDURL}/api/v1/blog/createBlog`, formDetails, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    })

                }} className="text-white mt-5 bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-gray-700 dark:border-green-700">Publish</button>
            </div>
        </div>
    )
}
