"use client";

import { ResonsForAds } from "@/types/landing-page/reasons-for-ads.types";
import { getEndpoint, getMenuPath, getToken } from "@/utils/api/getApi";
import getEncodedKey from "@/utils/api/getEncodedKey";
import { Icon } from "@iconify/react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const AlasanBeriklan = () => {
	const [data, setData] = useState<ResonsForAds | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(getEndpoint("reason_for_ads") + "/all", {
					headers: {
						"Content-Type": "application/json",
						"X-API-KEY": getEncodedKey(),
						"X-MENU-PATH": getMenuPath(),
						Authorization: `Bearer ${getToken()}`
					},
				});

				const result = await response.json();
				setData(result);
			} catch (error) {
				console.error("Failed to fetch reasons for ads:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const reasonData = data?.data?.[0];

	if (loading) return null;

	return (
		<Box
			bgcolor="background.paper"
			sx={{ py: { xs: "1.5rem", md: "2.5rem" }, width: "100%" }}
			paddingX={{
				xs: "1rem",
				sm: "2rem",
				md: "4rem",
				xl: "8rem",
			}}
		>
			<Box
				sx={{
					display: "flex",
					padding: "2rem",
					flexDirection: "column",
					alignItems: "flex-start",
					borderRadius: "2.5rem",
					background: "radial-gradient(147.47% 141.42% at 0% 0%, #762793 0%, rgba(118, 39, 147, 0.00) 100%), radial-gradient(100.2% 141.42% at 100% 100%, #ED821B 0%, rgba(237, 130, 27, 0.00) 100%), radial-gradient(184.9% 141.42% at 0% 100%, #EE3040 0%, rgba(238, 48, 64, 0.00) 100%), radial-gradient(244% 141.42% at 100% 0%, #AA4862 0%, rgba(170, 72, 98, 0.00) 100%)",
					gap: "1.5rem",
				}}
			>
				<Box 
					data-aos="fade-down"
					// display={{ xs: "block", md: "flex" }}
					display={"flex"}
					flexDirection={"column"}
					sx={{
						gap: "0.5rem",
					}}
				>
					<Typography
						variant="h1"
						color="background.default"
					>
						{reasonData?.title}
					</Typography>
					<Typography
						variant="body1"
						color="background.paper"
					>
						{reasonData?.description}
					</Typography>
				</Box>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: '1fr',
							sm: '1fr 1fr',
							md: '1fr 1fr',
							lg: '1fr 1fr 1fr 1fr'
						},
						gap: "1rem",
					}}
					data-aos="fade-up"
				>
					{reasonData?.feature?.map((item, index) => (
						<Box
							key={index}
							sx={{
								boxShadow: theme => theme.shadows[1],
								borderRadius: "2rem",
								minWidth: 0, // prevents overflow
							}}
						>
							<Card sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								height: "100%",
								background: "white",
								borderRadius: "1rem",
								gap: "2rem",
							}}
							>
								<CardContent
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
										gap: { xs: "0.5rem", md: "1rem" },
									}}
								>
									<Icon icon={item?.icon} style={{ height: "50px", width: "auto" }} />
									<Box>
										<Typography
											variant="body1"
											fontWeight={700}
											color="text.primary"
											textAlign="left"
										>
											{item.title}
										</Typography>
										<Typography
											variant="body2"
											textAlign="left"
											color="text.secondary"
										>
											{item.description}
										</Typography>
									</Box>
								</CardContent>
							</Card>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default AlasanBeriklan