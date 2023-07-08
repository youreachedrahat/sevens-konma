import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import chevron from "../assets/chevron_right.svg"

export default function BasicAccordion() {
  return (
    <div className="w-[80%] mx-auto max-sm:pt-16">
      <Accordion
        sx={{
          bgcolor: "transparent",
          border: "none",
          boxShadow: "none",
          color: "#46009c",
          border: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ alignItems: "center" }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            What solutions does Sevens Gaming provide?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
            We majorly provide Casino and sports exchange, Turnkey solutions,
            White label solutions, Sportsbook (Bookmaker) and Agent APIs. So,
            whether you are an established firm or you are planning to just get
            started, we have a solution for you.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: "transparent",
          border: "none",
          boxShadow: "none",
          color: "#46009c",
          border: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ alignItems: "center" }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            What sports exchange software development services does Sevens
            Gaming offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
            Sevens Gaming provides White Label and Turnkey sports exchange
            software development services. We also offer customized sports
            exchange software development solutions based on your requirement.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: "transparent",
          border: "none",
          boxShadow: "none",
          color: "#46009c",
          border: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ alignItems: "center" }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            Which games and sports are offered on your platform?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
            Some major games and sports that are offered on our platform include
            Casino games (including Indian card games), Horse Racing, Greyhound
            Racing, Cricket, Football, Tennis, and various ESports.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: "transparent",
          border: "none",
          boxShadow: "none",
          color: "#46009c",
          border: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ alignItems: "center" }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            How much does the turnkey solution cost?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
            The price of our services is decided based on the client's
            preferences and the level of customization required. Please get in
            touch with us today to get a detailed quotation. WhatsApp -{" "}
            <b>+447537180047</b>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: "transparent",
          border: "none",
          boxShadow: "none",
          color: "#46009c",
          border: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ alignItems: "center" }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            How much time does it take to get the White Label sports exchange
            platform?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
            The price of our services is decided based on the client's
            preferences and the level of customization required. Please get in
            touch with us today to get a detailed quotation. WhatsApp -{" "}
            <b>+447537180047</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "transparent",
          border: "none",
          boxShadow: "none",
          color: "#46009c",
          border: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ alignItems: "center" }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            Which are the Agent APIs that Sevens Gaming provides?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
            The price of our services is decided based on the client's
            preferences and the level of customization required. Please get in
            touch with us today to get a detailed quotation. WhatsApp -{" "}
            <b>+447537180047</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "transparent",
          border: "none",
          boxShadow: "none",
          color: "#46009c",
          border: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ alignItems: "center" }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            Are the live dealer casino software solutions reliable?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
            The price of our services is decided based on the client's
            preferences and the level of customization required. Please get in
            touch with us today to get a detailed quotation. WhatsApp -{" "}
            <b>+447537180047</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
