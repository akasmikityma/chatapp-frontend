/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import "./LandingPage.css"; // Add a CSS file for styling

const LandingPageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #ffffff;
  color: #6a11cb;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const iconStyle = css`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const LandingPage = () => {
  const nav = useNavigate();
  const handleGetStarted = () => {
    // Navigate to the chat page or perform an action
    console.log("Get Started clicked!");
    nav("/login");
  };

  return (
    <div className="landing-page">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Welcome to Adda-Goppo</h1>
        <p className="hero-subtitle">
          Connect with your friends and communities like never before.
        </p>
        <motion.button
          className="get-started-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => (window.location.href = "/login")}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;