import React, { useState, useCallback, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Description() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography>Conway's Game of Life{"\n"}</Typography>
          <Typography variant="h5" component="h2"></Typography>
          <Typography color="textSecondary">
            {"\n"}
            The Game of Life, also known simply as Life, is a cellular automaton
            devised by the British mathematician John Horton Conway in 1970. It
            is a zero-player game, meaning that its evolution is determined by
            its initial state, requiring no further input. One interacts with
            the Game of Life by creating an initial configuration and observing
            how it evolves. It is Turing complete and can simulate a universal
            constructor or any other Turing machine.
          </Typography>
          <Typography variant="body2" component="p">
            The universe of the Game of Life is an infinite, two-dimensional
            orthogonal grid of square cells, each of which is in one of two
            possible states, live or dead, (or populated and unpopulated,
            respectively). Every cell interacts with its eight neighbours, which
            are the cells that are horizontally, vertically, or diagonally
            adjacent. At each step in time, the following transitions occur:
            <ol>
              <li>
                Any live cell with fewer than two live neighbours dies, as if by
                underpopulation.
              </li>
              <li>
                Any live cell with two or three live neighbours lives on to the
                next generation.
              </li>
              <li>
                Any live cell with more than three live neighbours dies, as if
                by overpopulation.
              </li>
              <li>
                Any dead cell with exactly three live neighbours becomes a live
                cell, as if by reproduction.
              </li>
            </ol>
            These rules, which compare the behavior of the automaton to real
            life, can be condensed into the following:
            <ol>
              <li>Any live cell with two or three live neighbours survives.</li>
              <li>
                Any dead cell with three live neighbours becomes a live cell.
              </li>
              <li>
                {" "}
                All other live cells die in the next generation. Similarly, all
                other dead cells stay dead.
              </li>
            </ol>
            The initial pattern constitutes the seed of the system. The first
            generation is created by applying the above rules simultaneously to
            every cell in the seed; births and deaths occur simultaneously, and
            the discrete moment at which this happens is sometimes called a
            tick. Each generation is a pure function of the preceding one. The
            rules continue to be applied repeatedly to create further
            generations.
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => {
            window.open('https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life');
            window.focus();
          }}>Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Description;
