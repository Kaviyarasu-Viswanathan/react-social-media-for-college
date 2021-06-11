import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./PostNew.css";
import db from "../Chatroom/FirebaseConfig/Firebase";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStateValue } from "../StateProvider";
import MessageSender from "./MessageSender";
// right post menu
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    padding: 10,
    maxWidth: 505,
    minWidth: 505,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PostNew({
  profilePic,
  image,
  username,
  timestamp,
  message,
  userscomment,
}) {
  const [{ user }, dispatch] = useStateValue();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [comment, setComment] = useState([]);
  const [heart, setHeart] = useState(false);
  const [input, setInput] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [share, setShare] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openshare = Boolean(share);

  const handleShareClick = (event) => {
    setShare(event.currentTarget);
  };

  const handleShareClose = () => {
    setShare(null);
  };
  /* 
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComment(
          snapshot.docs.map((doc) => ({
            comment: doc.userComment,
          }))
        );
      });
  }, []);
  console.log(comment); */
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  /*   const sendComment = (event) => {
    event.preventDefault();

    const userscomment = input;
    setInput("");
  }; */

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={profilePic}
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={handleClick} />
          </IconButton>
        }
        title={username}
        subheader={new Date(timestamp?.toDate()).toUTCString()}
      />
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>View their account</MenuItem>
        <MenuItem onClick={handleClose}>Report</MenuItem>
      </Menu>
      <CardMedia className={classes.media} image={image} title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon onClick={handleShareClick} />
        </IconButton>
        <Menu
          id="fade-menu"
          anchorEl={share}
          keepMounted
          open={openshare}
          onClose={handleShareClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleShareClose}>Facebook</MenuItem>
          <MenuItem onClick={handleShareClose}>Linked In</MenuItem>
          <MenuItem onClick={handleShareClose}>Whatsapp</MenuItem>
        </Menu>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/*   <input
            type="text"
            classsName="comment__input"
            placeholder={`Comment as ${user.displayName}`}
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "#ff7b77",
              borderRadius: 50,
              padding: 10,
            }}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={sendComment}>Send comment</button> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}
