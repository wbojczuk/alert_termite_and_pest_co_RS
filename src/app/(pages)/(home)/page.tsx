import AboutUs from "@/app/(mainsite)/components/homepage/AboutUs/AboutUs";
import TakeCareOfIt from "@/app/(mainsite)/components/homepage/TakeCareOfIt/TakeCareOfIt";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import HorizontalFreeQuoteForm from "@/app/(mainsite)/components/homepage/HorizontalFreeQuoteForm/HorizontalFreeQuoteForm";
import InlineReviews from "@/app/(mainsite)/components/homepage/InlineReviews/InlineReviews";
import PestsAndCritters from "@/app/(mainsite)/components/homepage/PestsAndCritters/PestsAndCritters";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon";
import serviceAreaData from "@/app/(mainsite)/data/serviceAreaData";


export default function Home() {
  return (
    <>
      <Header />
      <HorizontalFreeQuoteForm />
      <AboutUs />
      <StatsRibbon />
      <InlineReviews />
      <PestsAndCritters />
      <ServiceArea areaData={serviceAreaData} mapURL="https://www.google.com/maps/d/embed?mid=1_q-CvgFqQXVcwPmDpmHYrwe4Om1KgJs&ehbc=2E312F"/>
      <TakeCareOfIt />
    </>
  )
}
