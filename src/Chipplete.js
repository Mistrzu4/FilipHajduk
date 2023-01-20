import React from "react";
import { Avatar, Chip, Tooltip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Rating from "@mui/material/Rating";
import withStyles from "@mui/styles/withStyles";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  chip: {
    backgroundColor: "rgba(0, 255, 0, 0.05)",
    color: "#fff",
    border: "1px solid #bdbdbd12",
  },
  cssAvatarDefault: {
    marginBottom: "30%",
    marginRight: "5em",
  },
  cssAvatar: {
    width: "15px !important",
    height: "15px !important",
    color: "#af1d1d",
  }
});

const StyledRating = withStyles({
  iconEmpty: {
    color: "#8d6300",
  },
})(Rating);

const StyledRatingSass = withStyles({
  decimal: {
    animation: "1s ease 0s pulse infinite",
  },
  icon: {
    color: "unset !important",
  },
})(Rating);

const StyledRatingCSS = withStyles({
  iconEmpty: {
    color: "transparent",
  },
})(Rating);

const Chipplete = (props) => {
  const classes = useStyles();
  const css = props.name === "CSS";
  const sass = props.name === "Sass";

  let name = props.name.replaceAll(" ", "_");
  name = name.replaceAll("#", "_");
  name = name.replaceAll("/", "_");

  let img = `/FilipHajduk/icons/${name}.png`;
  // console.log(img);
  return (
    <Grid container>
      <Grid item xs={6} justifyContent="right">
        <Tooltip placement="left" title={props.tooltip}>
          <Chip
            className={classes.chip}
            avatar={
              <Avatar src={img} className={css ? classes.cssAvatar : null} />
            }
            label={<div className={css ? classes.cssAvatarDefault : null}>{props.name}</div>}
            variant="outlined"
          />
        </Tooltip>
      </Grid>
      <Grid item xs={6} justifyContent="right">
        {sass ? (
          <StyledRatingSass
            value={props.rating}
            precision={0.5}
            readOnly
          />
        ) : css ? (
          <StyledRatingCSS value={props.rating} precision={0.5} readOnly />
        ) : (
          <StyledRating value={props.rating} precision={0.5} readOnly />
        )}
      </Grid>
    </Grid>
  );
};

export default Chipplete;