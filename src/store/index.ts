// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'


import Consultation from "./landing-page/consultation";
import BookMeeting from "./landing-page/book-meeting";
import FreeTrial from "./landing-page/free-trial";
import ContactUs from "./landing-page/contact-us";
import stepPlaceAds from "./landing-page/step-place-ads";
import mitra from "./landing-page/mitra";
import service from "./landing-page/service";
import ImageSlider from './apps/landing-page/image-slider'
import Testimonial from './apps/landing-page/testimonial'
import StepPlaceAds from './apps/landing-page/step-pace-ads'
import AboutMe from './apps/landing-page/about-me'
import reasonsForAds from './apps/landing-page/reasons-for-ads'
import ourClient from './apps/landing-page/our-client'
import services from './apps/landing-page/services'
import product from "./product";
import subCategory from "./sub-category";

import Footer from './apps/landing-page/footer'

export const store = configureStore({
    reducer: {
       
        //landing page
        ImageSlider,
        Testimonial,
        StepPlaceAds,
        AboutMe,
        reasonsForAds,
        ourClient,
        services,
        Footer,
        product,
        subCategory,
        Consultation,
        BookMeeting,
        FreeTrial,
        ContactUs,
        stepPlaceAds,
        mitra,
        service,
       
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
