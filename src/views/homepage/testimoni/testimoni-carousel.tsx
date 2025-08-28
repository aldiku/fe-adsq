"use client";

import { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import { fetchTestimonial } from "@/store/landing-page/testimonial";

const TestimoniCarousel = () => {
  const [totalImage, setTotalImage] = useState(3);

  const dispatch = useDispatch<AppDispatch>();

  const data_testimonial = useSelector((state: RootState) => state?.Testimonial)?.data ?? [];

  useEffect(() => {
    dispatch(fetchTestimonial());
  }, [dispatch]);

  const size = useWindowSize();
  const width = size.width;

  useEffect(() => {
    if (width < 1200 && width >= 850) setTotalImage(2);
    else if (width < 900) setTotalImage(1);
    else setTotalImage(2);
  }, [width]);

  return (
    <>
      <Box sx={{ position: "relative", margin: "auto" }}>
        {data_testimonial?.length > 0 ? (
          <Splide
            className="testimoni-carousel"
            options={{
              type: "loop",
              interval: 3000,
              autoplay: true,
              rewind: true,
              perPage: totalImage,
              perMove: 1,
              pagination: true,
              arrows: true,
            }}
          >
            {data_testimonial &&
              data_testimonial?.map((item: any, index) => {

                const image = process.env.NEXT_PUBLIC_API_URL + '/assets/uploads/' + item?.customer_image

                return (
                  <SplideSlide
                    key={index}
                    style={{
                      padding: "20px 15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                      height: "100%",
                    }}
                  >
                    <Card
                      sx={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        boxShadow: theme => theme.shadows[1],
                        borderRadius: "2rem",
                        overflow: "hidden",
                        backgroundColor: "background.default",
                        padding: "2rem",                        
                        flexDirection: { xs: "column", sm: "row" },
                        alignContent: { xs: "center", sm: "start" },
                        justifyContent: { xs: "space-between", sm: "flex-start" }
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: "100%", sm: "40%" },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "1rem",
                          order: { xs: 1, sm: 0 },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            minWidth: "100px",
                            maxWidth: "100px",
                            minHeight: "100px",
                            maxHeight: "100px",
                            borderRadius: "50%",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={image}
                            alt={item?.customer_name}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "50%",
                              display: "block",
                            }}
                          />
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 700,
                              textAlign: "center",
                              lineHeight: 1.2,
                            }}
                          >
                            {item?.customer_name}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            sx={{
                              textAlign: "center"
                            }}
                          >
                            {item?.customer_occupation}
                          </Typography>
                        </Box>
                      </Box>

                      <Box>
                        <Typography
                          variant="body2"
                          color="text.primary"
                          sx={{
                            lineHeight: 1.2,
                            maxWidth: "400px",
                          }}
                        >
                          "{item?.testimonial_description}"
                        </Typography>
                      </Box>
                    </Card>
                  </SplideSlide>
                )
              })}
            <style>{`
                .testimoni-carousel .splide__arrow--next {
                  // background: rgba(0,0,0,0.3);
                  margin-right: -30px;
                }
                .testimoni-carousel .splide__arrow svg {
                  fill: white !important;
                }
                .testimoni-carousel .splide__pagination {
                  bottom: -12px !important;
                }
              `}</style>
          </Splide>
        ) : (
          <>
            <h1 style={{ textAlign: "center", marginTop: "150px" }}>
              Data Not Found...
            </h1>
          </>
        )}
      </Box>
    </>
  );
};

export default TestimoniCarousel;

// const testimoniItem = [
//   {
//     name: "Dyah Rachmawati Rasyida",
//     testimoni:
//       "Brand kami, IndiHome menggunakan jasa MD Media untuk membantu mengiklankan Brand di Google, FB, IG dan Tiktok mulai dari increas awareness hingga leads generation. Sejauh ini hasilnya sangat memuaskan karena performance ads nya maksimal dan report iklan yang comprehensive. Keep up the good work guys! ",
//     company: "Digital Marketing IndiHome",
//     image: "assets/images/landing-page/main/testimoni/dyah_rachmawati.jpeg",
//   },
//   {
//     name: "Mita",
//     testimoni:
//       "SMS LBA dari Adsqoo sangat luar biasa membantu kami dengan mudah dan cepat dalam melakukan berbagai promosi dan campaign termasuk campaign pembukaan toko baru. Adsqoo sangat user friendly, campaign dapat dilakukan dimana saja sehingga ketika ada materi promo yang akan segera dirilis bisa dilakukan dengan mudah di Adsqoo",
//     company: "Marketing SUPERINDO",
//     image: "assets/images/landing-page/main/testimoni/mita.jpeg",
//   },
//   {
//     name: "Fathoni",
//     testimoni:
//       "Dengan adsqoo.id saya merasa terbantu sekali dalam memberikan informasi kepada para wajib pajak, dalam hal ini informasi melalui media SMS, jadi setiap kegiatan dan informasi yang berkaitan dengan pajak saya deliver dengan bekerjasama dengan adsqoo.id. Penggunaannya cukup mudah tinggal login, masuk dashboardnya kemudian pilih sms, setelah itu lakukan sesuai arahan. Cukup mudah tanpa harus kemana mana.",
//     company: "KPP Grogol",
//     image: "assets/images/landing-page/main/testimoni/fathoni.svg",
//   },
//   {
//     name: "Ghea",
//     testimoni:
//       "Sebelumnya saya menggunakan layanan SMS mobile secara manual melalui PT. Metra Digital Media, layanannya cukup baik dan memuaskan. Setelah MDMedia mempunyai platform iklan online adsqoo.id makan layanan SMS yang biasa saya gunakan untuk informasi pajak di kota Medan bermigrasi ke layanan digital adsqoo.id. Dengan adsqoo.id beriklan menjadi lebih mudah tanpa harus repot kemana mana.",
//     company: "KPP Medan",
//     image: "assets/images/landing-page/main/testimoni/ghea.svg",
//   },
//   {
//     name: "Getry",
//     testimoni:
//       "Selama ini sebagai penggemar KPOP saya merasa terbantu sekali dengan adanya media DOOH atau iklan videotron, dengan begitu sebagai komunitas KPOP saya bisa beriklan untuk mengucapkan sesuatu pada para musisi korea pop dan sekaligus bias dilihat oleh para penggemar KPOP lainnya baik itu ucapan ulang tahun, dan informasi-informasi yang berkaitan dengan para band band korea yang dituju.",
//     company: "KPOP Community",
//     image: "assets/images/landing-page/main/testimoni/getry.svg",
//   },
//   {
//     name: "Anin",
//     testimoni:
//       "Selama ini kami bermitra dengan PT. Metra Digital Media sebagai pelanggan iklan melalui media SMS, yang kami lakukan adalah menggunakan layanan jasa SMS LBA dan SMS Broadcast. Kedua sangat memuaskan, target atau sasaran customer saya bisa saya profilkan baik dari segi lokasi dan minat. Dengan adsqoo.id layanan SMS jadi lebih mudah tanpa harus kemana mana, tinggal register dan bayar sesuai jumlah SMS yang kita inginkan.",
//     company: "PT. SNS (Garuda Food)",
//     image: "assets/images/landing-page/main/testimoni/anin.svg",
//   },
// ];

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
