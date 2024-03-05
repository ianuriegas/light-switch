import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import "./styles.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
function Remote({ color }) {
  const changeBackgroundColor = (color) => {
    document.documentElement.style.setProperty("--background-color", color);
  };
  const jumpBackgroundColor = (colors) => {
    console.log(colors);
  };
  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <Card
        className="remote-card"
        style={{
          backgroundColor: "black",
          borderRadius: "4px",
        }}
      >
        <Card className="inner-card" style={{ borderRadius: "4px" }}>
          <div style={{ padding: "19px" }}>
            <Stack alignItems={"center"} spacing={1.5}>
              {/* First grid */}
              <Stack direction={"row"} spacing={2}>
                <Stack
                  direction={"row"}
                  spacing={2.5}
                  style={{
                    backgroundColor: "black",
                    padding: "3px",
                    borderRadius: "40px",
                  }}
                >
                  <Stack spacing={1}>
                    <span class="dot"></span>
                  </Stack>
                  <Stack spacing={1}>
                    <span class="dot"></span>
                  </Stack>
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={2.5}
                  style={{
                    backgroundColor: "black",
                    padding: "3px",
                    borderRadius: "40px",
                  }}
                >
                  <Stack spacing={1}>
                    <span class="dot"></span>
                  </Stack>
                  <Stack spacing={1}>
                    <span
                      onClick={() => changeBackgroundColor("black")}
                      class="dot"
                      style={{ backgroundColor: "red" }}
                    >
                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: "bold",
                          marginTop: "4px",
                        }}
                      >
                        <PowerSettingsNewIcon style={{ fontSize: "25px" }} />
                      </Typography>
                    </span>
                  </Stack>
                </Stack>
              </Stack>
              {/* Second grid */}
              <Stack direction={"row"} spacing={2.5}>
                <Stack
                  direction={"row"}
                  spacing={2.5}
                  style={{
                    backgroundColor: "black",
                    padding: "3px",
                    borderRadius: "20px",
                  }}
                >
                  <Stack spacing={1}>
                    <span
                      onClick={() => changeBackgroundColor("red")}
                      className="dot"
                      style={{ backgroundColor: "red" }}
                    >
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        R
                      </Typography>
                    </span>
                    <span
                      onClick={() => changeBackgroundColor("rgb(255, 68, 51)")}
                      class="dot"
                      style={{ backgroundColor: "rgb(255, 68, 51)" }}
                    ></span>
                    <span
                      onClick={() => changeBackgroundColor("rgb(255,165,0)")}
                      class="dot"
                      style={{ backgroundColor: "rgb(255,165,0)" }}
                    ></span>
                    <span
                      onClick={() => changeBackgroundColor("rgb(255,215,0)")}
                      class="dot"
                      style={{ backgroundColor: "rgb(255,215,0)" }}
                    ></span>
                    <span
                      onClick={() => changeBackgroundColor("rgb(154,205,50)")}
                      class="dot"
                      style={{ backgroundColor: "rgb(154,205,50)" }}
                    ></span>
                  </Stack>
                  <Stack spacing={1}>
                    <span
                      onClick={() => changeBackgroundColor("green")}
                      class="dot"
                      style={{ backgroundColor: "green" }}
                    >
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        G
                      </Typography>
                    </span>
                    <span
                      onClick={() => changeBackgroundColor("rgb(114,208,68)")}
                      class="dot"
                      style={{ backgroundColor: "rgb(114,208,68)" }}
                    ></span>
                    <span
                      onClick={() => changeBackgroundColor("rgb(110,228,247)")}
                      class="dot"
                      style={{ backgroundColor: "rgb(110,228,247) " }}
                    ></span>
                    <span
                      onClick={() => changeBackgroundColor("rgb(54,123,145)")}
                      class="dot"
                      style={{ backgroundColor: "rgb(54,123,145)" }}
                    ></span>
                    <span
                      onClick={() => changeBackgroundColor("rgb(34,84,118)")}
                      class="dot"
                      style={{ backgroundColor: "rgb(34,84,118)" }}
                    ></span>
                  </Stack>
                  <Stack spacing={1}>
                    <span
                      onClick={() => changeBackgroundColor("blue")}
                      class="dot"
                      style={{ backgroundColor: "blue" }}
                    >
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        B
                      </Typography>
                    </span>
                    <span
                      onClick={() => changeBackgroundColor("RGB(63, 142, 237)")}
                      class="dot"
                      style={{ backgroundColor: "RGB(63, 142, 237)" }}
                    ></span>
                    <span
                      onClick={() => changeBackgroundColor("RGB(39, 40, 115)")}
                      class="dot"
                      style={{ backgroundColor: "RGB(39, 40, 115)" }}
                    ></span>
                    <span
                      onClick={() => changeBackgroundColor("RGB(78, 25, 62)")}
                      class="dot"
                      style={{ backgroundColor: "RGB(78, 25, 62)" }}
                    ></span>
                    <span
                      onClick={() => changeBackgroundColor("RGB(170, 54, 109)")}
                      class="dot"
                      style={{ backgroundColor: "RGB(170, 54, 109)" }}
                    ></span>
                  </Stack>
                  <Stack spacing={1}>
                    <span
                      onClick={() => changeBackgroundColor("white")}
                      class="dot"
                      style={{ backgroundColor: "white" }}
                    >
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        W
                      </Typography>
                    </span>
                    <span
                      onClick={() => changeBackgroundColor("#FFC0CB")}
                      class="dot"
                      style={{ backgroundColor: "#FFC0CB" }}
                    ></span>
                    <span
                      onClick={() => changeBackgroundColor("#b8117d")}
                      class="dot"
                      style={{ backgroundColor: "#b8117d" }}
                    ></span>
                    <span
                      onClick={() => changeBackgroundColor("rgb(148,0,211)")}
                      class="dot"
                      style={{ backgroundColor: "rgb(148,0,211)" }}
                    ></span>
                    <span
                      onClick={() => changeBackgroundColor("rgb(30,144,255")}
                      class="dot"
                      style={{ background: "rgb(30,144,255)" }}
                    ></span>
                  </Stack>
                </Stack>
              </Stack>
              {/* Third grid */}
              <Stack direction={"row"} spacing={2.5}>
                <Stack
                  direction={"row"}
                  spacing={2.5}
                  style={{
                    backgroundColor: "black",
                    padding: "3px",
                    borderRadius: "40px",
                  }}
                >
                  <Stack spacing={1}>
                    <span
                      onClick={() =>
                        jumpBackgroundColor(["red", "green", "blue"])
                      }
                      className="dot"
                      style={{
                        backgroundColor: "white",
                        transition: "background-color 1s",
                      }}
                    >
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        JUMP3
                      </Typography>
                    </span>
                  </Stack>
                  <Stack spacing={1}>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        JUMP7
                      </Typography>
                    </span>
                  </Stack>
                  <Stack spacing={1}>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        FADE3
                      </Typography>
                    </span>
                  </Stack>
                  <Stack spacing={1}>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        FADE7
                      </Typography>
                    </span>
                  </Stack>
                </Stack>
              </Stack>
              {/* Fourth Grid */}
              <Stack direction={"row"} spacing={1.5}>
                <Stack
                  direction={"row"}
                  spacing={2.5}
                  style={{
                    backgroundColor: "black",
                    padding: "3px",
                    borderRadius: "20px",
                  }}
                >
                  <Stack spacing={1}>
                    <span class="dot">
                      <span class="dot">
                        <Typography
                          variant="body2"
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          <ArrowDropUpOutlinedIcon
                            style={{ fontSize: "30px", color: "red" }}
                          />
                        </Typography>
                      </span>
                    </span>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        <ArrowDropDownOutlinedIcon
                          style={{ fontSize: "30px", color: "red" }}
                        />
                      </Typography>
                    </span>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        DIY1
                      </Typography>
                    </span>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        DIY4
                      </Typography>
                    </span>
                  </Stack>
                  <Stack spacing={1}>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        <ArrowDropUpOutlinedIcon
                          style={{ fontSize: "30px", color: "green" }}
                        />
                      </Typography>
                    </span>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        <ArrowDropDownOutlinedIcon
                          style={{ fontSize: "30px", color: "green" }}
                        />
                      </Typography>
                    </span>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        DIY2
                      </Typography>
                    </span>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        DIY5
                      </Typography>
                    </span>
                  </Stack>
                  <Stack spacing={1}>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        <ArrowDropUpOutlinedIcon
                          style={{ fontSize: "30px", color: "blue" }}
                        />
                      </Typography>
                    </span>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        <ArrowDropDownOutlinedIcon
                          style={{ fontSize: "30px", color: "blue" }}
                        />
                      </Typography>
                    </span>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        DIY3
                      </Typography>
                    </span>
                    <span class="dot">
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        DIY6
                      </Typography>
                    </span>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={2.5}>
                  <Stack spacing={0.3}>
                    <Stack
                      spacing={1}
                      style={{
                        backgroundColor: "black",
                        padding: "3px",
                        borderRadius: "40px",
                      }}
                    >
                      <span class="dot">
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          QUICK
                        </Typography>
                      </span>
                      <span class="dot">
                        <Typography
                          style={{
                            fontSize: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          SLOW
                        </Typography>
                      </span>
                    </Stack>
                    <Stack
                      spacing={1}
                      style={{
                        backgroundColor: "black",
                        padding: "3px",
                        borderRadius: "40px",
                      }}
                    >
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </div>
        </Card>
      </Card>
    </div>
  );
}

export default Remote;
