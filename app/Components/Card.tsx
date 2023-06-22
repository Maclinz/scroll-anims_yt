"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  description?: string;
  image?: any;
}

function Card({ title, description, image }: CardProps) {
  return (
    <CardStyled>
      <div
        className="image"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <p className="new">New</p>
        <div className="text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <Image
          src={image}
          alt="image"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="overlay"></div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  position: relative;
  background-color: var(--color-bg);
  height: 100%;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease-in-out;

  .new {
    position: absolute;
    top: 3rem;
    right: 2.5rem;
    z-index: 5;
    background: #222260;
    color: #fff;

    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
  }

  .text {
    position: absolute;
    bottom: 3rem;
    left: 2.5rem;
    z-index: 5;
    h3 {
      display: inline-block;
      font-size: 1.5rem;
      color: #f2994a;
      background: var(--color-bg);
      padding: 0.2rem 1rem;
      border-radius: 30px;
      margin-bottom: 0.5rem;
      border: 1px solid var(--color-border);
    }
  }

  .overlay {
    position: absolute;
    bottom: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: 25%;
    background: linear-gradient(0deg, #111111 1%, rgba(17, 17, 17, 0.06) 99%);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export default Card;
