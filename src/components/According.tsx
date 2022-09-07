import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function According() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        onClick={() => handleOpen(1)}
      >
        <AccordionHeader className="text-left">Outsourcing Services What is the cost of outsourcing services?</AccordionHeader>
        <AccordionBody>
        The cost of outsourcing can vary based on the type of service being outsourced. The price varies by many factors for example: the number of agents, languages, type of service etc.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        onClick={() => handleOpen(2)}
      >
        <AccordionHeader className="text-left">Which Country Do you Serve?</AccordionHeader>
        <AccordionBody>
        Lights Global Solutions, compared to other call center companies, provides personalized solutions and customer services to multiple countries. We welcome clients from the UK, USA, Germany, Canada, Europe, Asia and Dubai.
        The standards of our content moderation services remain persistent - we do not compromise on the quality of our services.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        onClick={() => handleOpen(3)}
      >
        <AccordionHeader className="text-left">What are the benefits of outsourcing services?</AccordionHeader>
        <AccordionBody>
          Outsourcing services offer a lot of benefits, including improved efficiency and cost-effectiveness in tasks.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        icon={<Icon id={4} open={open} />}
        onClick={() => handleOpen(4)}
      >
        <AccordionHeader className="text-left">Can I use my own infrastructure?</AccordionHeader>
        <AccordionBody>
          Of course. You can outsource moderators, train them with your system and integrate them with your business needs.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}