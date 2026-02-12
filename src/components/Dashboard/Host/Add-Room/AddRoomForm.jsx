/* eslint-disable @next/next/no-img-element */

"use client";

import { categories } from "@/components/Shared/HomePage/Categories/CategoriesData";
import { useAuth } from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { imageUpload } from "@/lib/ImageUpload/ImageUploaad";
import { roomFrontSchema } from "@/ZodSchema/room.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";

const AddRoomForm = ({ loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(roomFrontSchema),
  });
  const { userInfo } = useAuth();
  // axios secure

  const axiosSecure = useAxiosSecure();

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  //state for uploading multiple room images
  const [roomImages, setRoomImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [roomUploadText, setRoomUploadText] = useState("upload room images");
  // Handle date change from react-date-range calender
  const handleDates = (ranges) => {
    console.log(ranges);
    setDates(ranges.selection);
  };
  //image upload change
  // Handle Image button text
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  //for room uiage
  const handleRoomImagesChange = (files) => {
    const selectedFiles = Array.from(files);
    setRoomImages(selectedFiles);

    const previewUrls = selectedFiles.map((file) => {
     return URL.createObjectURL(file);
    });

    setPreviewImages(previewUrls);

    setRoomUploadText(`${selectedFiles.length} images selected`);
  };

  const handleRemoveRoomImage = (index) => {
    const updatedPreview = [...previewImages];
    updatedPreview.splice(index, 1);
    setPreviewImages(updatedPreview);

    const updatedRoomImages = [...roomImages];
    updatedRoomImages.splice(index, 1);
    setRoomImages(updatedRoomImages);

    // Button text update
    setRoomUploadText(
      updatedRoomImages.length > 0
        ? `${updatedRoomImages.length} images selected`
        : "Upload Room Images",
    );
  };

  const uploadRoomImages = async () => {
    const uploadedUrls = [];

    for (let file of roomImages) {
      const res = await imageUpload(file);
      const imageUrl = res?.data?.display_url;
      uploadedUrls.push(imageUrl);
    }

    return uploadedUrls;
  };
console.log(previewImages,'previewImages')
  //HANDLE FORM SUBMIT STARTS HERE
  const onSubmit = async (data, e) => {
    console.log("on submit is triggred over here");
    const image = e.target.image.files[0];
    const image_uri = await imageUpload(image);
    const roomImage = image_uri?.data?.display_url;
    const to = dates.endDate;
    const from = dates.startDate;

    // 🔹 Multiple Room Images Upload
    const roomImageUrls = await uploadRoomImages();

    console.log(roomImageUrls, "thisi sirom djgsigsdgjsdjgljsdgljdsg");

    const hostInfo = {
      name: userInfo?.name,
      email: userInfo?.email,
      photoUrl: userInfo?.photoUrl,
    };
    const roomData = {
      ...data,
      roomImage,
      to,
      from,
      hostInfo,
    };

    console.log(
      hostInfo,
      "thi si fhost final room data ready to send",
      roomData,
    );

    axiosSecure
      .post("/api/rooms", roomData)
      .then((res) => {
        console.log(res, "this is res of adding room inside add rooom form");
        if (res.data?.success === true) {
          alert("Room added successfully check the db");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(errors, "this is form submit error over here ");
  return (
    <div className="max-w-5xl mx-auto py-6 mt-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                {...register("location")}
                id="location"
                type="text"
                placeholder="Location"
              />
              {/* error message */}
              {errors && (
                <p className="text-red-600">{errors?.location?.message}</p>
              )}
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                {...register("category")}
              >
                {categories.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            {/* room images is over here */}

            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      onChange={(e) => handleRoomImagesChange(e.target.files)}
                      className="hidden"
                      type="file"
                      accept="image/*"
                      multiple
                    />
                    <div className="bg-blue-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-600">
                      {roomUploadText}
                    </div>
                  </label>
                </div>
              </div>

              {/* Room Images Preview */}
              {previewImages.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {previewImages.map((img, index) => (
                    <div key={index} className="relative">
                      <img
                        src={img}
                        alt={`preview-${index}`}
                        className="w-24 h-24 object-cover rounded-md border"
                      />
                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => handleRemoveRoomImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm hover:bg-red-600"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* room images ends over here */}
            <div className="space-y-1">
              <label htmlFor="location" className="block text-gray-600">
                Select Availability Range
              </label>
              <DateRange
                rangeColors={["#F43F5E"]}
                ranges={[dates]}
                onChange={handleDates}
                minDate={new Date()}
              />
              <div className="flex items-center gap-6">
                {/* error message */}
                {errors && (
                  <p className="text-red-600">{errors?.from?.message}</p>
                )}
                {/* error message */}
                {errors && (
                  <p className="text-orange-600">{errors?.to?.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                {...register("title")}
                id="title"
                type="text"
                placeholder="Title"
              />

              {/* error message */}
              {errors && (
                <p className="text-red-600">{errors?.title?.message}</p>
              )}
            </div>

            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      onChange={(e) => handleImageChange(e.target.files[0])}
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                      {uploadButtonText}
                    </div>

                    {/* error message */}
                    {errors && (
                      <p className="text-red-600">
                        {errors?.roomImage?.message}
                      </p>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  {...register("price", { valueAsNumber: true })}
                  id="price"
                  type="number"
                  placeholder="Price"
                />
                {/* error message */}
                {errors && (
                  <p className="text-red-600">{errors?.price?.message}</p>
                )}
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="guest" className="block text-gray-600">
                  Total guest
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  {...register("total_guest", { valueAsNumber: true })}
                  id="guest"
                  type="number"
                  placeholder="Total guest"
                />
                {/* error message */}
                {errors && (
                  <p className="text-red-600">{errors?.total_guest?.message}</p>
                )}
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Bedrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  {...register("bedrooms", { valueAsNumber: true })}
                  id="bedrooms"
                  type="number"
                  placeholder="Bedrooms"
                />
                {/* error message */}
                {errors && (
                  <p className="text-red-600">{errors?.bedrooms?.message}</p>
                )}
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="bathrooms" className="block text-gray-600">
                  Bathrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  {...register("bathrooms", { valueAsNumber: true })}
                  id="bathrooms"
                  type="number"
                  placeholder="Bathrooms"
                />
                {/* error message */}
                {errors && (
                  <p className="text-red-600">{errors?.bathrooms?.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                {...register("description")}
              ></textarea>
              {/* error message */}
              {errors && (
                <p className="text-red-600">{errors?.description?.message}</p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
          {loading ? (
            <TbFidgetSpinner className="m-auto animate-spin" size={24} />
          ) : (
            "Save & Continue"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddRoomForm;
