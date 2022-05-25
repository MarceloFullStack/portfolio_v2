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
        <Container style={{padding: 50}}>SOBREJS</Container>
      </Layout>
    </div>
  );
}