<h1 align="center">
  Grounded
</h1>


## 🚀 How to get started

1.  **Make sure you have the Gatsby CLI installed.**

    ```shell
    # make sure you have npm installed
    npm install -g gatsby-cli
    ```
    
    For more info, check [this guide](https://www.gatsbyjs.com/docs/reference/gatsby-cli) out. 

1.  **Clone and start developing.**

    Clone this repo into a folder, navigate into your new site’s directory, and start it up.

    ```shell
    git clone https://github.com/akshatksharma/grounded-hub.git
    cd grounded-hub/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Open the `grounded-hub` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── node_modules
    ├── src
    ├──── components
    ├──── pages
    ├──── styles
    ├── package.json


1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.   

3.  **`/src/components`**: This subdirectory will contain individual react components that can be reused across the site. If there is some core functionality (HTML, JS, and CSS) that will be reused across the site, or needs to contain its own state, it should be made into its own function.
4.  **`/src/pages`**: This subdirectory contains all the code for an indivdual page. Any file in this directory will be automatically routed with the scheme: `base-url/filename' (e.x: 'about.js` will be on the link `base url/about`. You can use the Gatsby `<Link></Link>` component to link between pages. Read about it [here](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/).
5.  **`/src/styles`**: This directory will contain all of the styles for each page or component. CSS shared on every page of the site (like styling for large titles, medium titles, body text, etc) should go on `global.css`. Styling for individual pages or components should be in their own file, in lowercase. These css files can be imported into each components/page at the top.

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.


## 🎓 Learning Gatsby

Full documentation for Gatsby lives [on their website](https://www.gatsbyjs.com/). Here are some places to start:

- **For a solid introduction, look at this [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to their documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
 
