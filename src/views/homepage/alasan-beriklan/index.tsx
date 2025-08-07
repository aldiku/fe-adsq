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
			sx={{
				width: "100%",
				background: "radial-gradient(circle, rgba(191,32,38,1) 0%, rgba(191,44,110,1) 55%, rgba(182,36,110,1) 100%)",
				py: 15,
			}}
		>
			<Container>
				<Box data-aos="fade-down">
					<Typography
						sx={{
							color: "white",
							textAlign: "center",
							fontWeight: 600,
							fontSize: "31px",
							letterSpacing: "-.3px",
						}}
					>
						{reasonData?.title}
					</Typography>
					<Typography
						sx={{
							mt: 0.3,
							color: "white",
							textAlign: "center",
							fontWeight: 200,
							fontSize: "28px",
						}}
					>
						{reasonData?.description}
					</Typography>
				</Box>

				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						gap: 3, // equivalent to spacing={3}
						mt: 4,
					}}
					data-aos="fade-up"
				>
					{reasonData?.feature?.map((item, index) => (
						<Box
							key={index}
							sx={{
								width: {
									xs: '100%',    // 12/12 = full width
									sm: 'calc(50% - 24px)',   // 6/12 = half width (minus gap)
									md: 'calc(33.333% - 24px)', // 4/12 = third width
									lg: 'calc(25% - 24px)'    // 3/12 = quarter width
								},
								minWidth: 0 // prevents overflow
							}}
						>
							<Card sx={{ height: "100%", background: "white", py: { xs: 3, md: 0 } }}>
								<CardContent>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "start",
										}}
									>
										<Icon icon={item?.icon} style={{ height: "50px", width: "auto" }} />
										<Typography
											fontWeight={700}
											color="#58595B"
											textAlign="center"
											mt={1}
											mb={1}
											fontSize="16px"
											sx={{ letterSpacing: "-.3px" }}
										>
											{item.title}
										</Typography>
										<Typography
											textAlign="center"
											fontSize="14px"
											color="#58595B"
											fontWeight={400}
											sx={{ letterSpacing: "-.3px" }}
										>
											{item.description}
										</Typography>
									</Box>
								</CardContent>
							</Card>
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default AlasanBeriklan;
