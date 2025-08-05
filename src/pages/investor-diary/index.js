import React, { useEffect, useState } from 'react';
import InvestorHeader from './component/investor-header';
import InvestorDiaryImg from './component/investor-diary-img';
import InvestorFeatures from './component/investor-features';
import InvestorQuote from './component/investor-quote';
import InvestorCraftSection from './component/investor-craft-section';
import InvestorBenefits from './component/investor-benefits';
import InvestorProducts from './component/investor-products';
import InvestorFaq from './component/investor-faq';
import InvestorFooter from './component/investor-footer';
import './investor-diary.css';
import { GET_ALL_DIARIES } from '../../app/services/graphql/investorDiaryQueries';
import WPClient from '../../app/services/apoloclient';
import Head from 'next/head';
import InvestorVideo from './component/investo-diary-video';
import Meta from "../../component/Meta";
import DiwaliOffSlider from '@/app/components/coursetopofferslider';
const InvestorDiary = () => {
    const [investorDiaryData, setInvestorDiaryData] = useState([]);

    useEffect(() => {
        const fetchDiaryData = async () => {
            try {
                const { data } = await WPClient.query({
                    query: GET_ALL_DIARIES,
                });

                setInvestorDiaryData(data.products.nodes[0]);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchDiaryData();
    }, []);

    return (
        <main className="bg-black text-white font-sans">

            <Head>
            <Meta />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '403234998994611');
                    fbq('track', 'PageView');
                    `,
                }}
                />
            </Head>
            <InvestorHeader />
            <section className="items-center">
                <InvestorDiaryImg />
                <InvestorFeatures />
                <InvestorQuote />
                <InvestorCraftSection />
                <InvestorBenefits />
                <InvestorVideo />
                <InvestorProducts investorDiaryData={investorDiaryData} />
                <InvestorFaq />
                <InvestorFooter />
            </section>
        </main>
    );
};

export default InvestorDiary;
