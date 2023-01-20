import React from "react";
import "./App.css";
import {
  Avatar,
  Chip,
  Collapse,
  createTheme,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ThemeProvider } from "@emotion/react";
import Chipplete from "./Chipplete";
import ButtonResume from "./ButtonResume";
import "./style.scss";

function App() {
  const themeFont = createTheme({
    typography: {
      fontFamily: "Inconsolata",
    },
  });

  const [expandedd, setExpanded] = React.useState({
    lang: false,
    devskill: false,
  });

  const handleChange = (name) => {
    setExpanded((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const ExpandIcon = ({ state }) =>
    state === true ? <ExpandLessIcon /> : <ExpandMoreIcon />;

  const ExpandMoreButton = ({ state }) => (
    <Typography variant="caption" display="block" gutterBottom>
      <h4>
        <IconButton color="primary" onClick={() => handleChange(state)}>
          <ExpandIcon state={expandedd[state]} />
        </IconButton>
      </h4>
    </Typography>
  );

  return (
    <div className="App">
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Avatar sx={{ width: 254, height: 254 }} src="avatar.jpg" />
          </Grid>
        </Box>

        <ThemeProvider theme={themeFont}>
          <Typography variant="h2">Filip Hajduk</Typography>
          <Typography variant="h5">Software developer</Typography>
        </ThemeProvider>

        <br />

        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <ThemeProvider theme={themeFont}>
            <ButtonResume />
          </ThemeProvider>

          <Grid item>
            <h2>Languages</h2>
          </Grid>

          <Grid>
            <Chipplete name="JS ES6+" rating={4.5} />
          </Grid>

          <Grid>
            <Chipplete name="React" rating={4.5} />
          </Grid>

          <Grid>
            <Chipplete name="NodeJS" rating={4} />
          </Grid>

          <Grid>
            <Chipplete name="jQuery" rating={4.5} />
          </Grid>

          <Grid>
            <Chipplete name="C" rating={3} />
          </Grid>

          <Collapse in={expandedd.lang} timeout="auto" unmountOnExit>
            <Grid>
              <Chipplete name="PHP" rating={2.5} />
            </Grid>

            <Grid>
              <Chipplete name="Java" rating={2} />
            </Grid>

            <Grid>
              <Chipplete name="Typescript" rating={2} />
            </Grid>

            <Grid>
              <Chipplete name="Redux" rating={2} />
            </Grid>

            <Grid>
              <Chipplete name="Python" rating={2} />
            </Grid>

            <Grid>
              <Chipplete name="C#" rating={1.5} />
            </Grid>

            <Grid>
              <Chipplete name="Tests" rating={1.5} />
            </Grid>
          </Collapse>

          <Grid item>
            <ExpandMoreButton state={"lang"} />
          </Grid>

          <Grid item>
            <h2>Databases</h2>
          </Grid>

          <Grid>
            <Chipplete name="MS SQL" rating={4.5} />
          </Grid>
          <Grid>
            <Chipplete name="My SQL" rating={4.5} />
          </Grid>
          <Grid>
            <Chipplete name="Postgress" rating={3} />
          </Grid>
          <Grid>
            <Chipplete name="MongoDB" rating={2.5} />
          </Grid>
          <Grid>
            <Chipplete name="DynamoDB" rating={2} />
          </Grid>

          <Grid item>
            <h2>UX/UI</h2>
          </Grid>

          <Grid>
            <Chipplete name="MaterialUI" rating={4.5} />
          </Grid>

          <Grid>
            <Chipplete name="Bootstrap" rating={4} />
          </Grid>

          <Grid>
            <Chipplete name="CSS" eegg={"css"} rating={2.5} />
          </Grid>

          <Grid>
            <Chipplete name="RWD" rating={4.5} />
          </Grid>

          <Grid>
            <Chipplete name="Sass" rating={1.5} />
          </Grid>

          <Grid item>
            <h2>DevOps skills</h2>
          </Grid>

          <Grid>
            <Chipplete name="GitLab CI/CD" rating={4.5} />
          </Grid>

          <Grid>
            <Chipplete name="Git" rating={4} />
          </Grid>

          <Grid>
            <Chipplete name="Docker" rating={4.5} />
          </Grid>

          <Grid>
            <Chipplete name="Shell" rating={4} />
          </Grid>

          <Grid>
            <Chipplete name="Powershell" rating={2.5} />
          </Grid>

          <Grid>
            <Chipplete name="TempleOS" tooltip="I'm joking" rating={5} />
          </Grid>

          <Grid>
            <Chipplete name="PM2" rating={5} />
          </Grid>

          <Grid>
            <Chipplete name="Grafana" rating={4.5} />
          </Grid>

          <Collapse in={expandedd.devskill} timeout="auto" unmountOnExit>
            <Grid>
              <Chipplete name="Prometheus" rating={3} />
            </Grid>

            <Grid>
              <Chipplete name="Nagios" rating={3} />
            </Grid>

            <Grid>
              <Chipplete name="Verdaccio" rating={4} />
            </Grid>

            <Grid>
              <Chipplete name="Cert. handling" rating={4.5} />
            </Grid>

            <Grid>
              <Chipplete name="ActiveDirectory" rating={3.5} />
            </Grid>

            <Grid>
              <Chipplete name="IIS" rating={4} />
            </Grid>

            <Grid>
              <Chipplete name="AWS EC2" rating={3.5} />
            </Grid>

            <Grid>
              <Chipplete name="AWS Lambda" rating={3.5} />
            </Grid>

            <Grid>
              <Chipplete name="AWS Bucket" rating={3.5} />
            </Grid>
          </Collapse>

          <Grid item>
            <ExpandMoreButton state={"devskill"} />
          </Grid>

          <Grid item>
            <h2>Tools</h2>
          </Grid>
          <Grid>
            <Chipplete name="VSCode" rating={511111111111111} />
          </Grid>

          <Grid>
            <Chipplete name="Sublime Text" rating={511111111111111} />
          </Grid>

          <Grid>
            <Chipplete name="Putty" rating={511111111111111} />
          </Grid>

          <Grid>
            <Chipplete name="Arduino IDE" rating={511111111111111} />
          </Grid>

          <Grid>
            <Chipplete name="Gimp" rating={511111111111111} />
          </Grid>

          <Grid>
            <Chipplete name="WSL2" rating={511111111111111} />
          </Grid>

          <Grid item>
            <h2>Other</h2>
          </Grid>
          <Grid>
            <Chipplete name="REST API" rating={5} />
          </Grid>
          <Grid>
            <Chipplete name="SOAP" rating={2} />
          </Grid>
          <Grid>
            <Chipplete name="WebSocket" rating={4.5} />
          </Grid>
          <Grid>
            <Chipplete name="JSON" rating={5} />
          </Grid>
          <Grid>
            <Chipplete name="XML" rating={5} />
          </Grid>
          <Grid>
            <Chipplete name="YAML" rating={5} />
          </Grid>

          <Grid item>
            <h2>npm</h2>
          </Grid>

          <Stack spacing={0}>
            <Grid><Chip className="App-chip" label={"express"} variant="outlined" /></Grid>
            <Grid><Chip className="App-chip" label={"momentjs"} variant="outlined" /></Grid>
            <Grid><Chip className="App-chip" label={"puppeteer"} variant="outlined" /></Grid>
            <Grid><Chip className="App-chip" label={"prettier"} variant="outlined" /></Grid>
            <Grid><Chip className="App-chip" label={"ngrok"} variant="outlined" /></Grid>
            <Grid><Chip className="App-chip" label={"portmap"} variant="outlined" /></Grid>
            <Grid><Chip className="App-chip" label={"serialport-gsm"} variant="outlined" /></Grid>
            <Grid><Chip className="App-chip" label={"axios"} variant="outlined" /></Grid>
            <Grid><Chip className="App-chip" label={"eslint"} variant="outlined" /></Grid>
            <Grid><Chip className="App-chip" label={"chalk"} variant="outlined" /></Grid>
          </Stack>

          <Grid item>
            <h2>Web profiles</h2>
          </Grid>

          <Stack direction="row" spacing={2}>
            <Link
              href="https://www.linkedin.com/in/filip-hajduk-1321a0aa/"
              target="_blank"
              color="inherit"
            >
              <Avatar src={`icons/Linkedin.png`} />
            </Link>
            <Link
              href="https://github.com/Mistrzu4/"
              target="_blank"
              color="inherit"
            >
              <Tooltip title="Nothing interesting here, all projects hidden.">
                <Avatar src={`icons/GitHub.png`} />
              </Tooltip>
            </Link>
          </Stack>
        </Grid>
      </div>
    </div>
  );
}

export default App;
