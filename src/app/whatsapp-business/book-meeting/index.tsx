import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Head from "next/head";
import MuiPhoneNumber from "material-ui-phone-number-2";
import { FrontTheme } from "src/@core/layouts/FrontLayout";
import TextField from "src/components/text-field";
import { Button } from "src/components/button";

const BookMeeting = () => {
  const requiredMessage = "Cannot be empty";

  const schema = z.object({
    nameCompany: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),

    noTelp: z
      .string({ required_error: requiredMessage })
      .min(8, { message: "Masukan Min 8 Angka" })
      .max(13, { message: "Masukan Max 13 Angka" }),

    name: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),

    email: z.string().min(1, { message: "Email tidak boleh kosong" }).email(),

    subject: z
      .string({ required_error: requiredMessage })
      .min(1, { message: requiredMessage }),

    url: z.string(),

    message: z.string(),
  });

  type Form = z.infer<typeof schema>;

  // // state for phone number
  // const [number, setNumber] = useState<string>("");
  // const handleChangePhone = (
  //   newValue: string | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  // ) => {
  //   setNumber(newValue as string);
  // };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: {
      nameCompany: "",
      noTelp: "",
      name: "",
      email: "",
      subject: "",
      message: "",
      url: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Form) => {
    console.log(data);
    const email = "admin@adsqoo.id";
    const customBody = encodeURIComponent(
      `Halo Perkenalkan saya ${data.name}.\nDari Perusahaan ${data.nameCompany}.\nNomor telepon : ${data.noTelp}.\nSaya ingin konsultasi ${data.message}`,
    );
    const url = `https://mail.google.com/mail/?view=cm&to=${email}&su=${data.subject}&body=${customBody}`;
    window.open(url, "_blank");
    reset();
  };

  // console.log("nc", watch("nameCompany"));
  // console.log("no", watch("noTelp"));
  // console.log("n", watch("name"));
  // console.log("e", watch("email"));
  // console.log("s", watch("subject"));
  // console.log("m", watch("message"));

  return (
    <>
      <Head>
        <title>Book Meeting | Adsqoo</title>
      </Head>
      <Box sx={{ paddingBottom: 10 }}>
        <Container
          sx={({ breakpoints }) => ({
            paddingTop: 10,
            [breakpoints.up("md")]: {
              margin: "auto",
              paddingTop: 7,
              width: "50%",
            },
          })}
        >
          <Grid container direction="column" spacing={2}>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 600,
                textAlign: "center",
                color: "error.light",
              }}
            >
              Book Meeting
            </Typography>

            <Grid item>
              <Typography
                sx={{ fontSize: "20px", fontWeight: 400, textAlign: "center" }}
              >
                Silahkan isi Book meeting melalui email dibawah dengan dukungan
                team ahli kami akan menjawab semua pertanyaan Anda.
              </Typography>
            </Grid>
            <Grid item sx={{ marginTop: 3 }}>
              <Typography marginBottom={1} fontWeight={600}>
                Nama Anda
              </Typography>
              <TextField
                control={control}
                name="name"
                size="medium"
                placeholder="Nama Lengkap"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Typography marginBottom={1} fontWeight={600}>
                Email Anda
              </Typography>
              <TextField
                control={control}
                name="email"
                size="medium"
                placeholder="Email"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Typography marginBottom={1} fontWeight={600}>
                No Telepon
              </Typography>
              {/* <TextField
                control={control}
                name="noTelp"
                size="medium"
                type="number"
                placeholder="0812xxxxxxxx"
                sx={{}}
              /> */}
              <Controller
                name="noTelp"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <MuiPhoneNumber
                    value={value}
                    onChange={onChange}
                    fullWidth
                    defaultCountry="id"
                    margin="dense"
                    variant="outlined"
                    FormHelperTextProps={{ error: true }}
                    helperText={errors.noTelp?.message}
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Typography marginBottom={1} fontWeight={600}>
                Nama Perusahaan
              </Typography>
              <TextField
                control={control}
                name="nameCompany"
                size="medium"
                placeholder="Nama Perusahaan"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Typography marginBottom={1} fontWeight={600}>
                Subjek
              </Typography>
              <TextField
                control={control}
                name="subject"
                size="medium"
                placeholder="Subjek"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Typography marginBottom={1} fontWeight={600}>
                Alamat Website
              </Typography>
              <TextField
                control={control}
                name="url"
                size="medium"
                placeholder="https://adsqoo-store.md-digilabs.com/"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Typography marginBottom={1} fontWeight={600}>
                Pesan Anda(Opsional)
              </Typography>
              <TextField
                control={control}
                name="message"
                size="medium"
                placeholder="Pesan"
                fullWidth
              />
            </Grid>

            <Grid item>
              <Button
                type="submit"
                sx={() => ({
                  background:
                    "linear-gradient(135deg, #6B07B1, #8A058C, #A2046F)",
                  color: "white",
                  fontWeight: 700,
                  marginTop: 3,
                  fontSize: "16px",
                  border: `1px solid linear-gradient(135deg, #6B07B1, #8A058C, #A2046F)`,
                  width: "100%",
                  paddingX: 2,
                })}
                onClick={handleSubmit(onSubmit)}
              >
                Kirim
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
BookMeeting.getLayout = FrontTheme;

export default BookMeeting;
