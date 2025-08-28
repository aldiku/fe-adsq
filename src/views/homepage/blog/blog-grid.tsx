import * as React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const BlogGrid = () => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    const data = [
        { id: 1, title: 'SMS LBA', type: 'sms', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 2, title: 'SMS Broadcast', type: 'sms', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 3, title: 'SMS OTP', type: 'sms', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 4, title: 'SMS Targeted', type: 'sms', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 5, title: 'Whatsapp Service', type: 'whatsapp', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 6, title: 'Whatsapp Authentication', type: 'whatsapp', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 7, title: 'Whatsapp Utility', type: 'whatsapp', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 8, title: 'Whatsapp Marketing', type: 'whatsapp', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 9, title: 'Whatsapp Blast', type: 'whatsapp', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 10, title: 'Billboard', type: 'outdoor', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 11, title: 'Videotron', type: 'outdoor', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 12, title: 'Facebook Ads', type: 'online', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 13, title: 'Instagram Ads', type: 'online', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 14, title: 'Youtube Ads', type: 'online', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 15, title: 'Google Ads', type: 'online', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 16, title: 'TikTok Ads', type: 'online', description: loremIpsum, image: '/placeholder.jpg' },
        { id: 17, title: 'Push Notification Ads', type: 'online', description: loremIpsum, image: '/placeholder.jpg' },
    ];

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

    const maxRows = 2;
    const maxItems = columns * maxRows;
    const limitedItems = showAll ? data : data.slice(0, maxItems);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
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
                {limitedItems.map(item => (
                    <Box key={item.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="\assets\images\index\placeholder.png"
                                alt={item.title}
                            />
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                <Box>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography variant="body2">{item.description}</Typography>
                                    <Typography variant="caption">{item.type}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
            {data.length > maxItems && !showAll && (
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        onClick={() => setShowAll(true)}>
                        See more
                    </Button>
                </Box>
            )}
            {showAll && data.length > maxItems && (
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
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

export default BlogGrid;
