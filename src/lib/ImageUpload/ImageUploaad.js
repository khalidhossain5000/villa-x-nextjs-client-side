import axios from "axios"

export const imageUpload = async image => {
  const formData = new FormData()
  formData.append('image', image)
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    formData
  )

  return data
}


export const uploadRoomImages = async () => {
  const uploadedUrls = [];

  for (let image of roomImages) {
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      (() => { const formData = new FormData(); formData.append("image", image); return formData; })()
    );

    uploadedUrls.push(data.data.url);
  }

  return uploadedUrls;
};
