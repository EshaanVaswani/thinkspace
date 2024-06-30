"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Heading = () => {
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
         <Button>
            Enter ThinkSpace <ArrowRight className="h-4 w-4 ml-2" />
         </Button>
      </div>
   );
};

export default Heading;
