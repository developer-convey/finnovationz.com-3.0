import React from 'react';

const InvestorCraftSection = () => {
    return (
        <>
            <section className="crafted_section py-20 bg-black">
                <h2 className="text-6xl font-bold text-center mb-8 investor-ibm-font-family" style={{
                    fontWeight: "300",
                }}>
                    Crafted for <br />{" "}
                    <span className="text-yellow-500">Intelligence</span>
                </h2>
                <div className="desk_top_diary_close flex justify-center my-4">
                    <img
                        src="/images/diary_close.png"
                        alt="Diary Close"
                        className="diary_close max-w-8xl" style={{ marginTop: "-200px" }}
                    />
                </div>
                <div className="mobile_top_diary_close flex justify-center my-4">
                    <img
                        src="/images/mb_diary_close.png"
                        alt="Diary Close"
                        className="diary_close max-w-8xl" style={{ marginTop: "-200px" }}
                    />
                </div>
                <div className="desk_top_diary_open px-20 flex justify-center" style={{ marginTop: "-280px" }}>
                    <img
                        src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/13-01-2025/diary-open.png"
                        alt="Diary Open"
                        className="diary_open max-w-8xl "
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="mobile_top_diary_open px-20 flex justify-center" style={{ marginTop: "-200px" }}>
                    <img
                        src="https://api-ap-south-mum-1.openstack.acecloudhosting.com:8080/websitevideos2020/images/13-01-2025/mb_diary-open.png"
                        alt="Diary Open"
                        className="diary_open max-w-8xl "
                        width="100%"
                        height="100%"
                    />
                </div>
            </section>
        </>
    );
};


export default InvestorCraftSection;
