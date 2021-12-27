import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = () => {
    const projects = useStaticQuery(graphql`
        query {
            allSanityProject {
                edges {
                    node {
                        title
                        image_thumb {
                            asset {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);
    console.log(projects);
    return (
        <main>
            <h1>Angela Knits Now</h1>
            {projects.allSanityProject.edges.map((project, i) => (
                <div key={i}>
                    <h2>{project.node.title}</h2>
                    <GatsbyImage
                        image={getImage(project.node.image_thumb.asset)}
                        alt={project.node.title}
                    />
                </div>
            ))}
        </main>
    );
};

export default IndexPage;
