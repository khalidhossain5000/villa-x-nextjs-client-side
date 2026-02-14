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

const AddRoomForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
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
  const [uploading,setUploading]=useState(false)
  // Handle date change from react-date-range calender
  const handleDates = (ranges) => {
 
    setDates(ranges.selection);
  };
  
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

  //HANDLE FORM SUBMIT STARTS HERE
  const onSubmit = async (data, e) => {
    console.log(e.target.image.files[0],"on submit is triggred over here");
    setUploading(true)
    const image = e.target.image.files[0];
    const image_uri = await imageUpload(image);
    const roomImage = image_uri?.data?.display_url;
    const to = dates.endDate;
    const from = dates.startDate;

    // Multiple Room Images Upload
    const roomImageUrls = await uploadRoomImages();

   console.log(roomImage,'roomImage',roomImageUrls,'roomImageUrls')

    const hostInfo = {
      name: userInfo?.name,
      email: userInfo?.email,
      photoUrl: userInfo?.photoUrl,
    };
    const roomData = {
      ...data,
      thumbnailImage:roomImage,
      roomImages:roomImageUrls,
      to,
      from,
      hostInfo,
    };

   console.log(roomData,'this is roomdata')
    axiosSecure
      .post("/api/rooms", roomData)
      .then((res) => {
        console.log(res, "this is res of adding room inside add rooom form");
        if (res.data?.success === true) {
          alert("Room added successfully check the db");
          setUploading(false)
          reset()
          setRoomUploadText('select Room Images')
          setUploadButtonText("select Thumbnail")
          setRoomImages([])
          setPreviewImages([])
        }
      })
      .catch((error) => {
        console.log(error,'eeeroere form upload here');
        setUploading(false)
      });
  };

  return (
    <div className="max-w-5xl mx-auto py-6 mt-12 px-3 xl:px-0">
    <form onSubmit={handleSubmit(onSubmit)}>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Left Column */}
      <div className="space-y-6">
        {/* Location */}
        <div className="space-y-1 text-sm">
          <label htmlFor="location" className="block text-gray-600 dark:text-slate-100">
            Location
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 dark:text-slate-100 border border-primary focus:outline-primary rounded-md"
            {...register("location")}
            id="location"
            type="text"
            placeholder="Location"
          />
          {errors?.location && (
            <p className="text-red-600">{errors.location.message}</p>
          )}
        </div>

        {/* Category */}
        <div className="space-y-1 text-sm border dark:border-primary p-2 rounded-md">
          <label htmlFor="category" className="block text-gray-600 dark:text-slate-100">
            Category
          </label>
          <select
            className="w-full px-4 py-3 border border-primary dark:border-green-600 focus:outline-primary rounded-md"
            {...register("category")}
          >
            {categories.map((category) => (
              <option value={category.label} key={category.label}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* DateRange */}
        <div className="space-y-1 max-w-sm overflow-x-auto lg:max-w-full ">
          <label htmlFor="dates" className="block text-gray-600 dark:text-slate-100">
            Select Availability Range
          </label>
          <DateRange
            rangeColors={["#F43F5E"]}
            ranges={[dates]}
            onChange={handleDates}
            minDate={new Date()}
          />
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            {errors?.from && <p className="text-red-600">{errors.from.message}</p>}
            {errors?.to && <p className="text-orange-600">{errors.to.message}</p>}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {/* Title */}
        <div className="space-y-1 text-sm">
          <label htmlFor="title" className="block text-gray-600 dark:text-slate-100">
            Title
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 dark:text-slate-100 border border-primary focus:outline-primary rounded-md"
            {...register("title")}
            id="title"
            type="text"
            placeholder="Title"
          />
          {errors?.title && <p className="text-red-600">{errors.title.message}</p>}
        </div>

        {/* Single Image Upload */}
        <div className="p-4 bg-white dark:bg-background w-full rounded-lg">
          <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 dark:border-primary rounded-lg">
            <div className="flex flex-col w-max mx-auto text-center">
              <label>
                <input
                  onChange={(e) => handleImageChange(e.target.files[0])}
                  className="hidden"
                  type="file"
                  accept="image/*"
                  name='image'
                />
                <div className="bg-primary dark:bg-primary text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                  {uploadButtonText}
                </div>
              </label>
              {errors?.roomImage && <p className="text-red-600">{errors.roomImage.message}</p>}
            </div>
          </div>
        </div>

        {/* Price & Guests */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="space-y-1 text-sm w-full">
            <label htmlFor="price" className="block text-gray-600 dark:text-slate-100">Price</label>
            <input
              className="w-full px-4 py-3 text-gray-800 dark:text-slate-100 border border-primary focus:outline-primary rounded-md"
              {...register("price", { valueAsNumber: true })}
              id="price"
              type="number"
              placeholder="Price"
            />
            {errors?.price && <p className="text-red-600">{errors.price.message}</p>}
          </div>

          <div className="space-y-1 text-sm w-full">
            <label htmlFor="guest" className="block text-gray-600 dark:text-slate-100">Total guest</label>
            <input
              className="w-full px-4 py-3 text-gray-800 dark:text-slate-100 border border-primary focus:outline-primary rounded-md"
              {...register("total_guest", { valueAsNumber: true })}
              id="guest"
              type="number"
              placeholder="Total guest"
            />
            {errors?.total_guest && <p className="text-red-600">{errors.total_guest.message}</p>}
          </div>
        </div>

        {/* Bedrooms & Bathrooms */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="space-y-1 text-sm w-full">
            <label htmlFor="bedrooms" className="block text-gray-600 dark:text-slate-100">Bedrooms</label>
            <input
              className="w-full px-4 py-3 text-gray-800 dark:text-slate-100 border border-primary focus:outline-primary rounded-md"
              {...register("bedrooms", { valueAsNumber: true })}
              id="bedrooms"
              type="number"
              placeholder="Bedrooms"
            />
            {errors?.bedrooms && <p className="text-red-600">{errors.bedrooms.message}</p>}
          </div>

          <div className="space-y-1 text-sm w-full">
            <label htmlFor="bathrooms" className="block text-gray-600 dark:text-slate-100">Bathrooms</label>
            <input
              className="w-full px-4 py-3 text-gray-800 dark:text-slate-100 border border-primary focus:outline-primary rounded-md"
              {...register("bathrooms", { valueAsNumber: true })}
              id="bathrooms"
              type="number"
              placeholder="Bathrooms"
            />
            {errors?.bathrooms && <p className="text-red-600">{errors.bathrooms.message}</p>}
          </div>
        </div>

        {/* Multiple Room Images */}
        <div className="p-4 bg-white dark:bg-background w-full rounded-lg">
          <div className="file_upload px-5 py-3 relative border-4 border-dotted border-primary rounded-lg">
            <div className="flex flex-col w-max mx-auto text-center">
              <label>
                <input
                  onChange={(e) => handleRoomImagesChange(e.target.files)}
                  className="hidden"
                  type="file"
                  accept="image/*"
                  multiple
                />
                <div className="bg-accent dark:bg-primary text-gray-800 dark:text-slate-100 border border-primary rounded font-semibold cursor-pointer p-1 px-3 hover:bg-accent-hover">
                  {roomUploadText}
                </div>
              </label>
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
                    <button
                      type="button"
                      onClick={() => handleRemoveRoomImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white dark:text-primary w-6 h-6 rounded-full flex items-center justify-center text-sm hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Description Full Width */}
      <div className="space-y-1 text-sm lg:col-span-2">
        <label htmlFor="description" className="block text-gray-600 dark:text-slate-100">Description</label>
        <textarea
          id="description"
          className="block rounded-md focus:outline-primary w-full h-32 px-4 py-3 text-gray-800 dark:text-slate-100 border border-primary"
          {...register("description")}
        ></textarea>
        {errors?.description && <p className="text-red-600">{errors.description.message}</p>}
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="cursor-pointer w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-primary"
    >
      {uploading ? <TbFidgetSpinner className="m-auto animate-spin" size={24} /> : "Add Room"}
    </button>
  </div>
</form>

    </div>
  );
};

export default AddRoomForm;
