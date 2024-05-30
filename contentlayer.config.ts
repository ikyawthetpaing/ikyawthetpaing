import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
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
  computedFields: {
    ...computedFields,
    readingTime: {
      type: "number",
      resolve: (doc) => {
        const content = doc.body.raw as string;
        const wordsPerMinute = 200;
        const numberOfWords = content.split(/\s/g).length;
        const minutes = numberOfWords / wordsPerMinute;
        return Math.ceil(minutes);
      },
    },
  },
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
    },
    live_demo_url: {
      type: "string",
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
});
