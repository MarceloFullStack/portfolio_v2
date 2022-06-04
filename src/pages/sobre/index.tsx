import Layout from "../../components/Layout/Layout";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export default function index() {
  return (
    <div>
      <Layout>
        <Container style={{padding: 50}}>
            <a href="https://wakatime.com"><img src="https://wakatime.com/share/@MarceloFullstack/ecd6f327-9057-457e-8f10-987bb1d77b95.png" /></a>
        </Container>
      </Layout>
    </div>
  );
}