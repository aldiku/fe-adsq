import * as React from 'react';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
    toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { products } from '@/data/products';
import ProductCardWithModal from '@/components/front/shared/ProductCards';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    gap: '0.75rem',
    [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]: {
        borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
        borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
    },
    [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]: {
        borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
    },
    [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]: {
        borderLeft: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
    },
    [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]:
    {
        borderLeft: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
    },
    [`& .${toggleButtonClasses.selected}`]: {
        outline: `2px solid ${(theme.vars || theme).palette.primary.main}`,
        zIndex: 1,
    },
    // Make scrollable below 550px
    [theme.breakpoints.down(550)]: {
        display: 'flex',
        // flexWrap: 'wrap',
        overflowX: 'auto',
        // overflowY: 'hidden',
        width: '100%',
        gap: '0.5rem',
        '& .MuiToggleButton-root': {
            // minWidth: '120px',
            flex: '0 0 auto',
        },
        '& .MuiDivider-vertical': {
            // display: 'none',
        },
        scrollbarWidth: 'thin',
        scrollbarColor: `${(theme.vars || theme).palette.primary.main} #eee`,
        '&::-webkit-scrollbar': {
            height: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: (theme.vars || theme).palette.primary.main,
            borderRadius: '6px',
        },
    },
}));

export interface PaketGridProps {
    filter?: string;
    onFilterChange?: (filter: string | null) => void;
}

const PaketGrid: React.FC<PaketGridProps> = ({
    filter: filterProp = 'all',
    onFilterChange,
}) => {
    const [filter, setFilter] = React.useState<string | null>(filterProp);

    const handleFilter = (
        event: React.MouseEvent<HTMLElement>,
        newFilter: string | null,
    ) => {
        if (newFilter === null) return; // Prevent deselecting all toggles
        setFilter(newFilter);
        if (onFilterChange) {
            onFilterChange(newFilter);
        }
    };

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    // const data = [
    //     { id: 1, title: 'SMS LBA', type: 'sms', description: loremIpsum },
    //     { id: 2, title: 'SMS Broadcast', type: 'sms', description: loremIpsum },
    //     { id: 3, title: 'SMS OTP', type: 'sms', description: loremIpsum },
    //     { id: 4, title: 'SMS Targeted', type: 'sms', description: loremIpsum },
    //     { id: 5, title: 'Whatsapp Service', type: 'whatsapp', description: loremIpsum },
    //     { id: 6, title: 'Whatsapp Authentication', type: 'whatsapp', description: loremIpsum },
    //     { id: 7, title: 'Whatsapp Utility', type: 'whatsapp', description: loremIpsum },
    //     { id: 8, title: 'Whatsapp Marketing', type: 'whatsapp', description: loremIpsum },
    //     { id: 9, title: 'Whatsapp Blast', type: 'whatsapp', description: loremIpsum },
    //     { id: 10, title: 'Billboard', type: 'outdoor', description: loremIpsum },
    //     { id: 11, title: 'Videotron', type: 'outdoor', description: loremIpsum },
    //     { id: 12, title: 'Facebook Ads', type: 'online', description: loremIpsum },
    //     { id: 13, title: 'Instagram Ads', type: 'online', description: loremIpsum },
    //     { id: 14, title: 'Youtube Ads', type: 'online', description: loremIpsum },
    //     { id: 15, title: 'Google Ads', type: 'online', description: loremIpsum },
    //     { id: 16, title: 'TikTok Ads', type: 'online', description: loremIpsum },
    //     { id: 17, title: 'Push Notification Ads', type: 'online', description: loremIpsum },
    // ];

    const data = products;

    // Responsive columns
    const getColumns = () => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width < 600) return 1;
            if (width < 900) return 2;
            if (width < 1200) return 2;
            return 4;
        }
        return 4;
    };

    const [showAll, setShowAll] = React.useState(false);
    const [columns, setColumns] = React.useState(getColumns());

    React.useEffect(() => {
        const handleResize = () => setColumns(getColumns());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Filtered items
    const filteredItems = data.filter(item =>
        filter === 'all'
            ? true
            : filter === 'whatsapp'
                ? ['whatsapp-business', 'whatsapp-blast'].includes(item.type)
            : filter === 'online'
                ? ['online', 'online-ads', 'push-notification'].includes(item.type)
            : item.type === filter
    );
    const maxRows = 2;
    const maxItems = columns * maxRows;
    const limitedItems = showAll ? filteredItems : filteredItems.slice(0, maxItems);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <StyledToggleButtonGroup
                color='primary'
                value={filter}
                exclusive
                onChange={handleFilter}
                aria-label="text alignment"
                sx={{
                    padding: { xs: '12px', md: 0 }, // Adds gap for scrollbar on small screens
                    gap: '0.75rem',
                }}
            >
                <ToggleButton value="all">
                    <Typography
                        sx={{
                            textTransform: 'none',
                            // fontWeight: filter === 'all' ? 700 : 400,
                        }}
                    >
                        All
                    </Typography>
                </ToggleButton>
                <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
                <ToggleButton value="sms">
                    <Typography
                        sx={{
                            textTransform: 'none',
                            // fontWeight: filter === 'sms' ? 700 : 400,
                        }}
                    >
                        SMS
                    </Typography>
                </ToggleButton>
                <ToggleButton value="whatsapp">
                    <Typography
                        sx={{
                            textTransform: 'none',
                            // fontWeight: filter === 'whatsapp' ? 700 : 400,
                        }}
                    >
                        Whatsapp
                    </Typography>
                </ToggleButton>
                <ToggleButton value="online">
                    <Typography
                        sx={{
                            textTransform: 'none',
                            // fontWeight: filter === 'online' ? 700 : 400,
                        }}
                    >
                        Online
                    </Typography>
                </ToggleButton>
                <ToggleButton value="outdoor" >
                    <Typography
                        sx={{
                            textTransform: 'none',
                            // fontWeight: filter === 'outdoor' ? 700 : 400,
                        }}
                    >
                        Outdoor
                    </Typography>
                </ToggleButton>
            </StyledToggleButtonGroup>
            <Divider />
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
                {limitedItems.map((item, index) => (
                    <ProductCardWithModal
                        key={index}
                        name={item.name}
                        image={""}
                        description={item.description}
                        path={item.path}
                        terms_conditions={item.details}
                    />
                    // <Box key={item.id}>
                    //     <Card>
                    //         <CardContent
                    //             sx={{
                    //                 display: "flex",
                    //                 flexDirection: "column",
                    //                 gap: "1rem",
                    //             }}
                    //         >
                    //             <Box>
                    //                 <Typography variant="h6">{item.name}</Typography>
                    //                 <Typography variant="body2">{item.description}</Typography>
                    //             </Box>
                    //             <Box
                    //                 sx={{
                    //                     display: "flex",
                    //                     flexDirection: "row",
                    //                     gap: "2rem",
                    //                     justifyContent: "space-between",
                    //                 }}
                    //             >
                    //                 <Button variant="text">Details</Button>
                    //                 <Button variant="contained">Order</Button>
                    //             </Box>
                    //         </CardContent>
                    //     </Card>
                    // </Box>
                ))}
            </Box>
            {filteredItems.length > maxItems && !showAll && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        // sx={{
                        //     color: 'text.primary',
                        // }}
                        onClick={() => setShowAll(true)}>
                        See more
                    </Button>
                </Box>
            )}
            {showAll && filteredItems.length > maxItems && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="outlined"
                        onClick={() => setShowAll(false)}
                        sx={{
                            color: 'text.primary',
                        }}
                    >
                        See less
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default PaketGrid;