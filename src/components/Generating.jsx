import { loading } from "../assets/assets"

const Generating = ({ className }) => {
  return (
    <div
      className={`flex item-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4 mt-4" src={loading} alt="Loading" />
      <span className="mt-3.5"> AI is generating</span>
    </div>
  )
}

export default Generating
