/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Play, SkipBack, SkipForward } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import Link from "next/link";
import HomeButton from "@/components/Shared/Button/HomeButton";

const CollectionCard = ({ room }) => {
  console.log(room, "this is room");
  return (
    <div className="bg-linear-to-tr from-[#f98d00] to-[#f9a300] border dark:from-[#0a121f] dark:to-[#0a0e16db] rounded-2xl shadow-sm p-6 relative">
    

{/* thumbnail image */}












    {/* animated border beam */}
     <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          borderWidth={2}
          className="from-transparent via-blue-500 to-transparent"
        />
    </div>
  );
};

export default CollectionCard;
