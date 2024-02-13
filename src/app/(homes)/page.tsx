"use client"
import React, { useState, useEffect } from "react";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionSliderCategories from "@/components/SectionSliderCategories/SectionSliderCategories";
import axios from 'axios'
import { useDispatch } from "react-redux"
import { setModuleList, setCategoryList, setNewestList, setTrendingList, setFeatureList } from "@/redux/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import SectionTrending from "@/components/SectionSliderCategories/SectionTrending";
import SectionNew from "@/components/WeekMonthCreator";

function PageHome() {

    const dispatch = useDispatch()
    const { categoryList, trendingList, newestList, featuredList } = useAppSelector((state) => state.auth);
    const [bannerList, setBannerList] = useState([])
    const [banner1, setBanner1] = useState([])
    const [banner2, setBanner2] = useState([])
    const [banner3, setBanner3] = useState([])

    useEffect(() => {
        const getModule = async () => {
            const userId = localStorage.getItem("id")

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-modules`, { user_id: userId },
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

        const getBannerDetail = async () => {

            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/getallDataDetails`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
            setBannerList(response.data)
            const data = response.data.data;
            // console.log(data[0], data[1], data)
            setBanner1(data[0])
            setBanner2(data[2])
            setBanner3(data[1])
        }

        getBannerDetail()
        getModule()
        getTrending()
        getNewest()
        getFeatured()
    }, [])

    const getCategoryList = async () => {
        try {

            const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-category-modules`;
            const response = await axios.get(apiUrl, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("marketplacegenaitoken")
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

            {banner1 && <div className="container   relative my-5">
                <SectionHero2 banner={banner1} />
            </div>
            }
            <div className="container relative space-y-6 my-6 lg:space-y-6 lg:my-6">
                <SectionSliderCategories categoryList={categoryList} />

                {trendingList && <SectionTrending title="Trending Prompt" type="trending" moduleList={trendingList} />}
                <SectionNew />
               {banner2 && <SectionHero2 banner={banner2} />}

                {featuredList && <SectionTrending title="Featured Prompt" type="featured" moduleList={featuredList} />}
                {newestList && <SectionTrending title="Newest Prompt" type="newest" moduleList={newestList} />}
               {banner3 && <SectionHero2 banner={banner3} />}
            </div>
            <div className="bg-gray-50">
                <div className="container   relative py-20">
                 <SectionSubscribe2 />
                </div>
            </div>
        </div>
    );
}

export default PageHome;
