import axios from "axios";
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signUpInput } from "smit18-comman-module-medium";
import { BACKENDURL } from "../config";



const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate()
    const [formDetails, setformDetails] = useState<signUpInput>({
        email: "",
        password: "",
        name: ""
    });
    const sendRequest = async () => {
        try {

            const response = await axios.post(`${BACKENDURL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`, formDetails)
            const jwt = response.data.token
            localStorage.setItem("token", jwt)
            navigate("/blogs")

        } catch (e) {
            throw e
        }
    }
    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <div>
                    <div className="px-10 pb-10">
                        <div className="text-3xl font-extrabold">
                            Create an account
                        </div>
                        <div className="text-slate-400 ">
                            {type == "signup" ? "Already have an account" : "Don't have an account"}
                            <Link className="pl-2 underline" to={type == "signup" ? "/signin" : "/signup"}>{type == "signup" ? "Login" : "Sign Up"}</Link>
                        </div>
                    </div>
                    <LabelInput label="Email" placeholder="smitSurani@gmail.com" onChange={(e) => {
                        setformDetails({
                            ...formDetails,
                            email: e.target.value
                        })
                    }} />
                    <LabelInput label="Password" placeholder="prachi@1212" onChange={(e) => {
                        setformDetails({
                            ...formDetails,
                            password: e.target.value
                        })
                    }} />
                    {type == "signup" &&
                        <LabelInput label="User Name" placeholder="Prachi Smit siya" onChange={(e) => {
                            setformDetails({
                                ...formDetails,
                                name: e.target.value
                            })
                        }} />
                    }
                    <button type="button" onClick={sendRequest} className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type == "signup" ? "Sign Up" : "Sign In"}</button>
                </div>

            </div>
        </div>
    )
}
interface LabedlInput {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
function LabelInput({ label, placeholder, onChange }: LabedlInput) {
    return <div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-black pt-2">{label}</label>
            <input placeholder={placeholder} onChange={onChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
    </div>
}

export default Auth
