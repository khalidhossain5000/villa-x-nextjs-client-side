import HomeTitle from "@/components/Shared/HomePage/HomeTitle/HomeTitle";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Faq = () => {
  return (
    <section className="py-14 lg:py-22 px-4 xl:px-0">
      <div className="max-w-7xl mx-auto py-14 lg:py-22">
        <div className=" lg:py-9">
          <HomeTitle
            title={"FAQ - Explore Frequently Asked Questions"}
            className={"font-raleway text-center xl:text-left"}
          />
        </div>
        {/* faq div */}

        <div className="w-full max-w-7xl mx-auto my-12 px-4">
          <Accordion
            type="single"
            collapsible
            defaultValue="booking"
            className="space-y-4"
          >
            {/* Booking */}
            <AccordionItem
              value="booking"
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                How do I book a room?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700 dark:text-gray-300 text-base md:text-lg bg-white dark:bg-gray-900">
                You can book a room directly through our website by selecting
                your desired dates, room type, and completing the secure
                checkout process. Instant confirmation is provided via email.
              </AccordionContent>
            </AccordionItem>

            {/* Cancellation */}
            <AccordionItem
              value="cancellation"
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                What is your cancellation policy?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700 dark:text-gray-300 text-base md:text-lg bg-white dark:bg-gray-900">
                You can cancel your booking up to 24 hours before check-in for a
                full refund. Cancellations within 24 hours of check-in may incur
                a charge of one nights stay.
              </AccordionContent>
            </AccordionItem>

            {/* Amenities */}
            <AccordionItem
              value="amenities"
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                What amenities are included in the room?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700 dark:text-gray-300 text-base md:text-lg bg-white dark:bg-gray-900">
                All rooms come with free Wi-Fi, air conditioning, a flat-screen
                TV, and complimentary toiletries. Selected rooms include a
                minibar and balcony.
              </AccordionContent>
            </AccordionItem>

            {/* Support */}
            <AccordionItem
              value="support"
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                How can I contact customer support?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700 dark:text-gray-300 text-base md:text-lg bg-white dark:bg-gray-900">
                Reach us via email, live chat, or phone. We respond within 24
                hours during business days. For urgent inquiries, our 24/7
                hotline is available.
              </AccordionContent>
            </AccordionItem>

        

            {/* Special Requests */}
            <AccordionItem
              value="special-requests"
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                Can I make special requests for my stay?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700 dark:text-gray-300 text-base md:text-lg bg-white dark:bg-gray-900">
                Yes! You can request extra amenities, bed type, or room
                preferences during booking. We’ll do our best to accommodate
                your requests, subject to availability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
