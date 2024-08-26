"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";

const DownloadResumeButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AkinroDestinedResume.pdf";
    link.download = "AkinroDestinedResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      variant='outline'
      size='lg'
      className='uppercase flex items-center gap-2'
    >
      Download CV <FiDownload className='text-xl' />
    </Button>
  );
};

export default DownloadResumeButton;
