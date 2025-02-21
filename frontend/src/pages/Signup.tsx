import Auth from "../components/Auth"
import Quats from "../components/Quats"

const Signup = () => {
    return (
        <div className="flex">
            <div className="w-full">
                <Auth type="signup"/>
            </div>
            <div className="w-full">

                <Quats />
            </div>
        </div>
    )
}

export default Signup
