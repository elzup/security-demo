import { Box } from '@chakra-ui/core'

const mockUsers = [
  { id: 1, name: 'フウカ', bio: 'よろしくね' },
  { id: 2, name: 'ウツホ', bio: 'こんにちは' },
  { id: 3, name: 'マンタロー', bio: `<b>エイッ</b>` }
] as const

const IndexPage = () => {
  return (
    <Box>
      {mockUsers.map((user) => (
        <div key={user.id} style={{ padding: '1rem', margin: '1rem' }}>
          <h4>{user.name}</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: user.bio
            }}
          ></p>
          {/* <p>{user.bio}</p> */}
        </div>
      ))}
    </Box>
  )
}

export default IndexPage
