import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typog from '../../atoms/Typography/Typog';
import Logos from '../../atoms/Icon/Logos';
import Blinklist from "../../../images/organisms/Blinklist.svg"
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  list: {
    height:398,
  },
  box:{
    paddingTop:10,
  },
});
const Footer=()=> {
  const classes = useStyles();
  return (
    <footer >

      <br/>
      <br/>
      <br/>
      <div className='useStyle.box'>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }} 
        bgcolor="#F1F6F4"
        color="white"
        height={450}
        
      >
        <Container maxWidth="lg" >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4.5}>
              <Box >
                  <Logos image={Blinklist} />
              </Box>
              <br />
              <Box >
                <Typog children="Big ideas in small packages Start learning now" variant="h6"/>
                
              </Box>
              
            </Grid>
            <Grid item xs={12} sm={2.5} >
              <Box color="#03314B">Editorial</Box>
              <br />
              <Box>
                <Link href="/" color="#6D787E" underline="none">
                Book lists
                </Link>
              </Box>
              <br />
              <Box>
                <Link href="/" color="#6D787E" underline="none" >
                What is Notification?
                </Link>
              </Box>
              <br />
              <Box>
                <Link href="/" color="#6D787E" underline="none" >
                What to read next?
                </Link>
              </Box>
              <br />
              <Box>
                <Link href="/" color="#6D787E" underline="none" >
                Benefits of reading
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2.5}>
              <Box color="#03314B">Useful links</Box>
              <br />
              <Box>
                <Link href="/" color="#6D787E" underline="none">
                    Pricing
                </Link>
              </Box>
              <br />
              <Box>
                <Link href="/" color="#6D787E" underline="none">
                    Blinkist business
                </Link>
              </Box>
              <br />
              <Box>
                <Link href="/" color="#6D787E" underline="none">
                    Gift cards
                </Link>
              </Box>
              <br />
              <Box>
                <Link href="/" color="#6D787E" underline="none">
                    Blinkist magaine
                </Link>
              </Box>
              <br />
              <Box>
                <Link href="/" color="#6D787E" underline="none">
                    Contact & help
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2.5}>
              <Box color="#03314B">Company</Box>
              <br />
              <Box>
                <Link href="/" color="#6D787E" underline="none">
                    About
                </Link>
              </Box>
              <br />
              
              <Box>
                <Link href="/" color="#6D787E" underline="none">
                    Careers
                </Link>
              </Box>
              <br />
              <Box>
                <Link href="/" color="#6D787E" underline="none">
                    partners
                </Link>
              </Box>
              <br />
              <Box>
                <Link href="/" color="#6D787E" underline="none">
                    Code of Conduct
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }} color="#6D787E" marginLeft={-85}>
          © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
          </Box>
        </Container>
      </Box>
      </div>
    </footer>
  );
}
export default Footer