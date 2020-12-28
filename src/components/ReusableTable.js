import styled from 'styled-components'

const TableWrapper = styled.div`
  width: 35rem;
  min-height: 15rem;
  background: #F6F6F6;
  border: 2px solid #bfbfbf;
  border-radius: .125rem;
`

const Table = styled.table`
width: 100%;
border-collapse: collapse;

th {
  background: #fff;
  height: 2.5rem;
  text-align: left;
  padding: 0 .5rem;
}
td {
  height: 3.5rem;
  padding: 0 .5rem;
}
`

const ReusableTable = (props) => {
  return (
    <TableWrapper>
      <Table>
        {props.children}
      </Table>
    </TableWrapper>
  )
}

export default ReusableTable