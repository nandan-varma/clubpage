import fs from 'fs'
import path from 'path'

export default (req, res) => {
  const dirRelativeToPublicFolder = 'posts'

  const dir = path.resolve('./pages', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const posts = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

  res.statusCode = 200
  res.json(posts);
}