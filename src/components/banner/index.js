import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from "@mui/material"; // Import useTheme and useMediaQuery
import React, { useState, useEffect } from "react";
import { Colors } from "../../styles/theme";

// Define the array of banner images
export const bannerImages = [
  "/images/banner/banner2.png",
  "/images/banner/banner3.jpg",
  "/images/banner/banner1.png",
  "/images/banner/banner4.jpg",
  "/images/banner/banner5.jpeg",
  "/images/banner/banner6.jpg",
  "/images/banner/banner7.jpg",  ];

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "580px", // Increase the height as needed for better image clarity
  padding: "0px",
  background: Colors.light_gray,
  overflow: "hidden",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "100%",
  padding: "30px",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));


export const BannerArrows = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // To create space between the arrows
  width: "100%", // Make the container full-width
  padding: "0 20px", // Add padding to create space between the edges and arrows
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "0", // Adjust padding for mobile view
  },
}));


export const ArrowButton = styled(Button)(({ theme }) => ({
  backgroundColor: Colors.transparent,
  color: Colors.white,
  fontSize: "24px",
  padding: "8px",
  border: `2px solid ${Colors.white}`,
  borderRadius: "50%",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: Colors.white,
    color: Colors.primary,
  },
}));

export default function Banner() {
  const theme = useTheme(); // Use useTheme here
  const matches = useMediaQuery(theme.breakpoints.down("md")); // Use useMediaQuery here
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <BannerContainer>
      <BannerArrows>
        <ArrowButton onClick={handlePrevImage}>{"<"}</ArrowButton>
        <ArrowButton onClick={handleNextImage}>{">"}</ArrowButton>
      </BannerArrows>
      <BannerImage src={bannerImages[currentImageIndex]} />
      {/* Add your banner content here */}
    </BannerContainer>
  );
}
