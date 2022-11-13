// @ts-nocheck
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// @ts-ignore
import Image from "next/image";
import { Paper } from "@mui/material";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { SliderImage, SliderSpan } from "../shared/styles";
import { width } from "@mui/system";

const YourComponent = () => (
  <Image
    src="/images/vulture.png" // Route of the image file
    width={400}
    height={400}
    alt="Your Name"
  />
);

export default function Index() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          highlightColor: 0x0,
          midtoneColor: 0x0,
          lowlightColor: 0xc0c0c,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x1b1b1b,
        })
      );
    }
  }, [vantaEffect]);

  return (
    <>
      <Container
        maxWidth="xxl"
        ref={vantaRef}
        sx={{
          justifyContent: "center",
          display: "flex",
          height: "93vh",
        }}
      >
        <Box
          sx={{
            my: 5,
            width: "80%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h1" component="h1" sx={{ fontWeight: 500 }}>
            Vultures
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{ marginTop: "-20px", fontWeight: 500 }}
          >
            of
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            V A L H A L L A
          </Typography>
        </Box>
      </Container>
      {/* <Container
        maxWidth="xxl"
        sx={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "80%",
            margin: "50px 0",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "40%" }}>
            <YourComponent></YourComponent>
          </Box>
          <Box sx={{ width: "40%" }}>
            {" "}
            <Typography variant="h2" component="h1" sx={{ fontWeight: 500 }}>
              Are you worthy of going through Valhalla's gates?
            </Typography>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: 300,
                marginTop: "30px",
                padding: "10px 30px 10px 0",
              }}
            >
              "You will know glory when you reach it. Trust me. This is just the
              path to get there."
            </Typography>
          </Box>
        </Box>
      </Container> */}
    </>
  );
}
