"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
   const { user } = useUser();

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
         <Button>
            <PlusCircle className="h-4 w-4 mr-2" /> Create a note
         </Button>
      </div>
   );
};

export default DocumentsPage;
