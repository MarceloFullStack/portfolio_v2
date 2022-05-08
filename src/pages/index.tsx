import Layout from "../components/Layout/Layout";
import Graphics from "../components/graphics/graphics";
import {Grid} from "@mui/material";
export default function Index() {
  return (
    <div>
      <Layout>
        {/*<h1 style={{padding: 50}}>Hello Next.js</h1>*/}
          <Grid container style={{width: '90vw'}} justifyContent={'center'} justifyItems={'center'} alignItems={'center'} alignContent={'center'}>
            <Grid item xs={12}>
              <Graphics />
            </Grid>
          </Grid>
      </Layout>
    </div>
  );
}