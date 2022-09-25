import React from 'react';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme/BlogPostItem';
// import { Redirect } from '@docusaurus/router';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import useGlobalData from '@docusaurus/useGlobalData';

export default function BlogPostItems({ items, component: BlogPostItemComponent = BlogPostItem }) {
  // const locales = useDocusaurusContext().i18n.locales;
  // let latestBlog = items[0].content.metadata.permalink;
  // console.log('items[0]', items);
  /*
  let userLang = window.navigator.language;
  if (userLang === 'zh-CN') userLang = 'zh-Hans';
  if (userLang === 'zh-TW') userLang = 'zh-Hant';

  const parg = latestBlog.split('/');
  console.log('parg', parg);

  if (parg.length >= 3 && locales.includes(userLang)) {
    parg[1] = userLang;
    latestBlog = parg.join('/');
  }

  console.log('latestBlog', latestBlog); */

  return (
    <>
      {/* <Redirect to={latestBlog} /> */}
      {items.map(({ content: BlogPostContent }) => (
        <BlogPostProvider key={BlogPostContent.metadata.permalink} content={BlogPostContent}>
          <BlogPostItemComponent>
            <BlogPostContent />
          </BlogPostItemComponent>
        </BlogPostProvider>
      ))}
    </>
  );
}
