import styled from "styled-components";

import { v } from "../../../styles/variables";

export const SLayout = styled.div`
    display: flex;
  //background: #16222A;
`;

export const SMain = styled.main`
    padding: calc(${v.smSpacing} * 5);

    h1 {
        font-size: 14px;
    }
`;
