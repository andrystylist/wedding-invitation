import cx from "@/utils/cx";
import Header from "@/components/content-sections/Header";
import MainPhoto from "@/components/content-sections/MainPhoto";
import { useGlobalSettings } from "@/hooks/useGlobalSettings";
import FirstQuote from "@/components/content-sections/FirstQuote";
import SecondQuote from "@/components/content-sections/SecondQuote";
import CeremonyPlace from "@/components/content-sections/CeremonyPlace";
import Celebration from "@/components/content-sections/Celebration";
import DressCode from "@/components/content-sections/DressCode";
import Transport from "@/components/content-sections/Transport";
import Lodging from "@/components/content-sections/Lodging";
import AttendanceConfirmation from "@/components/content-sections/AttendanceConfirmation";
import Itinerary from "@/components/content-sections/Itinerary";
import Album from "@/components/content-sections/Album";
import Gift from "@/components/content-sections/Gift";
import PhotoShare from "@/components/content-sections/PhotoShare";
import SeeYou from "@/components/content-sections/SeeYou";

export default function Invitation() {
  const { envelopeOpen } = useGlobalSettings();

  return (
    <article
      className={cx(
        "invitation text-[#252525] text quattrocento-text text-base",
        "bg-white dark:bg-white relative w-full",
        "items-center justify-center overflow-hidden text-center min-h-screen",
        envelopeOpen ? "block" : "hidden",
      )}
    >
      <Header />
      <MainPhoto />
      <FirstQuote />
      <SecondQuote />
      <CeremonyPlace />
      <Celebration />
      <DressCode />
      <Transport />
      <Lodging />
      <AttendanceConfirmation />
      <Itinerary />
      <Album />
      <Gift />
      <PhotoShare />
      <SeeYou />
    </article>
  );
}
