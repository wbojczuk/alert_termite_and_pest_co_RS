import ServiceMap from "@/app/(mainsite)/components/aboutpage/ServiceMap/ServiceMap"
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import Reviews from "@/app/(mainsite)/components/reviewspage/Reviews/Reviews"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Reviews | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Reviews | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function ReviewsPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Reviews" />
			<Reviews />
			<StatsRibbon />
			<ServiceMap />
	 	 </>
	 )
}