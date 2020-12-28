import ActionButton from './ActionButton'
import ReusableTable from './ReusableTable'

const FileHistory = (props) => {
  return (
    <div>
      <h2>File History</h2>
      <ReusableTable>
        <thead>
          <tr>
            <th>Filename</th>
            <th>File Size</th>
            <th>Last Modified</th>
            <th>File Format</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dasdas</td>
            <td>dasdas</td>
            <td>dasdas</td>
            <td>dasdas</td>
            <td>
              <ActionButton onClick={() => console.log('test click')}>
                X
              </ActionButton>
            </td>
          </tr>
        </tbody>
      </ReusableTable>
    </div>
  )
}

export default FileHistory