"use client";

import { AppDispatch, RootState } from "@/store";
import { fetchStepPlaceAdsAll } from "@/store/landing-page/step-place-ads";
import { StepPlaceAdsResponse } from "@/types/landing-page/step-place-ads.type";
import { Icon } from "@iconify/react";
import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LangkahPasangIklan = () => {

  const dispatch = useDispatch<AppDispatch>();

  const data: StepPlaceAdsResponse['data'] = useSelector((state: RootState) => state?.stepPlaceAds)?.data ?? [];

  useEffect(() => {
    dispatch(fetchStepPlaceAdsAll())
  }, [dispatch])

  const sortedItems = data?.length > 0 ? [...data].sort((a, b) => a.order_list - b.order_list) : [];

  return (
    <>
      <Container sx={{ py: "2.5rem", width: "100%" }}>
        <Box>
          <Typography
            variant="h1"
            color="text"
            sx={{
              textAlign: "center",
              // fontSize: "32px",
              // letterSpacing: "-.3px",
              // fontWeight: 600,
              // color: "theme.colorSchemes.light.palette.text.warning",
            }}
          >
            Langkah Mudah Pasang Iklan di Adsqoo
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            gap: "20px",
            flexWrap: "wrap",
            mt: 3,
          }}
        >
          {sortedItems?.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme => theme.palette.primary.main,
                  width: "105px",
                  height: "105px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon icon={item?.icon} style={{ width: "56px", height: "56px", color: ' white' }} />
                {/* <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "56px", height: "56px" }}
                /> */}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  mt: 1,
                  justifyContent: "center",
                }}
              >
                {/* <Typography>{`${index + 1}.`}</Typography> */}
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    textAlign: "center",
                    lineHeight: "1.3",
                  //   fontSize: "16px",
                  //   letterSpacing: "-.3px",
                  //   color: "#58595B",
                    // fontWeight: 500,
                  }}
                >{`${index + 1}. ${item?.title}`}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default LangkahPasangIklan;

// const langkahPasangIklanItem = [
//   {
//     name: "Registrasi Akun",
//     image: "/assets/images/landing-page/main/langkah-pesan-iklan/person.svg",
//   },
//   {
//     name: "Pilih Produk & Layanan",
//     image: "/assets/images/landing-page/main/langkah-pesan-iklan/product.svg",
//   },
//   {
//     name: "Pilih Paket Produk",
//     image: "/assets/images/landing-page/main/langkah-pesan-iklan/package.svg",
//   },
//   {
//     name: "Isi Form Materi Iklan",
//     image: "/assets/images/landing-page/main/langkah-pesan-iklan/form.svg",
//   },
//   {
//     name: "Lakukan Pembayaran",
//     image: "/assets/images/landing-page/main/langkah-pesan-iklan/payment.svg",
//   },
//   {
//     name: "Report Iklan",
//     image: "/assets/images/landing-page/main/langkah-pesan-iklan/report.svg",
//   },
// ];
