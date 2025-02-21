import Auth from "../components/Auth"
import Quats from "../components/Quats"

const Signin = () => {
  return (
    <div className="flex">
      <div className="w-full">
        <Auth type="signin" />
      </div>
      <div className="w-full">

        <Quats />
      </div>
    </div>
  )
}

export default Signin
