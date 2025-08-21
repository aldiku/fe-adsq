
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

const LinkStyled = styled(Link)(() => ({
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
}));

const Logo: React.FC = () => {
    const router = useRouter();

    return (
        <Box
            onClick={() => void router.push("/")}
            sx={{
                cursor: "pointer",
            }}
        >
            <LinkStyled
                href='/'
                sx={{
                    py: { xs: 1 },
                    display: 'flex',
                    justifyContent: 'start',
                    width: '100%',
                }}
            >
                <img src='/images/logo.png' width="auto" height={50} alt='logo' />
            </LinkStyled>
        </Box>
    );
};

export default Logo;