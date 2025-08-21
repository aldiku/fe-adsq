// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Icon Imports
import Icon from '@/components/front/shared/icon'
import { Settings } from '@/context/settingsContext'
import { useAuth } from '@/hooks/useAuth'

// ** Context

// ** Type Imports

interface Props {
    settings: Settings
    role: string
    name: string
}

// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.success.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.default}`
}))

const MenuItemStyled = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
    '&:hover .MuiBox-root, &:hover .MuiBox-root svg': {
        color: theme.palette.primary.main
    }
}))

const UserDropdown = (props: Props) => {
    // ** Props
    const { settings } = props

    // ** States
    const [anchorEl, setAnchorEl] = useState<Element | null>(null)

    // ** Hooks
    const router = useRouter()
    const { logout } = useAuth()

    // ** Vars
    const { direction } = settings

    const handleDropdownOpen = (event: SyntheticEvent) => {
        setAnchorEl(event.currentTarget)
    }

    const user = useAuth().user

    const handleDropdownClose = (url?: string) => {
        if (url) {
            router.push(url)
        }
        setAnchorEl(null)
    }

    const styles = {
        px: 4,
        py: 1.75,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary',
        textDecoration: 'none',
        '& svg': {
            mr: 2.5,
            fontSize: '1.5rem',
            color: 'text.secondary'
        }
    }

    const handleLogout = () => {
        logout()
        handleDropdownClose()
    }

    return (
        <>
            <Badge
                overlap='circular'
                onClick={handleDropdownOpen}
                sx={{ ml: 2, cursor: 'pointer' }}
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
            >
                <Avatar sx={({ palette }) => ({ background: palette.primary.main })}>
                    <Typography sx={{ color: 'white' }}>{user?.data?.fullname.slice(0, 1).toUpperCase()}</Typography>
                </Avatar>
            </Badge>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleDropdownClose()}
                sx={{ '& .MuiMenu-paper': { width: 230, mt: 4.75 } }}
                anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
            >
                <Box sx={{ py: 1.75, px: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Badge
                            overlap='circular'
                            badgeContent={<BadgeContentSpan />}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                        >
                            <Avatar sx={({ palette }) => ({ background: palette.primary.main })}>
                                <Typography sx={{ color: 'white' }}>
                                    {user?.data?.fullname.slice(0, 1).toUpperCase()}
                                </Typography>
                            </Avatar>
                        </Badge>
                        <Box sx={{ display: 'flex', ml: 2.5, alignItems: 'flex-start', flexDirection: 'column' }}>
                            <Typography sx={{ fontWeight: 500 }}>{user?.data?.fullname}</Typography>
                        </Box>
                    </Box>
                </Box>

                {user && user?.data?.role_id === 2 && (
                    <>
                        <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
                        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/profile-settings')}>
                            <Box sx={styles}>
                                <Icon icon='tabler:user-check' />
                                Profil Saya
                            </Box>
                        </MenuItemStyled>
                    </>
                )}

                {user && user?.data?.role_id === 2 && (
                    <>
                        <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
                        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/dashboards/top-up-token')}>
                            <Box sx={styles}>
                                <Icon icon='oui:token-key' />
                                Top Up Token
                            </Box>
                        </MenuItemStyled>
                    </>
                )}

                <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />
                <MenuItemStyled sx={{ p: 0 }} onClick={handleLogout}>
                    <Box sx={styles}>
                        <Icon icon='tabler:logout' />
                        Sign Out
                    </Box>
                </MenuItemStyled>
            </Menu>
        </>
    )
}

export default UserDropdown
