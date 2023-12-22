import { useList } from "./hooks/useList"

export const List = ({ endpoint }) => {
  const { data, isLoading } = useList(endpoint)

  return (
    <ul>
      {
        isLoading ? <h3>Is loading...</h3> :
          endpoint === 'users'
            ? data.map(user => <li key={user.id}>{user.name}</li>)
            : data.map(comments => <li key={comments.id}>{comments.body}</li>)

      }
    </ul>
  )
}