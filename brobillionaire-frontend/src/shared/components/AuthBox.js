import React from "react";
import Box from "@mui/material/Box";
import { Styled } from "@mui/system";

const BoxWrapper = Styled("div")({
	width: "100%",
	height: "100vh",
	display: "flex",
	alignItems: "center",
	background: "red",
});

const AuthBox = (props) => {
	return (
		<BoxWrapper>
			<Box
				sx={{
					width: 700,
					height: 400,
					bgcolor: "Vulcan",
					borderRadius: "5px",
					boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
					display: "flex",
					flexDirection: "column",
					pedding: "25px",
				}}>
				{props.children}
			</Box>
		</BoxWrapper>
	);
};

export default AuthBox;
