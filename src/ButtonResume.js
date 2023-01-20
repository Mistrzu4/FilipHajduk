import React from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DownloadIcon from "@mui/icons-material/Download";
import withStyles from "@mui/styles/withStyles";

const ButtonResume = (props) => {
  const ButtonCustom = withStyles({
    outlined: {
      color: "#b0bacf",
      borderRadius: 30,
      border: "2px solid #284c3f"
    },
  })(Button);

  return (
    <Grid container>
      <ButtonCustom
        href="files/FilipHajduk.pdf"
        target="_blank"
        sx={{
          ":hover": {
            border: "2px solid #186248",
          },
        }}
        variant="outlined"
        startIcon={<DownloadIcon />}
      >
        GET MY RESUME
      </ButtonCustom>
    </Grid>
  );
};

export default ButtonResume;