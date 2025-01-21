import img1 from "@/public/assets/story-1.png";
import img2 from "@/public/assets/story-2.png";
import img3 from "@/public/assets/story-3.png";
import img4 from "@/public/assets/story-4.png";
import img5 from "@/public/assets/story-5.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia, Stack,
  Typography
} from "@mui/material";

const Stories = () => {
  const stories_data = [
    {
      id: crypto.randomUUID(),
      date: (
        <Typography
          sx={{
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
            borderRadius: "50px",
            p: "5px",
            px: "10px",
          }}
        >
          November 19, 2019
        </Typography>
      ),
      title: (
        <Typography variant="h5" sx={{ fontWeight: "bold", my: 2 }}>
          A fun toddler coloring training on <br /> classroom
        </Typography>
      ),
      desc: (
        <Typography>
          Beautiful branding for changes by Never Now in Australia. <br />
          changes is a platform for open discussion in an inclusive and <br />
          collaborative environment, providing the...
        </Typography>
      ),
      img: img1,
    },
    {
      id: crypto.randomUUID(),
      date: (
        <Typography
          sx={{
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
            borderRadius: "50px",
            p: "5px",
            px: "10px",
          }}
        >
          November 19, 2019
        </Typography>
      ),
      title: (
        <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
          Find out if a school fits the <br /> family’s needs
        </Typography>
      ),
      desc: "",
      img: img2,
    },
    {
      id: crypto.randomUUID(),
      date: (
        <Typography
          sx={{
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
            borderRadius: "50px",
            p: "5px",
            px: "10px",
          }}
        >
          November 19, 2019
        </Typography>
      ),
      title: (
        <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
          Summer math & literacy <br />
          centres for kids
        </Typography>
      ),
      desc: "",
      img: img3,
    },
    {
      id: crypto.randomUUID(),
      date: (
        <Typography
          sx={{
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
            borderRadius: "50px",
            p: "5px",
            px: "10px",
          }}
        >
          September 10, 2019
        </Typography>
      ),
      title: (
        <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
          Classroom management <br />
          techniques for new tutors
        </Typography>
      ),
      desc: "",
      img: img4,
    },
    {
      id: crypto.randomUUID(),
      date: (
        <Typography
          sx={{
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
            borderRadius: "50px",
            p: "5px",
            px: "10px",
          }}
        >
          July 19, 2019
        </Typography>
      ),
      title: (
        <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
          Conversation rhymes <br />
          improve kids listening
        </Typography>
      ),
      desc: "",
      img: img5,
    },
  ];
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center", gap: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", my: 12 }}>
        Our Stories
      </Typography>
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          maxHeight: { xs: "auto", md: "630px" },
          alignItems: "flex-start",
          gap: 6,
        }}
      >
        <Stack
          sx={{ display: { xs: "none", sm: "none", md: "flex", } }}
        >
          <Card sx={{ minHeight: "630px" }}>
            <CardMedia
              sx={{ height: "26rem" }}
              image={`${stories_data[0].img.src}`}
              title="green iguana"
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 2,
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <Box sx={{ position: "absolute", top: "-19px", left: "12px" }}>
                {stories_data[0].date}
              </Box>
              <Box sx={{ widows: "100%" }}>{stories_data[0].title}</Box>
              {stories_data[0].desc}
            </CardContent>
          </Card>
        </Stack>
        <Box
          sx={{
            display: { xs: "flex", md: "grid" },
            flexDirection: { xs: "column", md: "row" },
            gridTemplateColumns: {
              xs: "none",
              md: "repeat(2,290px)",
            },
            gap: 5,
            height: { xs: "auto", md: "630px" },
          }}
        >
          {stories_data.slice(1).map((story) => (
            <Card
              key={story.id}
              sx={{
                width: { xs: "290px", md: "290px" },
                height: { xs: "290px", md: "300px" },
              }}
            >
              <CardMedia
                sx={{
                  height: { xs: "10rem", md: "12rem" },
                  backgroundPosition: "fixed",
                }}
                image={`${story.img.src}`}
                title="green iguana"
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Box sx={{ position: "absolute", top: "-19px", left: "12px" }}>
                  {story.date}
                </Box>
                <Box
                  sx={{
                    width: "100%", // Sets the width of the Box component to 100% of its parent container
                  }}
                >
                  {story.title}
                </Box>
                {story.desc}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Stack>
      <Button
        sx={{
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
          borderRadius: "50px",
        }}
        variant="contained"
      >
        View All
      </Button>
    </Stack>
  );
};

export default Stories;
