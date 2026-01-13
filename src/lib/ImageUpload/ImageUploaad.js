import axios from "axios"

export const imageUpload = async image => {
  const formData = new FormData()
  formData.append('image', image)
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    formData
  )

  console.log(data,'THis is image url dat inside ahndle image upload function ')
  return data
}