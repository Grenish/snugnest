"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col px-2 md:px-20 sm:px-20 my-5">
      <h1 className="text-4xl text-center Vaimek mb-5">
        Frequently Asked Questions
      </h1>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="What materials are SnugNest cardigans made from?"
        >
          Our cardigans are crafted from high-quality materials such as
          cashmere, merino wool, and organic cotton to ensure maximum comfort
          and durability.
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Can I return or exchange my cardigan if it doesn't fit?"
        >
          Absolutely! We have a hassle-free return and exchange policy. If
          you’re not completely satisfied with your purchase, you can return or
          exchange it within 30 days of receipt. Please visit our returns page
          for more information.
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Are SnugNest cardigans sustainably made?"
        >
          Yes, sustainability is important to us. We use eco-friendly materials
          and ethical manufacturing practices to minimize our environmental
          impact.
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          title="Do you offer gift wrapping services?"
        >
          Yes, we offer complimentary gift wrapping for all purchases. You can
          select the gift wrapping option at checkout.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
