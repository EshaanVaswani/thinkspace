"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

const Heading = () => {
   const { isAuthenticated, isLoading } = useConvexAuth();

   return (
      <div className="max-w-3xl space-y-4">
         <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Your Ideas, Documents & Plans Unified. Welcome to{" "}
            <span className="underline">ThinkSpace</span>
         </h1>
         <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            Thinkspace is the all-in-one workspace <br /> to help you capture
            ideas, manage projects, and <br /> collaborate seamlessly.
         </h3>
         {isLoading && (
            <div className="w-full flex items-center justify-center">
               <Spinner size="lg" />
            </div>
         )}
         {isAuthenticated && !isLoading && (
            <Button asChild>
               <Link href="/documents">
                  Enter ThinkSpace <ArrowRight className="h-4 w-4 ml-2" />
               </Link>
            </Button>
         )}
         {!isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
               <Button>
                  Get ThinkSpace Free <ArrowRight className="h-4 w-4 ml-2" />
               </Button>
            </SignInButton>
         )}
      </div>
   );
};

export default Heading;
