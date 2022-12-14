<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
 Design system manager POC
 
</h1>

A proof of concept project to test out the effectiveness of integrating a design system manager in a production flow between Designers and Developers.

The Design System Manager is a tool for designers and developers to manage design systems on various platforms for SPH products such as Eshop and mySPH, Free trial, etc. It also act as a documentation for the design system structure and code base.

Required libraries to be installed

## 🚀 Quick start

1.  **Install.**

    Clone repo into your local machine

    ```shell
    # clone a copy of DSM POC into your desire folder
    git clone https://github.com/tanhjk/design-system-manager-poc.git
    ```

    Once you are in your project folder, run

    ```shell
    cd design-system-manager-poc/
    npm install
    ```

2.  **Step Figma Tokens.** [Figma Token Plugin](https://www.figma.com/community/plugin/843461159747178978)
    ![alt text](figma-token-ss.png)

    Use this [guide](https://docs.tokens.studio/sync/github) to setup your Figma Token plugins to point to `/tokens` folder

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    npm run start
    ```

4.  **To convert.**

    Convert Design Tokens using [Style Dictionary](https://amzn.github.io/style-dictionary/#/).

    ```shell
    # JSON to SCSS
    npm run convert
    ```

5.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the `Design-System-Manager-POC` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
