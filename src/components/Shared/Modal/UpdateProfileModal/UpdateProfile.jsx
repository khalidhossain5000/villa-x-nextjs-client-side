
'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle Image Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Remove Image
  const handleRemoveImage = () => {
    setImage(null);
    setPreview(null);
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, image });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Update Profile</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-white dark:bg-slate-900">
        <DialogHeader>
          <DialogTitle className="text-gray-800 dark:text-white">
            Update Profile
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          
          {/* Name Field */}
          <div className="space-y-2">
            <Label className="text-gray-700 dark:text-gray-300">
              Name
            </Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="bg-gray-50 dark:bg-slate-800 dark:text-white"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label className="text-gray-700 dark:text-gray-300">
              Profile Image
            </Label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="bg-gray-50 dark:bg-slate-800 dark:text-white"
            />
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="relative w-32 h-32">
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 rounded-full object-cover border-2 border-pink-500"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs"
              >
                ✕
              </button>
            </div>
          )}

          {/* Footer Buttons */}
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-pink-500 hover:bg-pink-600">
              Save Changes
            </Button>
          </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfile;
