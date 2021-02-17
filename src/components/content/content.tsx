import React, { useState, useCallback, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import Description from "../description/description";
import Paper from "@material-ui/core/Paper";

import produce from "immer";

const numRows = 40;
const numCols = 40;

const possibleNeighbors = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flow",
  },
  table: {
    display: "grid",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "10px",
    gridTemplateColumns: `repeat(${numCols}, 20px)`,
  },
}));

const generateBoard = () => {
  const grid: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    grid.push(Array.from(Array(numCols), () => 0));
  }

  return grid;
};

function Content() {
  const classes = useStyles();
  const [board, setBoard] = useState(() => {
    return generateBoard();
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setBoard((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            possibleNeighbors.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
  }, []);

  return (
    <>
      <ButtonGroup>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          {running ? "stop" : "start"}
        </Button>
        <Button
          onClick={() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
              rows.push(
                Array.from(Array(numCols), () => (Math.random() > 0.6 ? 1 : 0))
              );
            }

            setBoard(rows);
          }}
        >
          random
        </Button>
        <Button
          onClick={() => {
            setBoard(generateBoard());
          }}
        >
          clear
        </Button>
      </ButtonGroup>
      <Paper variant="outlined" className={classes.root}>
        <Box display="flex" alignItems="flex-start" p={1} m={1}>
          <Box p={1} flex={{ xs: 12, sm: 6 }}>
            <div className={classes.table}>
              {board.map((rows, i) =>
                rows.map((col, k) => (
                  <div
                    key={`${i}-${k}`}
                    onClick={() => {
                      const newGrid = produce(board, (gridCopy) => {
                        gridCopy[i][k] = board[i][k] ? 0 : 1;
                      });
                      setBoard(newGrid);
                    }}
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: board[i][k] ? "#f50057" : undefined,
                      border: "solid 3px black",
                    }}
                  />
                ))
              )}
            </div>
          </Box>
          <Box p={1} flex={{ xs: 12, sm: 6 }}>
            <Description />
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default Content;
