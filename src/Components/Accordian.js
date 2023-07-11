import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import chevron from "../assets/chevron_right.svg"

export default function BasicAccordion() {
  return (
    <div className="w-[90%] mx-auto max-sm:pt-5 max-sm:px-0 z-10">
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
          sx={{
            '@media (max-width: 600px)': {
              fontSize: '16px',
            },
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            What solutions does Sevens Gaming provide? <span className="ExpandMoreIcon"> <ExpandMoreIcon /> </span> 
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

      <Accordion sx={{ bgcolor: 'transparent', border: 'none', boxShadow: 'none', color: '#563E89', border: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            What sports exchange software development services does Sevens
            Gaming offer?<span className="ExpandMoreIcon"> <ExpandMoreIcon /> </span> 
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

      <Accordion sx={{ bgcolor: 'transparent', border: 'none', boxShadow: 'none', color: '#563E89', border: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            Which games and sports are offered on your platform?<span className="ExpandMoreIcon"> <ExpandMoreIcon /> </span> 
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

      <Accordion sx={{ bgcolor: 'transparent', border: 'none', boxShadow: 'none', color: '#563E89', border: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            How much does the turnkey solution cost?<span className="ExpandMoreIcon"> <ExpandMoreIcon /> </span> 
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

      <Accordion sx={{ bgcolor: 'transparent', border: 'none', boxShadow: 'none', color: '#563E89', border: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            How much time does it take to get the White Label sports exchange
            platform?<span className="ExpandMoreIcon"> <ExpandMoreIcon /> </span> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
          We deliver the services in the quickest time possible. However, the time to deliver the white label
solution to our clients is subject to the levels of integrations required along with the
customizations and other preferences. Once we get your requirements in detail, we shall give you
an estimated timeline and you can rest assured that the platform will be delivered within the
deadline.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: 'transparent', border: 'none', boxShadow: 'none', color: '#563E89', border: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            Which are the Agent APIs that Sevens Gaming provides?<span className="ExpandMoreIcon"> <ExpandMoreIcon /> </span> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
          We provide various APIs that are related to a user search, deposits and withdrawals, balance
checking etc. These APIs are easy to integrate and useful for you if you already own a platform
and are looking for better API solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: 'transparent', border: 'none', boxShadow: 'none', color: '#563E89', border: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            Are the live dealer casino software solutions reliable?<span className="ExpandMoreIcon"> <ExpandMoreIcon /> </span> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
          We provide the best casino software solutions that feature the best games with the best UI
provided by the top names in the industry such as Evolution, 7Mojos etc. We are able to maintain
the quality of our services and provide only reliable solutions by collaborating with only top-notch
providers for integrations.
          </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion sx={{ bgcolor: 'transparent', border: 'none', boxShadow: 'none', color: '#563E89', border: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
          What is online sports betting?<span className="ExpandMoreIcon"> <ExpandMoreIcon /> </span> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
          Sports betting is basically an activity involving the result prediction of different sports matches
and then placing a wager on it. This can be done by simply logging into a platform.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ bgcolor: 'transparent', border: 'none', boxShadow: 'none', color: '#563E89', border: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
          What is sports betting software?<span className="ExpandMoreIcon"> <ExpandMoreIcon /> </span> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
          Sports betting software is an online platform where users can place a bet on their desired sports
league/match based on their predictions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ bgcolor: 'transparent', border: 'none', boxShadow: 'none', color: '#563E89', border: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
          What is the difference between sports betting and sports exchange?<span className="ExpandMoreIcon"> <ExpandMoreIcon /> </span> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: "16px" }}>
          The major difference is that sports exchange allows you to ‘lay’ a certain team or player, whereas
in normal sports betting, you can only place a ‘back’ bet. So, the key differentiator is the wager.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
