"use client";

import Image from "next/image";
import { ImageIcon, X } from "lucide-react";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCoverImage } from "@/hooks/use-cover-image";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useEdgeStore } from "@/lib/edgestore";

interface CoverProps {
   url?: string;
   preview?: boolean;
}

const Cover = ({ url, preview }: CoverProps) => {
   const params = useParams();

   const coverImage = useCoverImage();

   const removeCoverImage = useMutation(api.documents.removeCoverImage);

   const { edgestore } = useEdgeStore();

   const onRemove = async () => {
      if (url) {
         await edgestore.publicFiles.delete({
            url,
         });
      }

      removeCoverImage({
         id: params.documentId as Id<"documents">,
      });
   };

   return (
      <div
         className={cn(
            "w-full h-[35vh] relative group",
            !url && "h-[12vh]",
            url && "bg-muted"
         )}
      >
         {!!url && (
            <Image src={url} alt="Cover" fill className="object-cover" />
         )}

         {url && !preview && (
            <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-2">
               <Button
                  onClick={() => coverImage.onReplace(url)}
                  className="text-muted-foreground text-sm"
                  variant="outline"
                  size="sm"
               >
                  <ImageIcon className="h-4 w-4 mr-2" /> Change cover
               </Button>
               <Button
                  onClick={onRemove}
                  className="text-muted-foreground text-sm"
                  variant="outline"
                  size="sm"
               >
                  <X className="h-4 w-4 mr-2" /> Remove
               </Button>
            </div>
         )}
      </div>
   );
};

Cover.Skeleton = function CoverSkeleton() {
   return <Skeleton className="w-full h-[12vh]" />;
};

export default Cover;
