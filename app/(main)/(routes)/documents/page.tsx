"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
   const router = useRouter();

   const { user } = useUser();

   const create = useMutation(api.documents.create);

   const onCreate = () => {
      const promise = create({ title: "Untitled" }).then((documentId) =>
         router.push(`/documents/${documentId}`)
      );

      toast.promise(promise, {
         loading: "Creating a new note...",
         success: "New note created!",
         error: "Failed to create new note",
      });
   };

   return (
      <div className="h-full flex flex-col items-center justify-center space-y-4">
         <Image
            src="/studying.png"
            alt="studying"
            height={300}
            width={300}
            className="dark:hidden"
         />
         <Image
            src="/studying-dark.png"
            alt="studying"
            height={400}
            width={400}
            className="hidden dark:block"
         />
         <h2 className="text-lg font-medium">
            Welcome to {user?.firstName}&apos;s ThinkSpace
         </h2>
         <Button onClick={onCreate}>
            <PlusCircle className="h-4 w-4 mr-2" /> Create a note
         </Button>
      </div>
   );
};

export default DocumentsPage;
