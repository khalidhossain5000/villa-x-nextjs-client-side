/* eslint-disable @next/next/no-img-element */
"use client";

import { categories } from "@/components/Shared/HomePage/Categories/CategoriesData";
import { useAuth } from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { imageUpload } from "@/lib/ImageUpload/ImageUploaad";
import { roomFrontSchema } from "@/ZodSchema/room.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";

const UpdateForm = ({ room ,refetch}) => {
  const { userInfo } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(roomFrontSchema),
  });

  const [dates, setDates] = useState({
    startDate: room?.from ? new Date(room.from) : new Date(),
    endDate: room?.to ? new Date(room.to) : new Date(),
    key: "selection",
  });

  const [uploadButtonText, setUploadButtonText] = useState(
    room?.thumbnailImage ? "Thumbnail Selected" : "Upload Image"
  );
  const [roomImages, setRoomImages] = useState([]);
  const [previewImages, setPreviewImages] = useState(room?.roomImages || []);
  const [roomUploadText, setRoomUploadText] = useState(
    room?.roomImages?.length ? `${room.roomImages.length} images selected` : "Upload Room Images"
  );
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (room) {
      setValue("location", room.location);
      setValue("category", room.category);
      setValue("title", room.title);
      setValue("price", room.price);
      setValue("total_guest", room.total_guest);
      setValue("bedrooms", room.bedrooms);
      setValue("bathrooms", room.bathrooms);
      setValue("description", room.description);
    }
  }, [room, setValue]);

 
  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };


  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  
  const handleRoomImagesChange = (files) => {
    const selectedFiles = Array.from(files);
    setRoomImages(selectedFiles);

    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
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

    setRoomUploadText(
      updatedRoomImages.length > 0 ? `${updatedRoomImages.length} images selected` : "Upload Room Images"
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

  // FORM SUBMIT
  const onSubmit = async (data, e) => {
    setUploading(true);

    // Thumbnail Upload
    let roomImage = room.thumbnailImage;
    if (e.target.image.files[0]) {
      const image_uri = await imageUpload(e.target.image.files[0]);
      roomImage = image_uri?.data?.display_url;
    }

    // Multiple Room Images Upload
    const roomImageUrls = roomImages.length ? await uploadRoomImages() : room.roomImages;

    const hostInfo = {
      name: userInfo?.name,
      email: userInfo?.email,
      photoUrl: userInfo?.photoUrl,
    };

    const roomData = {
      ...data,
      thumbnailImage: roomImage,
      roomImages: roomImageUrls,
      to: dates.endDate,
      from: dates.startDate,
      hostInfo,
    };
console.log(roomData,'this is updated room data to be send to backend')
    axiosSecure
      .put(`/api/update-room/${room._id}`, roomData)
      .then((res) => {
        console.log(res,'this is res')
        if (res.data?.success) {
          toast.success("Room Updated Successfully!", {
            className: "w-[400px] h-[100px] text-xl font-bold",
            style: { border: "1px solid #08086c", color: "black", backgroundImage: "linear-gradient(to bottom right, #00FF87,#60EFFF )" },
          });
          setUploading(false);
          refetch()
        }
      })
      .catch((err) => {
        console.log(err)
        setUploading(false);
      });
  };

  return (
    <div className="max-w-5xl mx-auto py-6 mt-12 px-3 xl:px-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Location */}
          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block text-gray-600 dark:text-slate-100">Location</label>
            <input {...register("location")} type="text" placeholder="Location" className="w-full px-4 py-3 border border-primary rounded-md dark:text-white" />
            {errors?.location && <p className="text-red-600">{errors.location.message}</p>}
          </div>

          {/* Category */}
          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-gray-600 dark:text-slate-100">Category</label>
            <select {...register("category")} className="w-full px-4 py-3 border border-primary rounded-md">
              {categories.map((c) => (
                <option key={c.label} value={c.label}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Dates */}
          <div className="lg:col-span-2">
            <label className="block text-gray-600 dark:text-slate-100">Select Availability Range</label>
            <DateRange ranges={[dates]} onChange={handleDates} minDate={new Date()} rangeColors={["#F43F5E"]} />
          </div>

          {/* Title */}
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-600 dark:text-slate-100">Title</label>
            <input {...register("title")} type="text" placeholder="Title" className="w-full px-4 py-3 border border-primary rounded-md dark:text-white" />
            {errors?.title && <p className="text-red-600">{errors.title.message}</p>}
          </div>

          {/* Thumbnail */}
          <div className='border border-yellow-400 rounded-lg'>
            <label className="block text-gray-600 dark:text-slate-100">Thumbnail Image</label>
            <input type="file" accept="image/*" name="image" onChange={(e) => handleImageChange(e.target.files[0])} className="block dark:text-white" />
            {uploadButtonText && <p>{uploadButtonText}</p>}
          </div>

          {/* Price */}
          <div className="space-y-1 text-sm">
            <label htmlFor="price" className="block text-gray-600 dark:text-slate-100">Price</label>
            <input {...register("price", { valueAsNumber: true })} type="number" className="w-full px-4 py-3 border border-primary rounded-md dark:text-white" />
            {errors?.price && <p className="text-red-600">{errors.price.message}</p>}
          </div>

          {/* Guests */}
          <div className="space-y-1 text-sm">
            <label htmlFor="total_guest" className="block text-gray-600 dark:text-slate-100">Total Guests</label>
            <input {...register("total_guest", { valueAsNumber: true })} type="number" className="w-full px-4 py-3 border border-primary rounded-md dark:text-white" />
            {errors?.total_guest && <p className="text-red-600">{errors.total_guest.message}</p>}
          </div>

          {/* Bedrooms */}
          <div className="space-y-1 text-sm">
            <label htmlFor="bedrooms" className="block text-gray-600 dark:text-slate-100">Bedrooms</label>
            <input {...register("bedrooms", { valueAsNumber: true })} type="number" className="w-full px-4 py-3 border border-primary rounded-md dark:text-white" />
            {errors?.bedrooms && <p className="text-red-600">{errors.bedrooms.message}</p>}
          </div>

          {/* Bathrooms */}
          <div className="space-y-1 text-sm">
            <label htmlFor="bathrooms" className="block text-gray-600 dark:text-slate-100">Bathrooms</label>
            <input {...register("bathrooms", { valueAsNumber: true })} type="number" className="w-full px-4 py-3 border border-primary rounded-md dark:text-white" />
            {errors?.bathrooms && <p className="text-red-600">{errors.bathrooms.message}</p>}
          </div>

          {/* Room Images */}
          <div className="lg:col-span-2 p-4 border border-primary rounded-md">
            <label className="block text-gray-600 dark:text-slate-100">Room Images</label>
            <input type="file" accept="image/*" multiple onChange={(e) => handleRoomImagesChange(e.target.files)} />
            <div className="flex flex-wrap gap-3 mt-2">
              {previewImages.map((img, index) => (
                <div key={index} className="relative">
                  <img src={img} alt={`preview-${index}`} className="w-24 h-24 object-cover rounded-md border" />
                  <button type="button" onClick={() => handleRemoveRoomImage(index)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6">✕</button>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-2 space-y-1">
            <label htmlFor="description" className="block text-gray-600  dark:text-slate-100">Description</label>
            <textarea {...register("description")} className="w-full h-32 px-4 py-3 border border-primary rounded-md dark:text-white" />
            {errors?.description && <p className="text-red-600">{errors.description.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="lg:col-span-2 bg-black text-slate-100 font-bold dark:bg-cyan-400 dark:text-black p-3 rounded-md mt-4">
            {uploading ? <TbFidgetSpinner className="animate-spin m-auto" size={24} /> : "Update Room"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;