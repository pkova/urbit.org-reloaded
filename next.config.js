module.exports = {
	webpack: (config, { isServer }) => {
	// Fixes npm packages that depend on `fs` module
	if (!isServer) {
		config.node = {
				fs: 'empty'
			}
		}
    config.externals = {
      ...config.externals,
      canvas: "util"
    }
		return config
	}
}

// const withMDX = require('@next/mdx')({
//     extension: /\.mdx$/
//   })
  
// module.exports = withMDX({
//     pageExtensions: ['js', 'jsx', 'md', 'mdx']
// })
  

