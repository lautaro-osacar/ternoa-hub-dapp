import React from "react";

export interface IImagePreview {
  isLoading?: boolean;
  src?: string;
  alt?: string;
  className?: string;
  loader: React.ReactNode | React.ReactNode[];
}
