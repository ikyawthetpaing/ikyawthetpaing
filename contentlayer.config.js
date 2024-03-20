import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  readingTime: {
    type: "number",
    resolve: (doc) => {
      const content = String(doc.body.raw);
      const wordsPerMinute = 200;
      const numberOfWords = content.split(/\s/g).length;
      const minutes = numberOfWords / wordsPerMinute;
      return Math.ceil(minutes);
    },
  },
};

export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: "author/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    role: {
      type: "string",
      required: true,
    },
    avatar_image_url: {
      type: "string",
      required: true,
    },
    linkedin_profile_url: {
      type: "string",
      required: true,
    },
    github_profile_url: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "project/**/*.mdx",
  contentType: "mdx",
  fields: {
    index: {
      type: "number",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    logo_image_url: {
      type: "string",
      required: true,
    },
    project_type: {
      type: "string",
      required: true,
    },
    thumbnail_url: {
      type: "string",
      required: true,
    },
    repository_url: {
      type: "string",
      required: true,
    },
    live_demo_url: {
      type: "string",
      required: true,
    },
    technologies_used: {
      type: "string",
      required: true,
    },
    publish_date: {
      type: "date",
      required: true,
    },
    owner: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Project, Author],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
