import styled from "styled-components";

const TableWrapper = styled.div`
  width: 37rem;
  min-height: 15rem;
  background: #f6f6f6;
  border: 2px solid #bfbfbf;
  border-radius: 0.125rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: #fff;
    height: 2.5rem;
    text-align: left;
    padding: 0 0.5rem;
  }

  th:nth-child(1) {
    width: 7rem;
  }
  th:nth-child(2) {
    width: 7rem;
  }
  th:nth-child(3) {
    width: 10rem;
  }

  td {
    height: 3.5rem;
    padding: 0 0.5rem;
    word-break: break-all;
  }
`;

const ReusableTable = (props) => {
  return (
    <TableWrapper>
      <Table>{props.children}</Table>
    </TableWrapper>
  );
};

export default ReusableTable;
