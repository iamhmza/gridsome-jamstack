// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'Blog sample',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'post',
        path: './content/blog/**/*.md',
      },
    },
  ],
  transformers: {
    remark: {},
  },
  templates: {
    post: '/blog/:title',
  },
};
