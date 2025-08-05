"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const logos = [
    "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/27-02-2025/Bloomberg.png",
    "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/27-02-2025/The%20Japan%20Times.png",
    "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/27-02-2025/Bloomberg.png",
    "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/27-02-2025/The%20Japan%20Times.png",
    "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/27-02-2025/Bloomberg.png",
    "https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/27-02-2025/The%20Japan%20Times.png",
    

 ];

export default function AutoScrollSlider() {
    const [isPaused, setIsPaused] = useState(false);
    const sliderRef = useRef(null);
  
    return (
      <div className='mt-10'>
      <img src='https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/30-12-2024/image-giff.gif'>
      </img>
  </div>
    );
  }