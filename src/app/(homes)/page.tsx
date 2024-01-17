"use client"
import React, { useState, useEffect } from "react";
import SectionSliderCardNftVideo from "@/components/SectionSliderCardNftVideo";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionSliderCategories from "@/components/SectionSliderCategories/SectionSliderCategories";
import axios from 'axios'
import { useDispatch } from "react-redux"
import { setModuleList, setCategoryList, setNewestList, setTrendingList, setFeatureList } from "@/redux/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import SectionTrending from "@/components/SectionSliderCategories/SectionTrending";
import SectionNew from "@/components/WeekMonthCreator";
import SectionLargeTrending from "@/components/SectionSliderCategories/SectionLargeTrending";

function PageHome() {

    const dispatch = useDispatch()
    const { moduleList, categoryList, trendingList, newestList, featuredList } = useAppSelector((state) => state.auth);

    useEffect(() => {
        const getModule = async () => {
            const userId = JSON.parse(localStorage.getItem("marketusername") as string)

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-modules`, { user_id: userId && userId.id },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
            dispatch(setModuleList(response.data.data))

        }
        const getTrending = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-favorite`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
            dispatch(setTrendingList(response.data.data))

        }

        const getNewest = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-modules-by-created-at`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
            dispatch(setNewestList(response.data.data))

        }
        const getFeatured = async () => {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-modules-details-count`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
            dispatch(setFeatureList(response.data.data))

        }

        getModule()
        getTrending()
        getNewest()
        getFeatured()
    }, [])

    const getCategoryList = async () => {

        try {

            const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/get-category-modules`;
            const response = await axios.get(apiUrl, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            dispatch(setCategoryList(response.data.data))



        } catch (error) {
            console.error("Error making API call:", error);
        }
    }

    useEffect(() => {
        getCategoryList()

    }, [])

    return (
        <div className="nc-PageHome relative overflow-hidden">

            <div className="container   relative my-5">
                <SectionHero2 title="Gen AI Marketplace" desc="Search 100,000+ AI prompts from the world best AI creators Midjourney, ChatGPT, DALL·E, Stable Diffusion & more" />
            </div>



            <div className="container relative space-y-16 my-16 lg:space-y-16 lg:my-16">
                <SectionSliderCategories categoryList={categoryList} />
                {/* <SectionLargeTrending title="Trending Prompt" moduleList={trendingList} />
                 */}
                   <SectionTrending title="Trending Prompt" moduleList={trendingList} />
                <SectionHero2 title="Sell your prompts on Gen AI" desc="Upload your prompt, connect with Stripe, and become a seller in just 2 minutes" />

                {/* <SectionSliderCardNftVideo title="Newest Prompt" moduleList={moduleList} /> */}
                <SectionTrending title="Featured Prompt" moduleList={featuredList} />
                <SectionTrending title="Newest Prompt" moduleList={newestList} />
                <SectionHero2 title="Hire an AI creator for your next project" desc="Commission custom prompts and solutions from top prompt engineers" />
                <SectionNew />

 
            </div>
            <div className="bg-gray-50">
                
            <div className="container   relative py-20">

                <SectionSubscribe2 />
            </div></div>
        </div>
    );
}

export default PageHome;
