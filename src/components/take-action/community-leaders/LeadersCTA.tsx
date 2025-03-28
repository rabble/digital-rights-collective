
import React from "react";
import { Button } from "@/components/ui/button";

const LeadersCTA = () => {
  return (
    <div className="text-center p-8 bg-digital-coral/10 rounded-lg">
      <h3 className="text-xl font-semibold text-digital-coral mb-4">
        Need personalized guidance?
      </h3>
      
      <p className="text-digital-gray-medium mb-6">
        Connect with our network of community leaders who have successfully navigated these transitions. 
        Sign up for our community leader workshops or join our dedicated discussion forum for ongoing support.
      </p>
      
      <Button className="bg-digital-coral hover:bg-digital-coral/90 text-white">
        Join Our Community Leaders Network
      </Button>
    </div>
  );
};

export default LeadersCTA;
