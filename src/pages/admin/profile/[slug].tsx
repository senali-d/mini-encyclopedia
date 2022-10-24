import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { NextPage } from "next";
import { useUserData } from "@nhost/react";
import { useMutation } from "@apollo/client";

import nhost from '../../../nhost'
import withAuth from '../../../../withAuth'
import { CREATE_PROFILE } from '../../../graphql/mutation'
import { FactsProp, ProfileProps } from '../../../types/types'
import Header from '../../../components/common/header'
import Input from '../../../components/common/input'
import Textarea from '../../../components/common/textarea'
import AdminLayout from '../../../components/layout/admin-layout'
import Spinner from '../../../components/common/spinner'
import { getImage } from '../../../util/image-util'

const initialStateProfile = {
  title: "",
  description: "",
  image: "",
  facts: {
    data: [
      {
        fact: "",
      },
    ],
  },
}

const initialStateFact = {
  fact: "",
}

const AddProfileForm = () => {
  const user = useUserData()

  const [data, setData] = useState<ProfileProps>(initialStateProfile)
  const [fact, setFact] = useState<FactsProp>(initialStateFact)

  const [createProfile, { data: profileData, loading, error }] =
    useMutation(CREATE_PROFILE)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setData((data: ProfileProps) => {
      return { ...data, [e.target.name]: e.target.value }
    })
  }

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const { error, fileMetadata } = await nhost.storage.upload({ file })
      setData((data: ProfileProps) => {
        return { ...data, [e.target.name]: fileMetadata?.id }
      })
    }
  }

  const handleClick = () => {
    if (!user) return
    setData(initialStateProfile)
    return createProfile({
      variables: {
        object: data,
      },
    })
  }

  const handleFactChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFact({ fact: e.target.value })
  }

  const attachFact = () => {
    const clone = [...data.facts.data][0].fact
    if (clone === "") {
      let factsClone = [fact]
      setData((data: ProfileProps) => {
        return { ...data, ["facts"]: { ["data"]: factsClone } }
      })
    } else {
      let factsClone = [...data.facts.data, fact]
      setData((data: ProfileProps) => {
        return { ...data, ["facts"]: { ["data"]: factsClone } }
      })
    }
    setFact(initialStateFact)
  }

  return (
    <div className="w-full md:w-1/2">
      <Input
        type="file"
        name="image"
        className="profile-input mx-auto mr-0 relative top-[25px] mt-[-20px] h-[30px] sm:h-[40px] w-[30px] sm:w-[40px] rounded-full flex bg-[#45576f] hover:cursor-pointer z-10"
        accept="image/*"
        onChange={handleUpload}
      />
      <Image
        width="600px"
        height="230px"
        src={
          data.image === ""
            ? "/img/placeholder-image.png"
            : getImage(data.image)
        }
        className="w-full md:w-[600px] h-auto rounded-3xl mb-5"
      />
      <Input
        type="text"
        name="title"
        required
        onChange={handleChange}
        placeholder="@Title"
        value={data.title}
      />
      <Textarea
        name="description"
        rows={4}
        placeholder="@your description"
        onChange={handleChange}
        value={data.description}
      />
      <div className="flex flex-col">
        <p className="text-white font-bold text-xl pt-5">Facts:</p>
        <ul className="mb-5">
          {data.facts.data.map((f, index) =>
            f.fact !== "" ? (
              <li
                key={index}
                className="text-white font-medium list-inside list-disc"
              >
                {f.fact}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
        <Textarea
          name="fact"
          rows={3}
          placeholder="@your fact"
          onChange={handleFactChange}
          value={fact.fact}
        />
        <button
          disabled={loading}
          className="w-[30%] inline-flex justify-center items-center rounded-md py-3 px-5 text-white bg-[#f99839] hover:bg-[#ee851c] focus:border-[#f99839] focus:outline-transparent focus:outline-offset-2 focus:shadow-[1px_1px_1px_#f99839] disabled:opacity-50 disabled:cursor-not-allowed my-2"
          onClick={attachFact}
        >
          Add Fact
        </button>
      </div>
      <button
        disabled={loading}
        className="w-full inline-flex justify-center items-center rounded-md py-3 px-5 text-white bg-[#f99839] hover:bg-[#ee851c] focus:border-[#f99839] focus:outline-transparent focus:outline-offset-2 focus:shadow-[1px_1px_1px_#f99839] disabled:opacity-50 disabled:cursor-not-allowed my-2"
        onClick={handleClick}
      >
        {loading ? <Spinner loading={loading} type="clip" /> : "Create Profile"}
      </button>
    </div>
  )
}

const Profile: NextPage = () => {
  return (
    <AdminLayout>
      <div className="flex justify-center flex-col w-full pt-4 max-w-[1200px] mx-auto">
        <Header title="Sea Horse" />
        <div className="flex justify-center pb-5">
          <AddProfileForm />
        </div>
      </div>
    </AdminLayout>
  )
}

export default withAuth(Profile)
