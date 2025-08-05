import React from 'react'

export default function ExperienceSection() {
  return (
    <div>   <div className="py-20 px-4 md:px-8 lg:px-[250px] bg-white">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative">
        {/* Card 1 */}
        <div className="p-8 w-full rounded-md relative bg-white ">
            <img
                src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/28-01-2025/new2/fi_10936496.webp"
                alt="Card 1 Image"
                className="w-[50px] h-[50px] mx-auto object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-center text-bold mb-1">12+</h3>
            <p className="text-black text-18 text-bold text-center">Years experience in Investing</p>
            {/* Right Border */}
            <div className="absolute top-8 right-[-12px] h-[60%] w-[1px] bg-gray-300 hidden md:block"></div>
        </div>

        {/* Card 2 */}
        <div className="p-8 w-full rounded-md relative bg-white ">
            <img
                src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/28-01-2025/new2/fi_4696563.webp"
                alt="Card 2 Image"
                className="w-[50px] h-[50px] mx-auto object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-center mb-1">9+</h3>
            <p className="text-black text-18 text-bold text-center">Years of Teaching Experience</p>
            <div className="absolute top-8 right-[-12px] h-[60%] w-[1px] bg-gray-300 hidden md:block"></div>
        </div>

        {/* Card 3 */}
        <div className="p-8 w-full rounded-md bg-white">
            <img
                src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/28-01-2025/new2/fi_2875352.webp"
                alt="Card 3 Image"
                className="w-[50px] h-[50px] mx-auto object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-center mb-1">2.5 M+</h3>
            <p className="text-black text-18 text-bold text-center">Subscribers on YouTube</p>
        </div>

        {/* Card 4 */}
        <div className="p-8 w-full rounded-md relative bg-white ">
            <img
                src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/28-01-2025/new2/fi_6081849.webp"
                alt="Card 4 Image"
                className="w-[50px] h-[50px] mx-auto object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-center mb-1">450 M+</h3>
            <p className="text-black text-18 text-bold text-center">YouTube Views</p>
            <div className="absolute top-8 right-[-12px] h-[60%] w-[1px] bg-gray-300 hidden md:block"></div>
        </div>

        {/* Card 5 */}
        <div className="p-8 w-full rounded-md relative bg-white ">
            <img
                src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/28-01-2025/new2/fi_8540936.webp"
                alt="Card 5 Image"
                className="w-[50px] h-[50px] mx-auto object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-center mb-1">22%</h3>
            <p className="text-black text-18 text-bold text-center">CAGR on Personal Portfolio</p>
            <div className="absolute top-8 right-[-12px] h-[60%] w-[1px] bg-gray-300 hidden md:block"></div>
        </div>

        {/* Card 6 */}
        <div className="p-8 w-full rounded-md bg-white ">
            <img
                src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/28-01-2025/new2/fi_2737446.webp"
                alt="Card 6 Image"
                className="w-[50px] h-[50px] mx-auto object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-center mb-1">4</h3>
            <p className="text-black text-18 text-bold text-center">Multibaggers in his Portfolio</p>
        </div>
    </div>
</div>
</div>
  )
}
