import { graphql } from 'gatsby'

export default function Article({ data: { post } }) {
  const {
    frontmatter: { title, coverImage },
    html,
  } = post
  return (
    <article>
      <CoverImage config={coverImage} />
      <h1>{title}</h1>
      <HtmlContent html={html} />
    </article>
  )
}

export const PageQuery = graphql`
  Query ArticleByID($id: String!)  {
    post: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        coverImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
