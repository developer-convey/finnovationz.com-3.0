"use client";


import { motion } from "framer-motion";

export default function TeamShowcase() {
    return (
        <div className=" bg-gray-50 pt-10 mb-[0px] md:px-10 px-6 sm:px-6 lg:px-8">
            {/* Hero img */}
            <div className="md:w-[1000px] lg:w-[1150px] mx-auto ">

              

                {/* img Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative  mx-auto"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 sm:gap-4 md:gap-3   md:px-0">
                        {/* Left Column */}
                        <div className="flex flex-col gap-3 sm:gap-4 md:gap-3">
                            <div className="relative h-[200px] w-full sm:h-[200px] md:h-[350px] md:w-[220px] md:top-[200px] rounded-xl overflow-hidden">
                                <img
                                    src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/image%20%283%29.png"
                                    alt="Team members collaborating"
                                    fill
                                    className="object-fit md:h-[230px]"
                                />
                            </div>
                        </div>

                        {/* Middle Column */}
                        <div className="flex md:flex-col flex-row gap-3 sm:gap-4 md:gap-6">
                            <div className="relative h-auto sm:h-[200px] md:h-[200px] md:top-[80px] rounded-xl overflow-hidden">
                                <img
                                    src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/image%20%284%29.png"
                                    alt="Team discussion"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-auto sm:h-[250px] md:h-[200px] md:top-[80px] rounded-xl overflow-hidden">
                                <img
                                    src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/image%20%285%29.png"
                                    alt="Team presentation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Third Column */}
                        <div className="flex md:flex-col flex-row gap-3 sm:gap-4 md:gap-6">
                            <div className="relative h-auto sm:h-[200px] md:h-[330px] rounded-xl overflow-hidden">
                                <img
                                    src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/image%20%286%29.png"
                                    alt="Award ceremony"
                                    fill
                                    className="object-cover md:h-[330px]"
                                />
                            </div>
                            <div className="relative h-auto sm:h-[300px] md:h-[300px] rounded-xl overflow-hidden">
                                <img
                                    src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/image%20%287%29.png"
                                    alt="Team building activity"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Fourth Column */}
                        <div className="flex md:flex-col flex-row gap-3 sm:gap-4 md:gap-6">
                            <div className="relative h-auto sm:h-[150px] md:h-[200px] md:top-[80px] rounded-xl overflow-hidden">
                                <img
                                    src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/image%20%288%29.png"
                                    alt="Office culture"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-auto sm:h-[150px] md:h-[200px] md:top-[80px] rounded-xl overflow-hidden">
                                <img
                                    src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/image%20%289%29.png"
                                    alt="Office culture"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Fifth Column */}
                        <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                            <div className="relative h-auto sm:h-[150px] md:h-[260px] md:w-[200px] md:top-[200px] rounded-xl overflow-hidden">
                                <img
                                    src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/ikashi/11-03-2025/image%20%2810%29.png"
                                    alt="Office culture"
                                    fill
                                    className="object-fit md:h-[230px]"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}