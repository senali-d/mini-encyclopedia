import { NextPage } from "next"

import withAuth from "../../../withAuth"

const Dashboard: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="min-h-[calc(100vh-78px)] pt-[72px] w-full">
        <div className="min-h-[calc(100vh-72px)] pt-[72px] w-full absolute bg-[#6d86a8] opacity-70">
          <h1 className="text-4xl md:text-5xl mb-5 leading-12 uppercase font-medium text-white px-2">
            Dashboard
          </h1>
        </div>
      </div>
    </div>
  )
}

export default withAuth(Dashboard)