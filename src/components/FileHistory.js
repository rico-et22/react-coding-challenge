import ActionButton from './ActionButton'
import ReusableTable from './ReusableTable'
import { useDispatch, useSelector } from 'react-redux'
import formatFileSize from '../helpers/formatFileSize'

const FileHistory = (props) => {
  const historyState = useSelector(state => state.fileHistory)
  const dispatch = useDispatch()
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
          {historyState.map((historyItem, index) => {
            return (
              <tr key={index}>
                <td>{historyItem.fileName}</td>
                <td>{formatFileSize(historyItem.fileSize)}</td>
                <td>{new Date(historyItem.lastModified).toLocaleString()}</td>
                <td>{historyItem.fileFormat}</td>
                <td>
                  <ActionButton onClick={() => dispatch({ type: 'fileHistory/removed', payload: historyItem })}>
                    X
                  </ActionButton>
                </td>
              </tr>
            )
          })}
        </tbody>
      </ReusableTable>
    </div>
  )
}

export default FileHistory