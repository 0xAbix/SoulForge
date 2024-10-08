/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'ヅ ZK-Bankai',
      link: {type:'doc', id:'docs/zkbankai'},
      items: [{type: 'autogenerated', dirName: 'docs/zkbankai'}]
    },
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Basic Information',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: '👋 GM',
      link: {type:'doc', id:'docs/introduction'},
      items: [{type: 'autogenerated', dirName: 'docs/Introduction'}]
    },
    {
      type: 'category',
      label: '📝 Application Process',
      link: {type:'doc', id:'docs/process'},
      items: [{type: 'autogenerated', dirName: 'docs/Process'}]
    },
    {
      type: 'doc',
      label: '📜 List of Grants',
      id:'applications/index'
    },
    {
      type: 'doc',
      label: '❓ FAQ',
      id:'docs/faq'
    },
    {
      type: 'doc',
      label: '🌍 Open Source License',
      id:'docs/opensource'
    },
  ]
};

module.exports = sidebars;
