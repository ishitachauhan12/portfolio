import * as React from "react";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function LastPage() {
  return (
    <div
      style={{
        backgroundColor: "#D27552",
        width: "100%",
        height: "250px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "50%" }}>
        <ul>
          <li>
            <Typography variant="h5" component="div" sx={{ m: 4 }}>
              <GitHubIcon />
              <a href="https://github.com/ishitachauhan12">Github</a>
            </Typography>
          </li>
          <li>
            <Typography variant="h5" component="div" sx={{ m: 4 }}>
              <AlternateEmailIcon />
              <a href="#">chauhanishita5356@gmail.com</a>
            </Typography>
          </li>
          <li>
            <Typography variant="h5" component="div" sx={{ m: 4 }}>
              <PhoneIcon />
              <a href="#">91-9027021228</a>
            </Typography>
          </li>
        </ul>
      </div>
      <div style={{ width: "50%" }}>
        <ul>
          <li>
            <Typography variant="h5" component="div" sx={{ m: 4 }}>
              <LinkedInIcon />
              <a href="https://in.linkedin.com/in/ishita-chauhan-825183191">
                LinkedIn
              </a>
            </Typography>
          </li>
          <li>
            <Typography variant="h6" component="div" sx={{ m: 4 }}>
              Hope We Collab Soon.
            </Typography>
          </li>
          <li>
            <Typography variant="h5" component="div">
              BYE
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LastPage;
