import { Box, Paper, Typography, Stack, Avatar } from "@mui/material";
import Image from "../assets/images/test.svg";

const StatCard = ({ number, subtitle }) => {
  return (
    <Stack
      sx={{
        boxShadow:
          "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        width: 400,
        height: 152,
        p: "16 16 24 24",
      }}
      direction="row"
      borderRadius={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography fontWeight={700} fontSize={32}>
          {number + "k"}
        </Typography>
        <Typography fontWeight={600} fontSize={16}>
          {subtitle}
        </Typography>
      </Box>

      <Avatar
        alt="Remy Sharp"
        src={Image}
        sx={{ width: 128, height: 128, backgroundColor: "rgb(244, 246, 248)" }}
      />
    </Stack>
  );
};
export default StatCard;
