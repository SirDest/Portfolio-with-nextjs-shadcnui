"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";

const DownloadResumeButton: React.FC = () => {
  const handleDownload = () => {
    fetch("/AkinroDestinedResume.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "AkinroDestinedResume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Download error:", error));
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
